# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  photo_id   :integer          not null
#  friend_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :title, :author_id, :photo_id, :friend_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User
   
  belongs_to :photo
  belongs_to :tag
  has_many :tags  
end
