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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
