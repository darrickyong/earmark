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

class Expense < ApplicationRecord
  validates :name, :amount, :owner_id, :date, presence: true

  attr_reader :split

  after_save :create_transactions
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :transactions,
    foreign_key: :expense_id,
    class_name: 'Transaction'

  has_many :sharers,
    through: :transactions,
    source: :payer

  def split=(split)
    @split = split
  end
  
  def create_transactions()
    amount = self.amount / (split.length + 1)
    split.each do |friend_id|
      friend = friend_id.to_i
      transaction = Transaction.new(amount: amount, payer_id: friend, expense_id: self.id)
      transaction.save!
    end
  end
  
end
