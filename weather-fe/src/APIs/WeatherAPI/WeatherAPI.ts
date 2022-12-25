import axios from 'axios';

export const get_weather=(lat:number, lon:number)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ee3b657d97cb80f3c740d647dd7be0d&units=metric`)
}