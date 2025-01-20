const validateUsername =(username)=>{

    const regex = /\S{3,8}/;

    return regex.test(username)
}
export const validateUsernameMessage=" Username must be 6 to 12 characters Long";
export default validateUsername;