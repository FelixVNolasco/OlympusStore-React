import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { RestorePasswordWithEmail } from '../redux/actions/auth';


export const RestorePassword = () => {

    const dispatch = useDispatch();

    return (
        <motion.div className="grid justify-items-center mt-4 lg:mt-32 xl-mt-64 mb-64" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-3xl font-semibold">Recuperar Contraseña</p>
                    <Formik
                        initialValues={{ email: "" }}
                        validate={(values: any) => {
                            const errors: any = {};
                            if (!values.email) {
                                errors.email = "Email is required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Invalid email address";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                dispatch(RestorePasswordWithEmail(values.email));
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
                                <div className="flex justify-end">
                                    <button
                                        className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light400"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Recuperar
                                    </button>
                                </div>
                                <hr className="mt-4"/>
                                <Link className="text-gray-800 font-semibold" to={"/"}>
                                    Ir al inicio
                                </Link>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="flex justify-center">
                    <img src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1666912008/Olympus/juicy-boy-with-laptop-installing-security-passwords-shield-and-lock-on-his-pc-and-phone_qhkjxj.svg" alt="" />
                </div>
            </div>
        </motion.div>
    )
}
