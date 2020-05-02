class Api::ExpensesController < ApplicationController

  def index
    @expenses = current_user.expenses + current_user.owed_expenses
  end

  def show
    @expense = Expense.find_by(id: params[:id])
  end

  def create
    @expense = Expense.new(expense_params)
    @expense.owner_id = current_user.id
    if @expense.amount > 0
      if @expense.save
        render :show
      else
        render json: @expense.errors.full_messages, status: 422
      end
    else
      render json: ["Amount must be greater than 0"], status: 422
    end
  end
  
  def update
    @expense = Expense.find_by(id: params[:id])
    if @expense.owner_id == current_user.id 
      if params[:expense][:amount].to_i > 0
        if @expense.update(expense_params)
          render :show
        else
          render json: @expense.errors.full_messages, status: 422
        end
      else
        render json: ["Amount must be greater than 0"], status: 422
      end
    else
      render json: ["You are not the creator of this expense"], status: 401
    end
  end

  def destroy
    @expense = Expense.find_by(id: params[:id])
    if current_user.id == @expense.owner_id
      @expense.delete
      render json: { id: @expense.id } # maybe change
    else
      render json: ["You are not the creator of this expense"], status: 401
    end
  end

  private
  def expense_params
    params.require(:expense).permit(:name, :amount, :date)
  end

end
