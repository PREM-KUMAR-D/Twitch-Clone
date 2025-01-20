import {useNavigate} from 'react-router'
import { loginApi } from '../api/api'
import { useState } from 'react';
export const useLogin = ()=>{

    const [isLoading , setIsLoading] = useState(false);
    const navigate = useNavigate();


    const login = async (email,password)=>{

        setIsLoading(true);

        const response = await loginApi({
            email,
            password
        })

        setIsLoading(false);

        if(response.error){
            return console.log(response.error);
        }

        const {userDetails} = response.data;

        localStorage.setItem('user',userDetails);

        navigate('/');

    }

    return {
        login,
        isLoading,
    }

}