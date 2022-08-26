import { FaGripfire, FaGithub, FaTwitter, FaFacebook, FaMedium, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <>
            <div className="container">
                <div className='footerSection'>
                    <div className='socialSection'>
                        <div className='titleApp'>
                            <h2>Olympus</h2>
                            <FaGripfire className='icon' />
                        </div>
                        <p className='sloganApp'>Los mejores productos para los mejores atletas.</p>

                    </div>
                    <div className="social-links">
                        <span className="title">Encuentra nuestras redes sociales</span>
                        <div className="icons-container">
                            <a className="icon" href="https://www.linkedin.com/in/felixvnolasco/" target="_blank" rel="noreferrer">
                                <FaLinkedin width={32} height={32} />
                            </a>
                            <a className="icon" href="https://github.com/FelixVNolasco/OlympusStore-React" target="_blank" rel="noreferrer">
                                <FaGithub width={32} height={32} />
                            </a>
                            <div className="icon">
                                <FaTwitter width={32} height={32} />
                            </div>
                            <div className="icon">
                                <FaFacebook width={32} height={32} />
                            </div>
                            <div className="icon">
                                <FaMedium width={32} height={32} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

