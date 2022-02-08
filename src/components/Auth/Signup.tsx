
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaEye } from 'react-icons/fa';
import { useForm } from '../../hooks/useForm';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { signup } from "../../redux/apiCall";
import validator from 'validator';
import { removeError, setError } from '../../redux/uiRedux';

import { registerWithEmailPasswordName } from '../../redux/actions/auth';


const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { errors } = useSelector((state: RootStateOrAny) => state.ui);

    // const { loading } = useSelector(state => state.ui);

    const [showPassword, setshowPassword] = useState(false);

    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    }

    // const [formValues, handleInputChange] = useForm({
    //     username: 'Felix Enrique Vega Nolasco',
    //     email: 'example@correo.com',
    //     password: 'helloWorld123',
    //     password2: 'helloWorld123'
    // });

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formValues;

    const handleRegisterWithEmailPassword = (e) => {
        e.preventDefault();
        if(isFormValid()) {
            // signup(dispatch, { username, email, password })
            // .catch(error => console.log(error));
            dispatch(registerWithEmailPasswordName(email, password, name));
            navigate("/");
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required!'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('This is not an email!'))
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Passwords should be at least 6 characters and both passwords should match'))
            return false;
        }
        dispatch(removeError())
        return true;
    }

    return (
        <>
            <div className='form-wrapper'>
                <div className='form-container'>
                    <div className="auth__box-container animate__animated animate__fadeIn">
                        <p className="auth__title">Registrarse</p>
                        {/* {
                            (!isFormValid) && (
                                <div className='auth__alert-error'>
                                    {errors}
                                </div>
                            )
                        } */}
                        <form >
                            <p className='label'>Name</p>
                            <div className='input-container'>
                                <input className="auth__input" type="text" placeholder="Felix Vega" name="name" autoComplete="off" value={name} onChange={handleInputChange} />
                            </div>
                            <p className='label'>Email</p>
                            <div className='input-container'>
                                <input className="auth__input" type="text" placeholder="example@correo.com" name="email" value={email} autoComplete="off" onChange={handleInputChange} />
                            </div>
                            <p className='label'>Password</p>
                            <div className='input-container'>
                                <input className="auth__input" type={showPassword ? "text" : "password"} name="password" value={password} onChange={handleInputChange} />
                                <FaEye className='showHide-icon' onClick={handleShowPassword} />
                            </div>
                            <p className='label'>Confirm your password</p>
                            <div className='input-container'>
                                <input className="auth__input" type="password" name="password2" value={password2} onChange={handleInputChange} />
                            </div>
                            <div className='btn-container'>
                                <button className="btn btn-primary" type="submit" onClick={handleRegisterWithEmailPassword}>Sign Up</button>
                            </div>
                        </form>
                        <div className='newAccount-container'>
                            <div className="account_title">Ya tienes una cuenta?</div>
                            <Link className="create_account" to="/auth/login">Inicia Sesión.</Link>
                        </div>
                        <Link to={"/"}>
                            <div className="goHome">
                                <FaHome className='iconHome' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;