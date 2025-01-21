import {useNavigate} from 'react-router'
import { registerApi } from '../api/api'
import { useState } from 'react';
import toast from 'react-hot-toast';
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
            return toast.error(response.exception?.response?.data || " Error occured while signing up , Please try again");
        }

        const {userDetails} = response.data;

        localStorage.setItem('user',JSON.stringify(userDetails));

        navigate('/');

    }

    return {
        register: register,
        isLoading,
    }

}