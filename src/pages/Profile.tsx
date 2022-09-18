import { useState } from 'react';
import { UserProfile } from "../components/Profile/userProfile";
import { UpdateUserProfile } from '../components/Profile/UpdateUserProfile';

const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);

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
                                    <button className="p-2 m-2 bg-red-200 hover:bg-red-200/90 text-black cursor-pointer rounded-md">Eliminar</button>
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