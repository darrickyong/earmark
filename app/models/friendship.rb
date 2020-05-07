# == Schema Information
#
# Table name: friendships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true
  validates :user_id, uniqueness: { scope: :friend_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: 'User'

  has_many :friend_transactions,
    through: :friend,
    source: :transactions

  has_many :user_transactions,
    through: :user,
    source: :transactions

  def owed_amount
    owed = Transaction.joins(:owner).where(payer_id: self.friend_id).where(expenses: {owner_id: self.user_id}).sum(:amount)
    owe = Transaction.joins(:owner).where(payer_id: self.user_id).where(expenses: {owner_id: self.friend_id}).sum(:amount)
    paid = Payment.where(payee_id: self.friend_id, payer_id: self.user_id).sum(:amount)
    received = Payment.where(payee_id: self.user_id, payer_id: self.friend_id).sum(:amount)
    sum = owed - received - owe + paid
  end
  
end