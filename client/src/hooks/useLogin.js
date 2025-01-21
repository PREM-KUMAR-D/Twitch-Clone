import {useNavigate} from 'react-router'
import { loginApi } from '../api/api'
import { useState } from 'react';
import toast from 'react-hot-toast';

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
            return toast.error(response.exception?.response?.data || " Error occured while loggin in , Please try again");
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