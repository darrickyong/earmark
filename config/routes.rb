Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resources :expenses, only: [:index, :show, :create, :update, :destroy]
    resources :transactions, only: [:index, :show, :create, :update, :destroy]
    resources :payments, only: [:index, :show, :create, :update, :destroy]
    resources :friendships, only: [:index, :create, :destroy] 
      
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
