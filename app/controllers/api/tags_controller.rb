class Api::TagsController < ApplicationController
  before_action :require_login!

  def create
    @tag = Tag.new(tag_params)
    @tag.photo_id = params[:photo_id]
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag.destroy
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end


  private

  def tag_params
    params.require(:tag).permit(:title, :photo_id)
  end


end
