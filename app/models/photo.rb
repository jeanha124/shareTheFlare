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
  validates :owner_id, :title, :img_url, presence: true
  
  belongs_to :owner,
    foreign_key: :owner_id,
    classname: :User
  belongs_to :album
  has_many :tags
  has_many :comments
end
