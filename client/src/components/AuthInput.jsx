import React from "react";

const AuthInput = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
})=>{

    const handleValueChange = (event)=>{
        onChangeHandler(event.target.value,field);
    }

    const handleInputBlur =(event)=>{
        onBlurHandler(event.target.value,field);
    }

    return (
        <>
        <div>
            <span>
                {label}
            </span>
        </div>
        <input
            type={type}
            value={value}
            onChange={handleValueChange}
            onBlur={handleInputBlur}
        >
        </input>
        <span style={{
            color: 'red'
        }}>
            {showErrorMessage && validationMessage}
        </span>

        </>
    )

}

export default AuthInput;