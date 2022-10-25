import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


export const RestorePassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <motion.div className="form-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="form-container">
                <div className="auth__box-container">
                    <p className="auth__title">Recuperar Contraseña</p>
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
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                const { email } = values;                                
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
                                <div className="flex flex-col text-center">
                                    <span className="text-white">Una vez enviado el correo de recuperación,</span>
                                    <span className="text-white">Favor de revisar en los correos no deseados (SPAM).</span>
                                </div>
                                <div className="btn-container">
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Recuperar
                                    </button>
                                </div>
                                <Link to={"/"}>
                                    <div className="goHome">
                                        <FaHome className='iconHome' />
                                    </div>
                                </Link>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </motion.div>
    )
}
