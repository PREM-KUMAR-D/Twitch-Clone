import React, { useState } from "react";
import classes from './Login.module.css';
import { Logo } from "./Logo";
import AuthInput from "./AuthInput";
import validatePassword, { validatePasswordMessage } from "../validators/validatePassword";
import validateMail, { validateEmailMessage } from '../validators/validateMail';
import validateUsername, { validateUsernameMessage } from '../validators/validateUsername';
import { useRegister } from "../hooks/useRegister";


const Register = ({ switchAuthHanlder }) => {

    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false,
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        },
        username: {
            value: '',
            isValid: false,
            showError: false,
        },
        passwordConf: {
            value: '',
            isValid: false,
            showError: false,
        }
    })

    const { register, isLoading } = useRegister();

    const handleInputValueChange = (value, field) => {
        setFormState((prev) => {
            return {
                ...prev,
                [field]: {
                    ...prev[field],
                    value: value
                }
            }
        })
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;

        switch (field) {
            case 'password':
                isValid = validatePassword(value);

                break;
            case 'email':
                isValid = validateMail(value);

                break;
            case 'username':
                isValid = validateUsername(value);
                break;
            case 'passwordConf':
                isValid = (value === formState.password.value);
                break;


            default:
                break;
        }

        setFormState((prev) => {
            return {
                ...prev,
                [field]: {
                    ...prev[field],
                    isValid: isValid,
                    showError: !isValid,
                }
            }
        })

    }

    const handleRegister = (event) => {
        event.preventDefault();
        register(formState.email.value, formState.password.value, formState.username.value);
        
    }

    const isSubmitDisabled = isLoading || !formState.email.isValid || !formState.password.isValid || !formState.username.isValid ||
        formState.password.value !== formState.passwordConf.value;

    console.log(formState)

    return (
        <div className={classes.loginContainer} >
            <Logo text={'Signup to Twitch clone'} />
            <form >

                <AuthInput
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.email.showError}
                    validationMessage={validateEmailMessage}
                ></AuthInput>
                <AuthInput
                    field='username'
                    label='Username'
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.username.showError}
                    validationMessage={validatePasswordMessage}
                ></AuthInput>
                <AuthInput
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validateUsernameMessage}
                ></AuthInput>
                <AuthInput
                    field='passwordConf'
                    label='Password Confirmation'
                    value={formState.passwordConf.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.passwordConf.showError}
                    validationMessage="Password Dont match!"
                ></AuthInput>
            </form>
            <button
                disabled={isSubmitDisabled}
                onClick={handleRegister}
            >
                Register</button>
            <span onClick={switchAuthHanlder}> Already have an account ? SignIn</span>

        </div>
    )


}

export default Register;