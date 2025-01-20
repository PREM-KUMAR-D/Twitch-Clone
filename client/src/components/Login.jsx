import React, { useState } from "react";
import classes from './Login.module.css';
import { Logo } from "./Logo";
import AuthInput from "./AuthInput";
import validatePassword, { validatePasswordMessage } from "../validators/validatePassword";
import validateMail, { validateEmailMessage } from '../validators/validateMail';
import { useLogin } from "../hooks/useLogin";

const Login = ({ switchAuthHanlder }) => {

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
        }
    })

    const { login, isLoading } = useLogin();

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

    const handleLogin = (event) => {
        event.preventDefault();
        login(formState.email.value, formState.password.value)
    }

    const isSubmitDisabled = isLoading || !formState.email.isValid || !formState.password.isValid;

    console.log(formState)

    return (
        <div className={classes.loginContainer} >
            <Logo text={'Login to Twitch clone'} />
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
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState.password.showError}
                    validationMessage={validatePasswordMessage}
                ></AuthInput>
                <button
                    onClick={handleLogin}

                    disabled={isSubmitDisabled}
                >
                    Log in</button>
            </form>
            <span onClick={switchAuthHanlder}> Don't have an account ? Signup</span>

        </div>
    )


}

export default Login;