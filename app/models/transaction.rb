# == Schema Information
#
# Table name: transactions
#
#  id         :bigint           not null, primary key
#  amount     :integer          not null
#  payer_id   :integer          not null
#  expense_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Transaction < ApplicationRecord
  validates :amount, :payer_id, :expense_id, presence: true

  belongs_to :payer,
    foreign_key: :payer_id,
    class_name: 'User'
  
  belongs_to :expense,
    foreign_key: :expense_id,
    class_name: 'Expense'
  
  has_one :owner,
    through: :expense,
    source: :owner

    
end
