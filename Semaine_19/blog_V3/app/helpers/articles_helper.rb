module ArticlesHelper

  #-Helper pour générer les liens vers les pages articles 
  def article_lien (this_artile)
  	html = "<a href='/articles/#{this_artile.id}'>".html_safe
  	html += this_artile.title 
  	html += "</a>".html_safe
  end

end
