import { ErrorMessage, Field, Form, Formik } from "formik";
import { FaHome } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { requestRestorePassword } from "../redux/apiCall";

export const NewPassword = () => {

    const dispatch = useDispatch();

    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="auth__box-container animate__animated animate__fadeIn animate__faster">
                    <p className="auth__title">Nueva contraseña</p>
                    <Formik
                        initialValues={{ password: "" }}
                        validate={(values: any) => {
                            const errors: any = {};
                            if (!values.password) {
                                errors.password = "La contraseña es requerida";
                            }
                            return errors;
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                await dispatch(requestRestorePassword(dispatch, values))
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
                                    <label className="label" htmlFor="password">
                                        Nueva Contraseña
                                    </label>
                                    <div className="input-container">
                                        <Field
                                            className="auth__input"
                                            type="password"
                                            name="password"
                                        />
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
                                        Enviar
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
