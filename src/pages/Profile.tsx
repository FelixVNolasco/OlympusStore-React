import { RootStateOrAny, useSelector } from "react-redux";
import { Navbar } from '../components/Navbar';


export const Profile = () => {

    const user = useSelector((state: RootStateOrAny) => state.user.currentUser);
    // console.log(user);

    return <>
        <div className="container">
            <Navbar />
            <div className="profileContainer">
                <div className="profileSection">
                    <div className="profileImage">
                        <img className="img" src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg" alt="" />
                    </div>

                    <div className="infoContainer">
                        <p className="info">Nombre de usuario:</p>
                        <p className="profileUsername">{user.username}</p>
                    </div>

                    <div className="infoContainer">
                        <p className="info">Correo Electrónico:</p>
                        <p className="profileEmail">{user.email}</p>
                    </div>

                    <div className="infoContainer">
                        <p className="info">Cuenta creada en:</p>
                        <p className="profileDate">{user.createdAt}</p>
                    </div>

                    <div className="infoContainer">
                        <p className="info">Ultima Actualizacion:</p>
                        <p className="profileDate">{user.updatedAt}</p>
                    </div>

                    <div className="deleteAccountBtn">
                        Eliminar Cuenta
                    </div>
                </div>
            </div>
        </div>

    </>;
};


