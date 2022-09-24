import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { updateUser } from "../../redux/apiCall";
import { RootStateOrAny, useSelector } from "react-redux";
import { NavbarComponent } from "../Shared/Navbar/NavbarComponent";
import { updateSchema } from "../Schema/FomSchema";

export const UpdateUserProfile = () => {

  const { _id, username, email } = useSelector((state: RootStateOrAny) => state.user.currentUser);
  const user = useSelector((state: RootStateOrAny) => state.user.currentUser);

  const { photoURL } = user;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => {
    setshowPassword(!showPassword);
  };

  return (
    <>
      <NavbarComponent />
      <div className="mt-12">
        <div className="profileContainer animate__animated animate__fadeIn animate__faster">
          <div className="profileSection">
            <div className="profileGrid items-center">
              <Formik
                initialValues={{ id: _id, username: username, email: email, password: "" }}
                validationSchema={updateSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  try {
                    setSubmitting(true);
                    const response = await dispatch(updateUser(dispatch, values))
                    console.log(response);
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
                          className="text-black w-full p-1 rounded-md"
                          type="text"
                          name="username"
                        />
                      </div>
                      <ErrorMessage
                        className="error-text-update"
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
                          className="text-black w-full p-1 rounded-md"
                          type="email"
                          name="email"
                        />
                      </div>
                      <ErrorMessage
                        className="error-text-update"
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
                          className="text-black w-full p-1 rounded-md"
                          type={showPassword ? "text" : "password"}
                          name="password"
                        />
                        {showPassword ? (
                          <FaEye
                            className="ml-2 w-6  cursor-pointer"
                            onClick={handleShowPassword}
                          />
                        ) : (
                          <FaEyeSlash
                            className="ml-2 cursor-pointer"
                            onClick={handleShowPassword}
                          />
                        )}
                      </div>
                      <ErrorMessage
                        className="error-text-update"
                        name="password"
                        component="div"
                      />
                    </div>
                    <div className="btn-container">
                      <button
                        className="p-2 bg-blue-300 rounded-md text-black font-semibold disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={true}
                      >
                        Actualizar
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="profileImage">
                <img className="img" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
