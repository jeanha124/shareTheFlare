class Api::CommentsController < ApplicationController
  before_action :require_login!
  
  def index
  end
  end
  def create
    @comment = Comment.new(comment_params)
    if @comment.save 
      @photo = Photo.find(@comment.photo_id)
      @comments = @photo.comments
      debugger
      render 'api/photos/show'
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
    params.require(:comment).permit(:body, :commenter_id, :photo_id)
  end

end
