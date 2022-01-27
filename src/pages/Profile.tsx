import { RootStateOrAny, useSelector } from "react-redux";
import { Navbar } from '../components/Navbar';


export const Profile = () => {

    const user = useSelector((state: RootStateOrAny) => state.user.currentUser);

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
                        <input className="userDataInput" type="text" value={user.username} />
                    </div>

                    <div className="infoContainer">
                        <p className="info">Correo Electrónico:</p>
                        <input className="userDataInput" type="text" value={user.email} />
                    </div>

                    <div className="updateContainer">
                        <div className="updateAccountBtn">
                            Actualizar Información
                        </div>
                    </div>

                    <div className="deleteContainer">
                        <div className="deleteAccountBtn">
                            Eliminar Cuenta
                        </div>
                    </div>

                    <div className="lastInfoContainer">
                        <div className="createdAt">
                            <p className="info">Cuenta creada en:</p>
                            <p className="profileDate">{user.createdAt}</p>
                        </div>
                        <div className="updatedAt">
                            <p className="info">Ultima Actualizacion:</p>
                            <p className="profileDate">{user.updatedAt}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>;
};


