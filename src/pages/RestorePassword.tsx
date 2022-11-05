import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export const RestorePassword = () => {
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="auth__box-container animate__animated animate__fadeIn animate__faster">
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
        </div>
    )
}
