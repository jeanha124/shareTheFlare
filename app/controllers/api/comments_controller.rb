class Api::CommentsController < ApplicationController
  before_action :require_login!
  
  def create
    @comment = Comment.new(comment_params)
    @comment.commenter_id = current_user.id
    @comment.photo_id = params[:photo_id]
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:title, :body, :commenter_id, :photo_id)
  end

end
