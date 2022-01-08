import { FaGripfire } from 'react-icons/fa';

export const Footer = () => {
    return (
        <>
            <div className='footerSection'>
                <div className='socialSection'>
                    <div className='titleApp'>
                        <h2>Olympus</h2>
                        <FaGripfire className='icon' />
                    </div>
                    <h4>Los mejores productos para los mejores atletas.</h4>

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
            </div>
        </>
    )
}

