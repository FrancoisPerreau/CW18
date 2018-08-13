class ArticlesController < ApplicationController
  def index
  	@articles = Article.all
  end

  def show
  	@article = Article.find(params[:id])
  	@comments = Article.find(params[:id]).comments
  end


  def create
      @current_page = Article.find(params[:id])
      Comment.create writer: params[:writer], content: params[:content], article_id: @current_page.id
      redirect_to "/articles/#{@current_page.id}"
  end

end
