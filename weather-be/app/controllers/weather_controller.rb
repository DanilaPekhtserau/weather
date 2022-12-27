class WeatherController < ApplicationController
  before_action :authorize_request
  after_action :create_history

  def create
    geocode_parsed = Weather.get_geocode(params[:lat],params[:lon])
    if (@weather = Weather.find_by(town: geocode_parsed.first["name"])) # Город есть
      if Weather.is_record_outdated?(@weather.updated_at) # Запись свежая
        return render json: @weather
      else
        # Запись уста рела
        weather_parsed = Weather.get_weather(params[:lat],params[:lon])
        @weather = Weather.update(weather_state: weather_parsed["weather"].first["main"],
                                 town: geocode_parsed.first["name"],
                                 temperature: weather_parsed["main"]["temp"].round,
                                 image: Weather.convert_weather_icon_to_url(weather_parsed["weather"].first["icon"]))
        return render json: @weather.first
      end
    end
    weather_parsed = Weather.get_weather(params[:lat],params[:lon])
    @weather = Weather.create(weather_state: weather_parsed["weather"].first["main"],
                             town: geocode_parsed.first["name"],
                             temperature: weather_parsed["main"]["temp"].round,
                             image: Weather.convert_weather_icon_to_url(weather_parsed["weather"].first["icon"]))
    render json: @weather
  end
  private

  def create_history
    @current_user.histories << History.create(weather: History.weather_to_history_weather(@weather))
  end
end





