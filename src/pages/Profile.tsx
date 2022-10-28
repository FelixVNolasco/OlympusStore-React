import { useDispatch } from "react-redux";
import { deleteUser } from '../redux/apiCall';
import { RootStateOrAny, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BallTriangle } from "react-loader-spinner";
import { motion } from 'framer-motion';
import { VerifyUser } from "../redux/actions/auth";

const Profile = () => {

    const loading = useSelector((state: RootStateOrAny) => state.user.ui);
    const { _id, accessToken } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const { displayName, photoURL, email, createdAt, lastLoginAt, emailVerified } = user;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    }

    const handleDelete = async () => {
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
                dispatch(deleteUser(dispatch, _id, accessToken, navigateToHome));
            }
        })
    }

    const handleVerification = () => {
        dispatch(VerifyUser());
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {
                !loading ?
                    (
                        <div className="flex flex-col mt-4 mb-4">
                            <div className="flex justify-center w-5/6 md:w-2/3 xl:w-1/2 mx-auto bg-gray-700 text-amber-50 drop-shadow-md shadow-sm shadow-slate-500 rounded-md">
                                <div className="flex flex-col md:text-md  lg:text-lg w-3/4 m-20 items-center justify-around">
                                    <div className="flex mb-6 xl:mb-0 justify-center">
                                        <img className="w-32 rounded-md" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 items-center">
                                        <div className="flex flex-col md:flex-row md:items-center">
                                            <p className="font-semibold">Nombre:</p>
                                            <span className="md:ml-2">{displayName}</span>
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
                                                    <div className="flex justify-between">
                                                        <span className="text-sm font-semibold text-red-200">Correo No Verificado</span>
                                                        <span className="text-sm font-semibold text-blue-200 cursor-pointer" onClick={handleVerification}>Verificar</span>
                                                    </div>
                                                )
                                            }
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-semibold">Cuenta creada en:</p>
                                            <p>{createdAt}</p>
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="font-semibold">Última actualización:</p>
                                            <p>{lastLoginAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-end bg-gray-700/90 text-amber-50 w-5/6 md:w-2/3 xl:w-1/2 mx-auto rounded-md md:text-md lg:text-lg drop-shadow-md shadow-sm shadow-slate-500">
                                <Link to={`/profile/updateProfile/${_id}`} className="">
                                    <button disabled={false} className="p-2 m-2 bg-blue-200 hover:bg-blue-200/90 text-black cursor-pointer rounded-md disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed">Actualizar</button>
                                </Link>
                                <Link to={"/"} className="p-2 m-2 bg-red-200 hover:bg-red-200/90 text-black cursor-pointer rounded-md" onClick={handleDelete}>Eliminar</Link>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='flex justify-center items-center w-full h-screen'>
                            <BallTriangle
                                height="162"
                                width="162"
                                color='#406882'
                                ariaLabel='loading' />
                        </div>
                    )
            }
        </motion.div>
    )
};


export default Profile;