import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api/v1',
    timeout:1000
})

export const loginApi = async (data)=>{
    try {
        return await apiClient.post('/auth/login',data);


    } catch (error) {
        return {
            error: true,
            exception: error
        }
    }
}

export const registerApi = async (data)=>{
    try {
        return await apiClient.post('/auth/register',data);


    } catch (error) {
        return {
            error: true,
            exception: error
        }
    }
}