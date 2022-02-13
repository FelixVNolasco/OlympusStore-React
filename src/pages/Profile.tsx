import { RootStateOrAny, useSelector } from "react-redux";
import { Navbar } from '../components/Navbar';
import { useForm } from '../hooks/useForm';

 const Profile = () => {

    const user = useSelector((state: RootStateOrAny) => state.user.currentUser);

    const { displayName, photoURL, email  } = user;

    const [formValues, handleInputChange] = useForm({
        name: displayName,
        userEmail: email
    });

    const {name, userEmail} = formValues;

    return <>
        <div className="container"> 
            <Navbar />
            <div className="profileContainer animate__animated animate__fadeIn animate__faster">
                <div className="profileSection">
                    <div className="profileImage">
                        <img className="img" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                    </div>

                    <div className="infoContainer">
                        <p className="info">Nombre:</p>
                        <input className="userDataInput" type="text"  value={name} onChange={handleInputChange}/>
                    </div>

                    <div className="infoContainer">
                        <p className="info">Correo Electrónico:</p>
                        <input className="userDataInput" type="text"  value={userEmail} onChange={handleInputChange}/>
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
                            <p className="profileDate">{user.creationTime}</p>
                        </div>
                        <div className="updatedAt">
                            <p className="info">Último inicio de sesión:</p>
                            <p className="profileDate">{user.lastSignInTime}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>;
};


export default Profile;