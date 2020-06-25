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
  validates :name, :date, :owner_id, presence: { message: "must be filled in."}
  validates :amount, :numericality => { greater_than: 0 }
  validates :split, presence: {message: ""}

  attr_reader :split
  
  after_create :create_transactions

  after_update :delete_transactions
  after_update :create_transactions
  
  
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :transactions,
    foreign_key: :expense_id,
    class_name: 'Transaction',
    dependent: :destroy

  has_many :payers,
    through: :transactions,
    source: :payer

  def split=(split)
    @split = split
  end
  
  def create_transactions()
    return if split.nil?
    amount = self.amount / (split.length + 1)
    split.each do |friend_id|
      friend = friend_id.to_i
      transaction = Transaction.new(amount: amount, payer_id: friend, expense_id: self.id)
      transaction.save!
    end
  end

  def delete_transactions()   
    self.transactions.each do |transaction|
      transaction.delete
    end
  end
  
end
