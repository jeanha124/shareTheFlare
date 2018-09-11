class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
    end
  end

  def user_params
    params.require(:user).permit(:username, :password, :display_name, :email)
  end
end
