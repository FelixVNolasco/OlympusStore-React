import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FaHome, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false);
    const handleShowPassword = () => {
        setshowPassword(!showPassword);

    };

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="auth__box-container animate__animated animate__fadeIn animate__faster">
                    <p className="auth__title">Iniciar Sesión</p>
                    <Formik
                        initialValues={{ username: "", password: "" }}
                        validate={(values: any) => {
                            const errors: any = {};
                            if (!values.username) {
                                errors.username = "Username is required";
                            }
                            if (!values.password) {
                                errors.password = "Password is required";
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                dispatch(login(values))
                                navigate("/");
                                setSubmitting(false);
                            } catch (error) {
                                console.log(error)
                                setSubmitting(false);
                            }
                        }}
                    >

                        {({ isSubmitting }) => (
                            <Form>
                                <div className="login__input">
                                    <label className="label" htmlFor="username">
                                        Nombre de usuario
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
                                <div className="btn-container">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <div className="flex justify-end mt-6">
                        <Link to={"/restore-password"} className="text-white font-semibold">Recuperar Contraseña</Link>
                    </div>
                    <div className='newAccount-container'>
                        <div className="account_title">¿Aún no tienes una cuenta?</div>
                        <Link className="text-white/90 font-bold" to="/auth/signup">Crea una cuenta.</Link>
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

export default Login;