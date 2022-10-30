import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { motion } from 'framer-motion';
import { restorePassword } from '../components/Schema/FomSchema';
import { resetPassword } from '../firebase/useAuth';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const RestorePassword = () => {

    function useQuery() {
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <motion.div className="grid justify-items-center mt-4 lg:mt-32 xl-mt-64 mb-64" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-3xl font-semibold">Nueva Contraseña</p>
                    <Formik
                        initialValues={{ password: "" }}
                        validationSchema={restorePassword}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                await resetPassword(query.get('oobCode'), values.password);
                                Swal.fire({
                                    icon: "success",
                                    title: "Exito",
                                    text: "Se ha restaurado correctamente tu contraseña",
                                    confirmButtonColor: "3085d6",
                                    confirmButtonText: "Ok",
                                    didClose: () => navigate("/auth/login")
                                });
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
                                        className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light400"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Restaurar
                                    </button>
                                </div>
                                <hr className="mt-4" />
                                <Link className="text-gray-800 font-semibold" to={"/"}>
                                    Ir al inicio
                                </Link>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="flex justify-center">
                    <img width={512} src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1666912008/Olympus/juicy-boy-with-laptop-installing-security-passwords-shield-and-lock-on-his-pc-and-phone_qhkjxj.svg" alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default RestorePassword