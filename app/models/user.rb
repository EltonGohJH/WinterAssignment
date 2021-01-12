# frozen_string_literal: true
class User < ActiveRecord::Base
  has_many :tasks
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User



  # # password validations
  # password_format = /\A
  #   (?=.*[A-Z]) # Must contain an uppercase character
  #   (?=.*[a-z]) # Must contain a lowercase character
  #   (?=.*\d) # Must contain a digit
  #   (?=.*[[:^alnum:]]) # Must contain a symbol
  # /x
  # validates :password, :length => { :minimum => 6 }
  # validates :password, format: { with: password_format, :message => 'Password must include: 1 uppercase, 1 lowercase, 1 digit and 1 special character' }
end
