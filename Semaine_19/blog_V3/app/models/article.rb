#app/models/article.rb
class Article < ActiveRecorde::Base
	has_many :comments
end