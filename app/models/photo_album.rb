class PhotoAlbum < ApplicationRecord
  validates :photo_id, :album_id, presence: true, uniqueness: true

  belongs_to :photo
  belongs_to :album
end
