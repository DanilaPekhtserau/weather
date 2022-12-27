class History < ApplicationRecord
  belongs_to :user

  def self.weather_to_history_weather(weather)
    if weather.is_a?Weather
      "Город: #{weather.town}, Температура: #{weather.temperature} °C, Погода: #{weather.weather_state}, Время: #{weather.updated_at}"
    end
  end

end
