class Weather < ApplicationRecord

  HOUR = 3600
  def self.get_geocode(lat, lon)
    geo_raw = HTTParty.get("http://api.openweathermap.org/geo/1.0/reverse?lat=#{lat}&lon=#{lon}&appid=7ee3b657d97cb80f3c740d647dd7be0d")
    JSON.parse(geo_raw.body)
  end

  def self.get_weather(lat, lon)
    weather_raw = HTTParty.get("https://api.openweathermap.org/data/2.5/weather?lat=#{lat}&lon=#{lon}&appid=7ee3b657d97cb80f3c740d647dd7be0d&units=metric")
    JSON.parse(weather_raw.body)
  end

  def self.convert_weather_icon_to_url(icon)
    "http://openweathermap.org/img/wn/#{icon}.png"
  end

  def self.is_record_outdated?(timestamp)
    ((DateTime.now.to_i - timestamp.to_i) / HOUR < 1)
  end

end
