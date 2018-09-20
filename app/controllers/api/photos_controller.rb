class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all;  
  end

  def new
    @photo = Photo.new;
  end

  def create
    debugger
    @photo = Photo.new(photos_params)
    @photo.owner_id = current_user.id
    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end

  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update(photos_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 404
    end
  end
  
  def destroy
    @photo = current_user.photos.find(params[:id])
    @photo.destroy
    render :show
  end
  
  def photos_params
    params.require(:photo).permit(:picture, :title, :description)
  end
  
  
end
