class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all; 
  end

  def create
    @photo = Photo.new(photos_params)
    @photo.owner_id = current_user.id
    # @photo.avatar.attach(params[:photo][:avatar])
    # @photo.cover_photo.attach(params[:photo][:cover_photo])
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def show
    @photo = Photo.find(params[:id].to_i)
    @comments = @photo.comments
    @tags = @photo.tags
    render :show
  end

  def update
    @photo = current_user.photos.find(params[:id])
    # unless params[:photo][:avatar]
    #   @photo.avatar.attach(params[:photo][:avatar])
    # end
    # unless params[:photo][:cover_photo]
    #   @photo.cover_photo.attach(params[:photo][:cover_photo])
    # end
    if @photo.update(photos_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end
  
  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo.destroy
    render :index
  end
  
  private
  
  def photos_params
    params.require(:photo).permit(:picture, :title, :description)
  end
  
  
end
