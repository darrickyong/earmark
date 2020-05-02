class Api::FriendshipsController < ApplicationController
  def index
    @friends = current_user.friends + current_user.other_friends
  end

  def create
    @user = User.find_by(email: params[:email])
    @friendship = Friendship.create(user_id: current_user.id, friend_id: @user.id)

    if @friendship.save
      render :show
    else
      render json: ["That email was not found."], status: 422
    end

  end

  def destroy
    @friendship = Friendship.find_by(id: params[:id])
    @friendship.delete
    render json: { id: @friendship.id }
  end

  private
  def friendship_params
    params.require(:friendship).permit(:email)
  end
  
end
