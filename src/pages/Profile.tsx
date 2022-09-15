import { NavbarComponent } from "../components/Shared/Navbar/NavbarComponent";
import { RootStateOrAny, useSelector } from "react-redux";

const Profile = () => {

    const user = useSelector((state: RootStateOrAny) => state.user.currentUser);

    const { username, photoURL, email, createdAt, updatedAt } = user;
    const CreationDate = new Date(createdAt);
    const lastSignInTimeDate = new Date(updatedAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;

    const CreationDateParsed = CreationDate.toLocaleDateString("es-Mx", options);
    const lastSignInTimeDateParsed = lastSignInTimeDate.toLocaleDateString("es-Mx", options);



    return (
        <>
            <NavbarComponent />
            <div className="mt-12">
                <div className="profileContainer animate__animated animate__fadeIn animate__faster">
                    <div className="profileSection">
                        <div className="profileImage">
                            <img className="img" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                        </div>

                        <div className="profileGrid">

                            <div className="infoContainer">
                                <p className="info">Nombre:</p>
                                <span className="userDataInput">{username}</span>
                            </div>

                            <div className="infoContainer">
                                <p className="info">Correo Electrónico:</p>
                                <span className="userDataInput">{email}</span>
                            </div>

                            <div className="createdAt">
                                <p className="info">Cuenta creada en:</p>
                                <p className="profileDate">{CreationDateParsed}</p>
                            </div>

                            <div className="updatedAt">
                                <p className="info">Última actualización:</p>
                                <p className="profileDate">{lastSignInTimeDateParsed}</p>
                            </div>

                            <div className="updateContainer">
                                <button disabled={true} className="updateAccountBtn">
                                    Actualizar Información
                                </button>
                            </div>

                            <div className="deleteContainer">
                                <button disabled={true} className="deleteAccountBtn">
                                    Eliminar Cuenta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default Profile;