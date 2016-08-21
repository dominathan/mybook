class ProfilesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_profile, only: [:show, :update, :destroy]

  def show
    render json: @profile
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render json: @profile, status: :created, location: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  def update
    if @profile.update(profile_params)
      render json: @profile
    else
      render json: @profile.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @profile.destroy
  end

  private
    def set_profile
      @profile = Profile.find(params[:id])
    end

    def profile_params
      params.require(:profile).permit(:first_name, :last_name, :title, :suffix)
    end
end
