import { FaGripfire } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';

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

                        <div className='team'>
                            <div className='teamMember'>
                                <div className='imgTeamMember'>
                                    <img className='img' src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641680245/Olympus/WhatsApp_Image_2022-01-02_at_12.02.51_PM_tpdeqt.jpg" alt="" />
                                </div>
                                <div className='infoMember'>
                                    <p className='name'>Felix Enrique Vega Nolasco</p>
                                    <span className='role'>Front End Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="newsLetterContainer">
                        <h1 className='newsletterTitle'>Newsletter</h1>
                        <p className='footerDescription'>Obten actualizaciones de tus productos favoritos.</p>
                        <div className="inputContainer">
                            <input className='input' type="text" />                            
                            <div className="sendButton">
                                <FaPaperPlane className='sendIcon' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

