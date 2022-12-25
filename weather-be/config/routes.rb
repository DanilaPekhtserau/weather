Rails.application.routes.draw do
  post '/users/sign_in', to: 'users/authentication#login'
  get '/users/is_signed_in', to: 'users/authentication#is_logged_in?'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
