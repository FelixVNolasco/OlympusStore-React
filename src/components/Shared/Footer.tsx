import { FaGithub, FaTwitter, FaFacebook, FaMedium, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Footer = () => {

    return (        
        <footer
            className="animate_ grid justify-items-center bg-gray-800 text-slate-50">
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-center items-center'>
                        <h2 className="text-lg">Olympus Store</h2>
                        <img src="https://res.cloudinary.com/dhyxqmnua/image/upload/c_scale,w_48/v1666391173/Olympus/logo512_fvobug.png" width={48} alt="" />                        
                    </div>
                    <p className='text-center'>Los mejores productos para los mejores atletas.</p>
                </div>
                <div className="flex flex-col w-full">
                    <span className="text-lg text-center">Encuentra nuestras redes sociales</span>
                    <div className="flex justify-center">
                        <a className="m-1 hover:text-blue-400 transition ease-in 150ms"
                            href="https://www.linkedin.com/in/felixvnolasco/" target="_blank" rel="noreferrer">
                            <FaLinkedin width={32} height={32} />
                        </a>
                        <a className="m-1 hover:text-gray-300 transition ease-in 150ms"
                            href="https://github.com/FelixVNolasco/OlympusStore-React" target="_blank" rel="noreferrer">
                            <FaGithub width={32} height={32} />
                        </a>
                        <div className="m-1 hover:text-blue-300 transition ease-in 150ms">
                            <FaTwitter width={32} height={32} />
                        </div>
                        <div className="m-1 hover:text-blue-500 transition ease-in 150ms">
                            <FaFacebook width={32} height={32} />
                        </div>
                        <div className="m-1 hover:text-gray-500 transition ease-in 150ms">
                            <FaMedium width={32} height={32} />
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
            <div className="flex w-full bg-gray-900 justify-end">
                <a className='text-xs text-slate-50 p-2'target={"_blank"} rel="noreferrer" href="https://pages.flycricket.io/olympus-store/privacy.html">Politicas de Privacidad</a>
            </div>
        </footer>
    )
}