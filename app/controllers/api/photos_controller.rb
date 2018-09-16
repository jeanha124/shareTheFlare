class Api::PhotosController < ApplicationController
  def index
    @photos = Photos.all;  
  end

  def new
    @photo = Photo.new;
  end

  def create
    @photo = Photo.new(photos_params);
  end

  def show
    
  end

  def update
    
  end
  
  def destroy
    
  end
  
  def photos_params
    params.require(:photo).permit(:owner_id, :img_url, :title);
  end
  
  
end
