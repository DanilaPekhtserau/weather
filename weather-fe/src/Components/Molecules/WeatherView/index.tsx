import React
    , {useEffect, useState} from 'react';
import {useGeolocated} from "react-geolocated";
import {get_weather} from "../../../APIs/WeatherAPI/WeatherAPI";
import {is_user_authenticated} from "../../../APIs/RESTAPI/BackendAPI";
import {useNavigate} from "react-router";

const WeatherView = () => {

    const navigate = useNavigate();

    const {coords, isGeolocationAvailable, isGeolocationEnabled} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            }
        })

    const [weatherData, setWeatherData] = useState({
        name: 'Неизвестно',
        main: {
            temp: 0
        },
        weather:[{main:'???'}]
    })
    const [imageURL, setImageURL] = useState('')


    const get_weather_data = () => {
        coords && get_weather(coords.latitude, coords.longitude).then((r) => {
                setWeatherData(r.data)
                setImageURL('http://openweathermap.org/img/wn/' + r.data.weather[0].icon + '.png')
                console.log(r.data)
            }
        )
    }


    useEffect(() => {
        get_weather_data()
    }, [coords]);

    useEffect(() => {
        is_user_authenticated().then((r) => {

            }
        ).catch((reason)=>{
            if (reason.response.status === 401){
                navigate("/log-in")
            }

        })
    }, []);

    return (
        <div>
            {
                weatherData.name !== 'Неизвестно' &&
                <div>
                    <div>
                        <p>Город: {weatherData.name}</p>
                    </div>
                    <div>
                        <p>Погода: {weatherData.weather[0].main}</p>
                    </div>
                    <div>
                        <p>Температура: {weatherData.main.temp.toFixed()} °C</p>
                    </div>
                    <div>
                        <p>Картинка: <img src={imageURL} alt=""/> </p>
                    </div>
                </div>
            }
        </div>
    );
};

export default WeatherView;