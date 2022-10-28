import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword, loginWithGoogle, loginWithFacebook } from '../../redux/actions/auth';
import { loginSchema } from "../Schema/FomSchema";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setshowPassword] = useState(false);
    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    };

    const navigateSuccess = () => {
        navigate("/");
    }    

    return (
        <motion.div className="grid justify-items-center mt-4 lg:mt-32 xl-mt-64 mb-64" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-3xl font-semibold">Iniciar Sesión</p>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={loginSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                dispatch(loginWithEmailAndPassword(values.email, values.password))
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
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1" htmlFor="email">
                                        Correo Electrónico
                                    </label>
                                    <div className="">
                                        <Field
                                            className="w-full p-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
                                            type="text"
                                            name="email"

                                        />
                                    </div>
                                    <ErrorMessage
                                        className="text-red-500"
                                        name="email"
                                        component="div"
                                    />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1" htmlFor="password">
                                        Contraseña
                                    </label>

                                    <div className="flex items-center">
                                        <Field
                                            className="w-full p-1 mr-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
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
                                        className="text-red-500"
                                        name="password"
                                        component="div"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light 400"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                                <div className="flex justify-end mt-1">
                                    <Link className="text-blue-800 font-semibold text-right" to="/restore-password">¿Olvidaste tu contraseña?</Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <hr />
                    <div className="flex flex-col w-full">
                        <span className="text-center font-semibold">Iniciar Sesion con:</span>
                        <div className="flex justify-center mt-1 gap-4">
                            <FaGoogle size={24} onClick={() => dispatch(loginWithGoogle(navigateSuccess))} className="text-gray-800 cursor-pointer hover:text-orange-700" />
                            <FaFacebook size={24} onClick={() => dispatch(loginWithFacebook(navigateSuccess))} className="text-gray-800 cursor-pointer hover:text-blue-700" />
                            {/* <FaTwitter className="text-gray-800 cursor-pointer hover:text-blue-400" /> */}
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col">
                        <div className="account_title">¿Aún no tienes una cuenta?</div>
                        <Link className="text-gray-800 font-bold" to="/auth/signup">Crea una cuenta aqui.</Link>
                    </div>
                    <hr />
                    <Link className="text-gray-800 font-semibold" to={"/"}>
                        Ir al inicio
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1666483628/Olympus/draw2_y9yzf7.svg" alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default Login;