import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { signup } from '../../redux/actions/auth';
import { signupSchema } from '../Schema/FomSchema';
import { motion } from 'framer-motion';

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
        <motion.div className='grid justify-items-center mt-4 lg:mt-32 xl-mt-64 mb-64' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center'>
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-3xl font-semibold">Registrarse</p>
                    <Formik
                        initialValues={{ username: "", email: "", password: "", passwordConfirm: "" }}
                        validationSchema={signupSchema}
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
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1" htmlFor="username">
                                        Nombre de Usuario
                                    </label>
                                    <div className="">
                                        <Field
                                            className="w-full p-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
                                            type="text"
                                            name="username"
                                        />
                                    </div>
                                    <ErrorMessage
                                        className="text-red-500"
                                        name="username"
                                        component="div"
                                    />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1" htmlFor="email">
                                        Correo Electrónico
                                    </label>
                                    <div className="">
                                        <Field
                                            className="w-full p-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
                                            type="email"
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

                                <div className="flex flex-col mb-4">
                                    <label className="mb-1" htmlFor="passwordConfirm">
                                        Confirmar Contraseña
                                    </label>
                                    <div className="flex items-center">
                                        <Field
                                            className="w-full p-1 mr-1 border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
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
                                        className="text-red-500"
                                        name="passwordConfirm"
                                        component="div"
                                    />
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light400"
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
                        <Link className="text-gray-800 font-bold" to="/auth/login">Inicia Sesión.</Link>
                    </div>
                    <Link className="text-gray-800 font-semibold" to={"/"}>
                        Ir al inicio
                    </Link>
                </div>
                <div className="flex justify-center">
                    <img src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1666655263/Olympus/undraw_sign_in_re_o58h_udkhrb.svg" alt="" />                    
                </div>
            </div>
        </motion.div>
    )
}

export default Signup;