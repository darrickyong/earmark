# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  before_validation :ensure_session_token

  has_many :expenses,
    foreign_key: :owner_id,
    class_name: 'Expense'

  has_many :transactions,
    foreign_key: :payer_id,
    class_name: 'Transaction'

  has_many :payments,
    foreign_key: :payer_id,
    class_name: 'Payment'

  has_many :friendships,
    foreign_key: :user_id,
    class_name: 'Friendship'

  has_many :other_friendships,
    foreign_key: :friend_id,
    class_name: 'Friendship'

  has_many :friends,
    through: :friendships,
    source: :friend
  
  has_many :other_friends,
    through: :other_friendships,
    source: :user

  has_many :received_payments,
    foreign_key: :payee_id,
    class_name: 'Payment'

  has_many :owed_expenses,
    through: :transactions,
    source: :expense

  has_many :owed_transactions,
    through: :expenses,
    source: :transactions

  has_many :related_transactions,
    through: :owed_expenses,
    source: :transactions

  attr_reader :password
  
  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)

    if @user && @user.is_password?(password)
      return @user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

end

