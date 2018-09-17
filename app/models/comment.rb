# == Schema Information
#
# Table name: comments
#
#  id           :bigint(8)        not null, primary key
#  commenter_id :integer          not null
#  photo_id     :integer          not null
#  title        :string           not null
#  body         :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Comment < ApplicationRecord
  validates :commenter_id, :photo_id, :title

  belongs_to :commenter,
    foreign_key: :commenter_id,
    class_name: :User
  belongs_to :photo
end
