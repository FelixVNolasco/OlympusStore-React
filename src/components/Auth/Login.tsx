import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FaHome, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth";
import { loginSchema } from "../Schema/FomSchema";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false);
    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    };

    return (
        <div className="grid justify-items-center lg:mt-32 xl-mt-64 mb-64">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
                <div className="grid grid-cols-1 gap-4 animate__animated animate__fadeIn animate__faster">
                    <p className="text-3xl font-semibold">Iniciar Sesión</p>
                    <Formik
                        initialValues={{ username: "", password: "" }}
                        validationSchema={loginSchema}
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
                                <div className="flex flex-col">
                                    <label className="mb-1" htmlFor="username">
                                        Nombre de usuario
                                    </label>
                                    <div className="mb-4">
                                        <Field
                                            className="w-full p-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-gray-600/90"
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
                                <div className="flex flex-col">
                                    <label className="mb-1" htmlFor="password">
                                        Contraseña
                                    </label>

                                    <div className="flex items-center mb-4">
                                        <Field
                                            className="w-full p-1 mr-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-gray-600/90"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                        />
                                        {showPassword ? (
                                            <FaEye
                                                className="h-4 w-4 text-gray-800 cursor-pointer"
                                                onClick={handleShowPassword}
                                            />
                                        ) : (
                                            <FaEyeSlash
                                                className="h-4 w-4 text-gray-800 cursor-pointer"
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

                                <div className="flex justify-end">
                                    <button
                                        className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light400"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className='newAccount-container'>
                        <div className="account_title">¿Aún no tienes una cuenta?</div>
                        <Link className="text-gray-800 font-bold" to="/auth/signup">Crea una cuenta aqui.</Link>
                    </div>
                    <Link className="text-gray-800 font-semibold" to={"/"}>
                        Ir al inicio
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1666483628/Olympus/draw2_y9yzf7.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login;