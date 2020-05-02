class Api::FriendshipsController < ApplicationController
  def index
    @friendships = current_user.friends + current_user.other_friends
  end

  def create
    @user = User.find_by(email: friendship_params[:email])
    if @user
      @friendship = Friendship.create(user_id: current_user.id, friend_id: @user.id)      
      if @friendship.save
        @friendship = @user
        render :show
      else
        render json: ["You are already friends"], status: 422
      end
    else
      render json: ["This user does not exist. Please sign them up."], status: 422
    end
    

  end

  def destroy
    @user = User.find_by(id: params[:id])
    @friendship = Friendship.find_by(user_id: current_user.id, friend_id: @user.id)
    if @friendship == nil
      @friendship = Friendship.find_by(user_id: @user.id, friend_id: current_user.id)
    end
    
    @friendship.delete
    render json: { id: @friendship.id }
  end

  private
  def friendship_params
    params.require(:friendship).permit(:email)
  end
  
end
