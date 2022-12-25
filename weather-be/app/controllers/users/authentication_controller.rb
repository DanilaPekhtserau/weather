class Users::AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /users/sign_in
  def login
    @user = User.find_by_email(params[:user][:email])
    if @user&.valid_password?(params[:user][:password])
      token = JsonWebToken.encode(user_id: @user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end

  def is_logged_in?
    if @current_user
      render status: :ok
    else
      render status: :unauthorized
    end
  end

  private

  # def login_params
  #   params.permit(:email, :password)
  # end
end
