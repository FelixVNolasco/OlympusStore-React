import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { registerWithEmailPasswordName } from '../../redux/actions/auth';

const Signup = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false);
    const [showConfirmPassword, setshowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    }

    const handleShowConfirmPassword = () => {
        setshowConfirmPassword(!showConfirmPassword);
    }

    return (

        <div className='form-wrapper'>
            <div className='form-container'>
                <div className="auth__box-container animate__animated animate__fadeIn animate__faster">
                    <p className="auth__title">Registrarse</p>
                    <Formik
                        initialValues={{ name: "", email: "", password: "", passwordConfirm: "" }}
                        validate={(values: any) => {
                            const errors: any = {};
                            if (!values.name) {
                                errors.name = "Full Name is required";
                            }
                            if (!values.email) {
                                errors.email = "Email is required";
                            }
                            if (!values.password) {
                                errors.password = "Password is required";
                            }
                            if (values.password !== values.passwordConfirm) {
                                errors.passwordConfirm = "Both Password must be the same";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                              ) {
                                errors.email = "Invalid email address";
                              }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                const { name, email, password } = values;
                                dispatch(registerWithEmailPasswordName(email,password,name));                                
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
                                    <label className="label" htmlFor="name">
                                        Nombre Completo
                                    </label>
                                    <div className="input-container">
                                        <Field
                                            className="auth__input"
                                            type="name"
                                            name="name"
                                        />
                                    </div>
                                    <ErrorMessage
                                        className="error-text"
                                        name="name"
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