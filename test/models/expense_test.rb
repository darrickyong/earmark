# == Schema Information
#
# Table name: expenses
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  amount     :integer          not null
#  owner_id   :integer          not null
#  date       :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ExpenseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
