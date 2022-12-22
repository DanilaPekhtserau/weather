import axios from 'axios';


const backendURL = "http://localhost:3000/"

export const sign_up_user=(data:any)=>{
    return axios.post(`${backendURL}users`, data)
}

export const sign_in_user=(data:any)=>{
    return axios.get(`${backendURL}users/sign_in`, data)
}