import React
    , {useEffect, useState} from 'react';
import {useGeolocated} from "react-geolocated";
import {get_weather, is_user_authenticated} from "../../../APIs/RESTAPI/BackendAPI";
import {useNavigate} from "react-router";

const WeatherView = () => {

    const navigate = useNavigate();

    const {coords} =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            }
        })

    const [weatherData, setWeatherData] = useState({
        town: undefined,
        weather_state: undefined,
        temperature: undefined,
        image: undefined
    })


    const get_weather_data = () => {
        coords && get_weather({lat: coords.latitude, lon: coords.longitude}).then((r) => {
                setWeatherData(r.data)
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
        ).catch((reason) => {
            if (reason.response.status === 401) {
                navigate("/")
            }

        })
    }, []);

    return (
        <div>
            {
                weatherData.town !== undefined &&
                <div>
                    <div>
                        <p>Город: {weatherData.town}</p>
                    </div>
                    <div>
                        <p>Погода: {weatherData.weather_state}</p>
                    </div>
                    <div>
                        <p>Температура: {weatherData.temperature} °C</p>
                    </div>
                    <div>
                        <p>Картинка: <img src={weatherData.image} alt=""/></p>
                    </div>
                </div>
            }
        </div>
    );
};

export default WeatherView;