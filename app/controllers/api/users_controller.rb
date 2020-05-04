class Api::UsersController < ApplicationController
  def index
    @users = (current_user.friends + current_user.other_friends).push(current_user)
  end
  
  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
  
end
