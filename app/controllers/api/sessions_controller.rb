class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    
    if @user
      # debugger
      log_in(@user)
      render "/api/users/show"
    else
      # debugger
      render json: ["Invalid username/password combination."], status: 401
    end
  end

  def destroy
    @user = current_user
    # debugger
    if @user
      log_out
      render json: {}
    else
      render json: ["You are not logged in."], status: 404
    end
  end

end

