class Api::TransactionsController < ApplicationController
  def index
    @transactions = current_user.owed_transactions + current_user.related_transactions
  end

  def create
    @transaction = Transaction.new(transaction_params)
    if @transaction.save
      render :show
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  def update
    @transaction = Transaction.find_by(id: params[:id])

  end
  
  def destroy
    @transaction = Transaction.find_by(id: params[:id])
    @transaction.delete
    render json: { id: @transaction.id }
  end

  private
  def transaction_params
    params.require(:transaction).permit(:amount, :payer_id, :expense_id)
  end
end
