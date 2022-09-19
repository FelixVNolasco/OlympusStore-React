import { useState } from 'react';
import { UserProfile } from "../components/Profile/userProfile";
import { UpdateUserProfile } from '../components/Profile/UpdateUserProfile';
import { useDispatch } from "react-redux";
import { deleteUser } from '../redux/apiCall';
import { RootStateOrAny, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {

    const { _id } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = async () => {
        dispatch(deleteUser(dispatch, _id));
    }

    return (
        <>
            {
                !isEditing ?
                    (
                        <>
                            <UserProfile />
                            <div className="mt-6">
                                <div className="profileContainer p-2">
                                    <button className="p-2 m-2 bg-blue-200 hover:bg-blue-200/90 text-black cursor-pointer rounded-md" onClick={() => setIsEditing(!isEditing)}>Actualizar</button>
                                    <Link to={"/"} className="p-2 m-2 bg-red-200 hover:bg-red-200/90 text-black cursor-pointer rounded-md" onClick={handleDelete}>Eliminar</Link>
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <UpdateUserProfile />
                    )
            }

        </>
    )
};


export default Profile;