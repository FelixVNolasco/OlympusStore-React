import { useDispatch } from "react-redux";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { logout } from '../redux/actions/auth';
import { useState } from "react";
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { FaEdit, FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { updateDisplayName } from "../components/Schema/FomSchema";
import { VerifyUser } from '../redux/actions/verifyRestoreUser';
import { deleteAccount, uploadProfilePicture, updateUsername } from '../redux/actions/updateUser';
import { useEffect } from 'react';
import { useAuth } from '../firebase/useAuth';

const Profile = () => {

    const actualUser = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { _id } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const { email, createdAt, lastLoginAt, emailVerified } = user;
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);
    const [displayName, setDisplayName] = useState(null);

    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const createdAtParsed = parseInt(createdAt)
    const createdAtDate = new Date(createdAtParsed);
    const createdAtDateFormatted = createdAtDate.toLocaleDateString("es-Mx", options);

    const lastLoginAtParsed = parseInt(lastLoginAt);
    const lastLoginAtDate = new Date(lastLoginAtParsed);
    const lastLoginAtDateFormatted = lastLoginAtDate.toLocaleDateString("es-Mx", options);

    const navigateLoginAndLogout = () => {
        dispatch(logout());
        navigate("/auth/login");
    }

    const refreshPage = () => {
        navigate(0);
    }

    const handleDelete = async () => {
        dispatch(deleteAccount(navigateLoginAndLogout));
        Swal.fire({
            title: '¿Estas seguro que quieres eliminar tu cuenta?',
            text: "Esta acción no es reversible",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteAccount(navigateLoginAndLogout));
            }
        })
    }

    const [isEditing, setIsEditing] = useState(false);

    const handleVerification = () => {
        dispatch(VerifyUser());
    }

    const handleProfileChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    const handleUploadProfilePicture = () => {
        dispatch(uploadProfilePicture(photo, refreshPage));
    }

    useEffect(() => {
        if (actualUser?.photoURL) {
            setPhotoURL(actualUser.photoURL);
        }
        if (actualUser?.displayName) {
            setDisplayName(actualUser.displayName);
        }
    }, [actualUser])


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="flex flex-col mt-4 mb-4">
                <div className="flex justify-center w-5/6 sm:w-5/6 xl:w-5/6 2xl:w-1/2 mx-auto bg-gray-700 text-amber-50 drop-shadow-md shadow-sm shadow-slate-500 rounded-md">
                    <div className="flex flex-col md:text-md  lg:text-lg w-3/4 m-20 items-center justify-around">
                        <div className="flex flex-col mb-6 xl:mb-0 items-center">
                            <img className="w-32 rounded-md" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                            <input className="mt-4" type="file" onChange={handleProfileChange} />
                            <button disabled={!photo} className="w-full px-2 py-1 rounded-md bg-gray-800/90 text-slate-50 mt-1 cursor-pointer disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed" onClick={handleUploadProfilePicture}>Cargar</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 items-center">
                            <div className="mb-1">
                                {
                                    isEditing ?
                                        (
                                            <div className="flex items-center justify-between">
                                                <Formik
                                                    initialValues={{ displayName: "" }}
                                                    validationSchema={updateDisplayName}
                                                    onSubmit={(values, { setSubmitting }) => {
                                                        try {
                                                            setSubmitting(true);
                                                            dispatch(updateUsername(values, refreshPage));
                                                            setSubmitting(false);
                                                        } catch (error) {
                                                            console.log(error)
                                                            setSubmitting(false);
                                                        }
                                                    }}
                                                >
                                                    {({ isSubmitting }) => (
                                                        <Form className="w-full text-sm">
                                                            <div className="flex flex-col">
                                                                <label className="text-sm font-semibold" htmlFor="displayName">Nombre</label>
                                                                <Field
                                                                    className="text-gray-800 p-1 text-base w-full border-2 rounded-md focus:outline-none focus:border-2 focus:border-blue-600/90"
                                                                    type="text"
                                                                    name="displayName"
                                                                />
                                                                <ErrorMessage
                                                                    className="font-semibold"
                                                                    name="displayName"
                                                                    component="" />
                                                            </div>
                                                            <div className="ml-1 mt-1 flex gap-1">
                                                                <button
                                                                    type="submit"
                                                                    className="cursor-pointer"
                                                                    disabled={isSubmitting}
                                                                >
                                                                    <FaRegCheckCircle />
                                                                </button>
                                                                <FaRegTimesCircle className="cursor-pointer" onClick={() => setIsEditing(!isEditing)} />
                                                            </div>
                                                        </Form>
                                                    )}
                                                </Formik>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className="flex items-center justify-between">
                                                <p className="font-semibold">Nombre:</p>
                                                <span className="md:ml-2 cursor-pointer">{displayName}</span>
                                                <FaEdit className="cursor-pointer" onClick={() => setIsEditing(!isEditing)} />
                                            </div>
                                        )
                                }
                                {/* 
                                <div className="flex items-center justify-between">
                                    <p className="font-semibold">Nombre:</p>
                                    <span className="md:ml-2">{displayName}</span>
                                </div> */}
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center">
                                <p className="font-semibold">Correo Electrónico:</p>
                                <div className="flex flex-col md:ml-2">
                                    <span className="">{email}</span>
                                    {
                                        emailVerified ?
                                            (
                                                <span className="text-sm font-semibold text-green-200">Correo Verificado</span>
                                            )
                                            :
                                            (
                                                <div className="flex w-full justify-between">
                                                    <span className="text-sm font-semibold text-red-200">Correo No Verificado</span>
                                                    <span className="text-sm font-semibold text-blue-200 cursor-pointer" onClick={handleVerification}>Verificar</span>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-semibold">Cuenta creada en:</p>
                                <p className="text-sm">{createdAtDateFormatted}</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="font-semibold">Última actualización:</p>
                                <p className="text-sm">{lastLoginAtDateFormatted}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-end bg-gray-700/90 text-amber-50 w-5/6 sm:w-5/6 xl:w-5/6 2xl:w-1/2 mx-auto rounded-md md:text-md lg:text-lg drop-shadow-md shadow-sm shadow-slate-500">
                    <Link to={`/profile/updateProfile/${_id}`} className="">
                        <button disabled={false} className="p-2 m-2 bg-blue-200 hover:bg-blue-200/90 text-black cursor-pointer rounded-md disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed">Actualizar</button>
                    </Link>
                    <button className="p-2 m-2 bg-red-200 hover:bg-red-200/90 text-black cursor-pointer rounded-md" onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </motion.div>
    )
};


export default Profile;