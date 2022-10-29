import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { updateSchema } from '../components/Schema/FomSchema';
import { logout, updateUserFirebase} from '../redux/actions/auth';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export const UpdateProfile = () => {

    // const [profileSelected, setProfileSelected] = useState<any>("");
    // const [profileResponse, setProfileResponse] = useState<any>("");
    // const { photoURL } = user;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setshowPassword] = useState(false);
    const handleShowPassword = () => {
        setshowPassword(!showPassword);
    };

    // const uploadProfileImage = () => {
    //     const formData = new FormData();
    //     formData.append("file", profileSelected);
    //     formData.append("upload_preset", "olympus_store");
    //     if (profileSelected !== "") {
    //         try {
    //             axios.post("https://api.cloudinary.com/v1_1/dhyxqmnua/image/upload", formData).then(({ data }) => setProfileResponse(data.url));
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    const handleLogout = () => {
        dispatch(logout());
        navigate("/auth/login");
    }

    return (
        <>
            <motion.div className="flex justify-center mt-4 mb-4 w-5/6 md:w-2/3 xl:w-1/2 mx-auto bg-indigo-300/75 rounded-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="flex flex-col-reverse xl:flex-row w-2/3 m-12 items-center justify-around">
                    <Formik
                        initialValues={{ displayName: "", email: "", password: "",  }}
                        validationSchema={updateSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            try {
                                setSubmitting(true);
                                updateUserFirebase(values, handleLogout);
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
                                    <label className="font-semibold" htmlFor="displayName">
                                        Nombre
                                    </label>
                                    <div className="input-container">
                                        <Field
                                            className="p-1 rounded-md w-full border-2 focus:outline-none focus:border-2 focus:border-green-400/90"
                                            type="text"
                                            name="displayName"
                                        />
                                    </div>
                                    <ErrorMessage
                                        className="text-red-900 text-sm font-bold mt-1"
                                        name="displayName"
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

                                {/* <input type="file" onChange={(e) => {
                                    setProfileSelected(e.target.files[0]);
                                }} /> */}
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
                                        className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light 400"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Actualizar
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    {/* <div className="w-1/2 flex mb-6 xl:mb-0 justify-center transition ease-in duration-300 hover:-translate-y-2 cursor-pointer">
                        <img className="w-32 rounded-md" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                    </div> */}
                </div>

            </motion.div>
        </>
    )
}
