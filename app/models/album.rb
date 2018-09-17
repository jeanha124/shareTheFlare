# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :owner_id, :title, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    classname: :User
  has_many :photo_albums,
    foreign_key: :album_id,
    classname: :PhotoAlbum  
  has_many :photos

end
