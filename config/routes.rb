Rails.application.routes.draw do
  root 'dashboard#index'
  get '/products', to: 'dashboard#products'
  namespace :api do
    resources :products
    resources :events do
      get :search, on: :collection
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
