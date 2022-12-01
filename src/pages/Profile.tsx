import { useDispatch } from "react-redux";
import { deleteUser } from '../redux/apiCall';
import { RootStateOrAny, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BallTriangle } from "react-loader-spinner";

const Profile = () => {

    const loading = useSelector((state: RootStateOrAny) => state.user.ui);
    const { _id, accessToken } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const { username, photoURL, email, createdAt, updatedAt } = user;
    const CreationDate = new Date(createdAt);
    const lastSignInTimeDate = new Date(updatedAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    const CreationDateParsed = CreationDate.toLocaleDateString("es-Mx", options);
    const lastSignInTimeDateParsed = lastSignInTimeDate.toLocaleDateString("es-Mx", options);
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
            confirmButtonText: 'Eliminar',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUser(dispatch, _id, accessToken, navigateToHome));
            }
        })
    }

    return (
        <>
            {
                !loading ?
                    (
                        <>
                            <div className="flex justify-center mt-12 w-5/6 md:w-2/3 xl:w-1/2 mx-auto bg-gray-700 text-amber-50 drop-shadow-md shadow-sm shadow-slate-500 rounded-md">
                                <div className="flex flex-col md:text-md  lg:text-lg w-3/4 m-20 items-center justify-around">
                                    <div className="flex mb-6 xl:mb-0 justify-center">
                                        <img className="w-32 rounded-md" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 items-center">
                                        <div className="flex flex-col md:flex-row md:items-center">
                                            <p className="font-semibold">Nombre de Usuario:</p>
                                            <span className="md:ml-2">{username}</span>
                                        </div>
                                        <div className="flex flex-col md:flex-row md:items-center">
                                            <p className="font-semibold">Correo Electrónico:</p>
                                            <span className="md:ml-2">{email}</span>
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="font-semibold">Cuenta creada en:</p>
                                            <p>{CreationDateParsed}</p>
                                        </div>

                                        <div className="flex flex-col">
                                            <p className="font-semibold">Última actualización:</p>
                                            <p>{lastSignInTimeDateParsed}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end bg-gray-700/90 text-amber-50 w-5/6 md:w-2/3 xl:w-1/2 mx-auto rounded-md md:text-md lg:text-lg drop-shadow-md shadow-sm shadow-slate-500">
                                <Link to={`/profile/updateProfile/${_id}`} className="">
                                    <button disabled={false} className="p-2 m-2 bg-blue-200 hover:bg-blue-200/90 text-black cursor-pointer rounded-md disabled:bg-gray-400 disabled:text-gray-300 disabled:cursor-not-allowed">Actualizar</button>
                                </Link>
                                <Link to={"/"} className="p-2 m-2 bg-red-200 hover:bg-red-200/90 text-black cursor-pointer rounded-md" onClick={handleDelete}>Eliminar</Link>
                            </div>
                        </>

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
        </>
    )
};


export default Profile;