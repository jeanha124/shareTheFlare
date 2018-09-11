class UsersController < ApplicationController
  def create
  end

  def user_params
    params.require(:user).permit(:username, :password, :display_name, :email)
  end
end
