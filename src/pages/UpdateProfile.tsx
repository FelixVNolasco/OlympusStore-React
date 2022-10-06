import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { RootStateOrAny, useSelector } from "react-redux";
import { updateSchema } from '../components/Schema/FomSchema';
import { updateUser } from '../redux/apiCall';

export const UpdateProfile = () => {

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
            <div className="flex justify-center mt-12 w-5/6 md:w-2/3 xl:w-1/2 mx-auto bg-indigo-300/75 rounded-md">
                <div className="flex flex-col-reverse xl:flex-row w-2/3 m-12 items-center justify-around">
                    <Formik
                        initialValues={{ id: _id, username: username, email: email, password: "" }}
                        validationSchema={updateSchema}
                        onSubmit={async (values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                await dispatch(updateUser(dispatch, values))

                                navigate("/");
                                setSubmitting(false);
                            } catch (error) {
                                console.log(error)
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="w-full xl:w-3/5">
                                <div className="flex flex-col mb-4">
                                    <label className="font-semibold" htmlFor="username">
                                        Nombre de usuario
                                    </label>
                                    <div className="input-container">
                                        <Field
                                            className="p-1 rounded-md w-full border-2 focus:outline-none focus:border-2 focus:border-green-400/90"
                                            type="text"
                                            name="username"
                                        />
                                    </div>
                                    <ErrorMessage
                                        className="text-red-900 text-sm font-bold mt-1"
                                        name="username"
                                        component="div"
                                    />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="font-semibold" htmlFor="email">
                                        Correo Electrónico
                                    </label>
                                    <div className="">
                                        <Field
                                            className="p-1 rounded-md w-full border-2 focus:outline-none focus:border-2 focus:border-green-400/90"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <ErrorMessage
                                        className="text-red-900 text-sm font-bold mt-1"
                                        name="email"
                                        component="div"
                                    />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="font-semibold" htmlFor="password">
                                        Contraseña
                                    </label>
                                    <div className="flex items-center">
                                        <Field
                                            className="p-1 rounded-md w-full border-2 focus:outline-none focus:border-2 focus:border-green-400/90"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                        />
                                        {showPassword ? (
                                            <FaEye
                                                className="ml-2 w-4 cursor-pointer"
                                                onClick={handleShowPassword}
                                            />
                                        ) : (
                                            <FaEyeSlash
                                                className="ml-2 w-4 cursor-pointer"
                                                onClick={handleShowPassword}
                                            />
                                        )}
                                    </div>
                                    <ErrorMessage
                                        className="text-red-900 text-sm font-bold mt-1"
                                        name="password"
                                        component="div"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        className="p-2 rounded-md bg-indigo-400 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-300 hover:bg-indigo-400/80 transition ease-in-out duration-150"
                                        type="submit"
                                        disabled={true}
                                    >
                                        {
                                            !isSubmitting ? ("Actualizar") : ("Cargando")
                                        }
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <div className="w-1/2 flex mb-6 xl:mb-0 justify-center transition ease-in duration-300 hover:-translate-y-2 cursor-pointer">
                        <img className="w-32 rounded-md" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}
