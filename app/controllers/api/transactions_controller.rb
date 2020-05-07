class Api::TransactionsController < ApplicationController

  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      render :show
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  def destroy
    
  end

  private
  def transaction_params
    params.require(:transaction).permit(:amount, :payer_id, :expense_id)
  end
end
