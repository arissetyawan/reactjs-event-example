class Api::ProductsController < ApplicationController
  def index
    render json: Product.all
  end

  def search
    query = params[:query]
    products = Product.where('name LIKE ? OR place LIKE ? OR description LIKE ?',
                         "%#{query}%", "%#{query}%", "%#{query}%")
    render json: products
  end

  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render nothing: true, status: :bad_request
    end
  end

  private

    def product_params
      params.require(:product).permit(:name, :category, :stock, :price)
    end

end
