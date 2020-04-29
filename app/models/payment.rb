# == Schema Information
#
# Table name: payments
#
#  id         :bigint           not null, primary key
#  amount     :integer          not null
#  payee_id   :integer          not null
#  payer_id   :integer          not null
#  date       :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Payment < ApplicationRecord
  validates :amount, :payee_id, :payer_id, :date, presence: true

  belongs_to :payer,
    foreign_key: :payer_id,
    class_name: 'User'
    
  belongs_to :receiver,
    foreign_key: :payee_id,
    class_name: 'User'

  
end
