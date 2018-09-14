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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
