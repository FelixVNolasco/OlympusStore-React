import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signup } from '../../redux/actions/auth';
import { signupSchema } from '../Schema/FomSchema';

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setshowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className='form-wrapper'>
            <div className='form-container'>
                <div className="auth__box-container animate__animated animate__fadeIn animate__faster">
                    <p className="auth__title">Registrarse</p>
                    <Formik
                        initialValues={{ username: "", email: "", password: "", passwordConfirm: "" }}
                        validationSchema={ signupSchema }
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                dispatch(signup(values));
                                navigate("/auth/login");
                                setSubmitting(false);
                            } catch (error) {
                                console.log(error);
                                setSubmitting(false);
                            }
                        }}
                    >

                        {({ isSubmitting }) => (
                            <Form>
                                <div className="login__input">
                                    <label className="label" htmlFor="username">
                                        Nombre de Usuario
                                    </label>
                                    <div className="input-container">
                                        <Field
                                            className="auth__input"
                                            type="text"
                                            name="username"
                                        />
                                    </div>
                                    <ErrorMessage
                                        className="error-text"
                                        name="username"
                                        component="div"
                                    />
                                </div>
                                <div className="login__input">
                                    <label className="label" htmlFor="email">
                                        Correo Electrónico
                                    </label>
                                    <div className="input-container">
                                        <Field
                                            className="auth__input"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <ErrorMessage
                                        className="error-text"
                                        name="email"
                                        component="div"
                                    />
                                </div>

                                <div className="password-section">
                                    <label className="label" htmlFor="password">
                                        Contraseña
                                    </label>
                                    <div className="password-container">
                                        <Field
                                            className="auth__input"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                        />
                                        {showPassword ? (
                                            <FaEye
                                                className="showHide-icon"
                                                onClick={handleShowPassword}
                                            />
                                        ) : (
                                            <FaEyeSlash
                                                className="showHide-icon"
                                                onClick={handleShowPassword}
                                            />
                                        )}
                                    </div>
                                    <ErrorMessage
                                        className="error-text"
                                        name="password"
                                        component="div"
                                    />
                                </div>

                                <div className="password-section">
                                    <label className="label" htmlFor="passwordConfirm">
                                        Confirmar Contraseña
                                    </label>
                                    <div className="password-container">
                                        <Field
                                            className="auth__input"
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="passwordConfirm"
                                        />
                                        {showConfirmPassword ? (
                                            <FaEye
                                                className="showHide-icon"
                                                onClick={handleShowConfirmPassword}
                                            />
                                        ) : (
                                            <FaEyeSlash
                                                className="showHide-icon"
                                                onClick={handleShowConfirmPassword}
                                            />
                                        )}
                                    </div>
                                    <ErrorMessage
                                        className="error-text"
                                        name="passwordConfirm"
                                        component="div"
                                    />
                                </div>

                                <div className="btn-container">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"        
                                        disabled={isSubmitting}                                
                                    >
                                        Registrarse
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className='newAccount-container'>
                        <div className="account_title">¿Ya tienes una cuenta?</div>
                        <Link className="text-white font-bold" to="/auth/login">Inicia Sesión.</Link>
                    </div>
                    <Link to={"/"}>
                        <div className="goHome">
                            <FaHome className='iconHome' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup;