import {FaGripfire, FaGithub, FaTwitter, FaFacebook, FaMedium, FaLinkedin} from 'react-icons/fa';
import {Link} from "react-router-dom";

export const Footer = () => {

    return (
        <div
            className="w-full bg-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 lg:gap-4 justify-center items-center p-8 md:p-12 lg:p-14 text-amber-50">
            <div className='flex flex-col w-full'>
                <div className='flex justify-center items-center'>
                    <h2 className="text-lg">Olympus</h2>
                    <FaGripfire className='w-14 h-6'/>
                </div>
                <p className='text-center'>Los mejores productos para los mejores atletas.</p>
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg text-center">Encuentra nuestras redes sociales</span>
                <div className="flex justify-center">
                    <a className="m-1 hover:text-blue-400 transition ease-in 150ms"
                       href="https://www.linkedin.com/in/felixvnolasco/" target="_blank" rel="noreferrer">
                        <FaLinkedin width={32} height={32}/>
                    </a>
                    <a className="m-1 hover:text-gray-300 transition ease-in 150ms"
                       href="https://github.com/FelixVNolasco/OlympusStore-React" target="_blank" rel="noreferrer">
                        <FaGithub width={32} height={32}/>
                    </a>
                    <div className="m-1 hover:text-blue-300 transition ease-in 150ms">
                        <FaTwitter width={32} height={32}/>
                    </div>
                    <div className="m-1 hover:text-blue-500 transition ease-in 150ms">
                        <FaFacebook width={32} height={32}/>
                    </div>
                    <div className="m-1 hover:text-gray-500 transition ease-in 150ms">
                        <FaMedium width={32} height={32}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg text-center">Obtener Ayuda</span>
                <div className="flex flex-col text-sm text-center text-amber-50/90">
                    <Link className="hover:text-amber-50/80" to={"#"}>Estado del pedido</Link>
                    <Link className="hover:text-amber-50/80" to={"#"}>Envío y Entrega</Link>
                    <Link className="hover:text-amber-50/80" to={"#"}>Devoluciones</Link>
                    <Link className="hover:text-amber-50/80" to={"#"}>Opciones de pago</Link>
                    <Link className="hover:text-amber-50/80" to={"#"}>Comunicate con nosotros</Link>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg text-center">Acerca de Olympus</span>
                <div className="flex flex-col text-sm text-center text-amber-50/90">
                    <Link className="hover:text-amber-50/80" to={"#"}>Noticias</Link>
                    <Link className="hover:text-amber-50/80" to={"#"}>Empleo </Link>
                    <Link className="hover:text-amber-50/80" to={"#"}>Inclusión</Link>
                    <Link className="hover:text-amber-50/80" to={"#"}>Sostenabilidad</Link>
                </div>
            </div>
        </div>
    )
}