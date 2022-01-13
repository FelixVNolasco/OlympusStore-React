
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux'

// import validator from 'validator';

import { useForm } from '../../hooks/useForm';
// import { setError, removeError } from '../../actions/ui'
// import { registerWithEmailPasswordName } from '../../actions/auth';

export const Signup = () => {

    // const dispatch = useDispatch();
    // const { msgError } = useSelector(state => state.ui);
    // const { loading } = useSelector(state => state.ui);

    // const [showPassword, setshowPassword] = useState(false);

    // const [formValues, handleInputChange ] = useForm({
    //     name: 'Felix Vega',
    //     email: 'felixvnolasco@hotmail.com',
    //     password: '123456',
    //     password2: '123456'
    // });

    // // const {name, email, password, password2} = formValues;

    // const handleRegisterWithEmailPassword = (e) => {
    //     e.preventDefault();
    //     if(isFormValid()) {
    //         // dispatch(registerWithEmailPasswordName(email, password, name));
    //     }
    // }

    // const handleShowPassword = () => {
    //     setshowPassword(!showPassword);
    // }

    // const isFormValid = () => {
    //     if(name.trim().length === 0) {
    //         dispatch(setError('Name is required!'));
    //         return false;
    //     } else if( !validator.isEmail(email) ) {
    //         dispatch(setError('This is not an email!'))
    //         return false;
    //     } else if (password !== password2 || password.length < 5 ) {            
    //         dispatch(setError('Passwords should be at least 6 characters and should match'))
    //         return false;
    //     }
    //     dispatch(removeError())
    //     return true;
    // }

    return (

        <div className='form-wrapper animate__animated animate__fadeIn'>

            <div className='form-container'>
                <div className="auth__box-container">
                    <p className="auth__title">Sign Up</p>
                    {/* {
                        (msgError)  && (
                            <div className='auth__alert-error'>
                                {msgError}
                            </div>
                        )
                    } */}
                    <form >
                        <p className='label'>Name</p>
                        <div className='input-container'>
                            <input className="auth__input" type="text" placeholder="Felix Vega" name="name" autoComplete="off" value="" />
                        </div>
                        <p className='label'>Email</p>
                        <div className='input-container'>
                            <input className="auth__input" type="text" placeholder="example@correo.com" name="email" value="" autoComplete="off" />
                        </div>
                        <p className='label'>Password</p>
                        <div className='input-container'>
                            <input className="auth__input" name="password" value="" />
                            <FaEye className='showHide-icon' />
                        </div>
                        <p className='label'>Confirm your password</p>
                        <div className='input-container'>
                            <input className="auth__input" type="password" name="password2" />
                        </div>
                        <div className='btn-container'>
                            <button className="btn btn-primary" type="submit" >Sign Up</button>
                        </div>
                    </form>
                    <div className='newAccount-container'>
                        <div className="account_title">You already have an account?</div>
                        <Link className="create_account" to="/auth/login">Log in here.</Link>
                    </div>
                </div>

            </div>


        </div>
    )
}