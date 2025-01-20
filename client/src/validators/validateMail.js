const validateEmail =(email)=>{

    const regex = /\S+@\S+\.\S+/;

    return regex.test(email)
}

export const validateEmailMessage ='Enter valid Email';

export default validateEmail;