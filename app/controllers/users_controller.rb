class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show]
  before_action :find_user, only: [:show]

  def show
  end


  private

  def find_user
    @user = User.find(params[:id])
  end


  def user_params
  params.require(:user).permit(:user_name, :photo)
  end


end
