class WeatherController < ApplicationController
  before_action :authorize_request

  def create
    geocode_parsed = get_geocode
    if (weather = Weather.find_by(town: geocode_parsed.first["name"])) # Город есть
      if (DateTime.now.to_i - weather.updated_at.to_i) / 3600 < 1 # Запись свежая
        return render json: weather
      else
        # Запись уста рела
        weather_parsed = get_weather
        weather = Weather.update(weather_state: weather_parsed["weather"][0]["main"],
                                 town: geocode_parsed.first["name"],
                                 temperature: weather_parsed["main"]["temp"].round,
                                 image: convert_weather_icon_to_url(weather_parsed["weather"].first["icon"]))
        return render json: weather.first
      end
    end
    weather_parsed = get_weather
    weather = Weather.create(weather_state: weather_parsed["weather"].first["main"],
                             town: geocode_parsed.first["name"],
                             temperature: weather_parsed["main"]["temp"].round,
                             image: convert_weather_icon_to_url(weather_parsed["weather"].first["icon"]))
    render json: weather
  end

end

private

def get_geocode
  geo_raw = HTTParty.get("http://api.openweathermap.org/geo/1.0/reverse?lat=#{params[:lat]}&lon=#{params[:lon]}&appid=7ee3b657d97cb80f3c740d647dd7be0d")
  JSON.parse(geo_raw.body)
end

def get_weather
  weather_raw = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?lat=#{params[:lat]}&lon=#{params[:lon]}&appid=7ee3b657d97cb80f3c740d647dd7be0d&units=metric")
  JSON.parse(weather_raw.body)
end

def convert_weather_icon_to_url(icon)
  "http://openweathermap.org/img/wn/#{icon}.png"
end

