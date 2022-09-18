import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { updateUser } from "../../redux/apiCall";
import { RootStateOrAny, useSelector } from "react-redux";

export const UpdateUserProfile = () => {

  const { _id, email } = useSelector((state: RootStateOrAny) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };


  return (
    <div className="mt-12">
      <div className="profileContainer animate__animated animate__fadeIn animate__faster">
        <div className="profileSection">
          <div className="profileGrid">
            <Formik
              initialValues={{ username: "", email: "", password: "" }}
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
                  dispatch(updateUser(dispatch,_id,values))
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
                    <div className="flex items-center">
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
                      Actualizar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
