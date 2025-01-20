import {useNavigate} from 'react-router'
import { registerApi } from '../api/api'
import { useState } from 'react';
export const useRegister = ()=>{

    const [isLoading , setIsLoading] = useState(false);
    const navigate = useNavigate();


    const register = async (email,password, username)=>{

        setIsLoading(true);

        const response = await registerApi({
            email,
            password,
            username
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
        register: register,
        isLoading,
    }

}