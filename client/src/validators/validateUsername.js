const validateUsername =(username)=>{

    const regex = /^\S{3,8}&/;

    return regex.test(username)
}

export default validateUsername;