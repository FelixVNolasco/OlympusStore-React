import { NavbarComponent } from '../Shared/Navbar/NavbarComponent';
import { RootStateOrAny, useSelector } from "react-redux";

export const UserProfile = () => {

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
            <div className="flex justify-center mt-12 w-5/6 md:w-2/3 xl:w-1/2 mx-auto bg-indigo-300/75 rounded-md">
                <div className="flex flex-col md:text-md  lg:text-lg w-2/3 m-12 items-center justify-around">
                    <div className="w-1/2 flex mb-6 xl:mb-0 justify-center transition ease-in duration-300 hover:-translate-y-2 cursor-pointer">
                        <img className="w-32 rounded-md" src={(photoURL) ? photoURL : "https://res.cloudinary.com/dhyxqmnua/image/upload/v1642722284/Olympus/blank-profile-picture-973460_qb0gmg.svg"} alt="" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 items-center">
                        <div className="flex flex-col md:flex-row items-center">
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
        </>
    )
}
