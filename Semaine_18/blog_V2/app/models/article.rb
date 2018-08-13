#app/models/article.rb
class Article < ActiveRecord::Base
	has_many :comments
end