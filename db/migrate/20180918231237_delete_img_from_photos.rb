class DeleteImgFromPhotos < ActiveRecord::Migration[5.2]
  def change
    remove_column :photos, :img_url
  end
end
