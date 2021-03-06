class Api::FriendshipsController < ApplicationController
  def index
    @friendships = current_user.friendships.includes(:user, :friend) + current_user.other_friendships.includes(:user, :friend)
  end

  def show
    @friendship = Friendship.find_by(id: params[:id])
  end

  def create
    @user = User.find_by(email: friendship_params[:email])
    if @user
      @friendship = Friendship.create(user_id: current_user.id, friend_id: @user.id)      
      if @friendship.save
        render :show
      else
        render json: ["You are already friends"], status: 422
      end
    else
      render json: ["Email not found - please sign them up"], status: 422
    end
  end

  def destroy
    @friendship = Friendship.find_by(id: params[:id])
    @friendship.destroy
    render json: { id: @friendship.id }
  end

  private
  def friendship_params
    params.require(:friendship).permit(:email)
  end
  
end
