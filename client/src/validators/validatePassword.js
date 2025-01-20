const validatePassword =(password)=>{

    const regex = /^\S{6,12}$/;

    return regex.test(password)
}

export const validatePasswordMessage=" Password must be 6 to 12 characters Long";

export default validatePassword;