import axios from 'axios';

const backendURL = "http://localhost:3000/"

export const sign_up_user = (data: any) => {
    return axios.post(`${backendURL}users`, data)
}

export const sign_in_user = (data: any) => {
    return axios.post(`${backendURL}users/sign_in`, data)
}

export const is_user_authenticated = () => {
    return axios.get(`${backendURL}users/is_signed_in`, {headers: {'Authorization': localStorage.getItem('token')}})
}

export const get_weather=(data: any)=>{
    return axios.post(`${backendURL}weather`, data, {headers: {'Authorization': localStorage.getItem('token')}})
}