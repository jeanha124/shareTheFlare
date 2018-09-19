# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  owner_id    :integer          not null
#  album_id    :integer
#  title       :string           not null
#  description :text
#  img_url     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :owner_id, :title, presence: true
  # validate :ensure_photo

  has_one_attached :picture
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User
  has_many :tags
  has_many :comments
  has_many :photo_albums,
    foreign_key: :photo_id,
    class_name: :PhotoAlbum
  has_many :albums,
    through: :photo_albums,
    source: :photo

  # def ensure_photo
  #   unless self.picture.attached?
  #     errors[:picture] << "must be attached"
  #   end
  # end

end
