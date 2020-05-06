class Api::PaymentsController < ApplicationController
  def index
    @payments = current_user.payments + current_user.received_payments
  end

  def create
    @payment = Payment.new(payment_params)
    @payment.payer_id = current_user.id

    if @payment.amount > 0
      if @payment.save
        render :show
      else
        render json: @payment.errors.full_messages, status: 422
      end
    else
      render json: ["Amount must be greater than 0."], status: 422
    end
  end

  def destroy
    @payment = Payment.find_by(id: params[:id])
    if @payment.payer_id == current_user.id 
      @payment.delete
      render json: { id: @payment.id }
    else
      render json: ["You did not create this payment."]
    end
  end
  
  private
  def payment_params
    params.require(:payment).permit(:amount, :payee_id, :date)
  end
end
