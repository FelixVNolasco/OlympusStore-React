import { FaPaperPlane } from 'react-icons/fa';

export const Newsletter = () => {
    return (
        <>
            <div className="newsLetterContainer">
                <h1 className='title'>Newsletter</h1>
                <p className='description'>Obten actualizaciones de tus productos favoritos.</p>
                <div className="inputContainer">
                    <input className='input' type="text" />
                    <div className="sendButton">
                        <FaPaperPlane className='sendIcon'/>
                    </div>
                </div>
            </div>
        </>
    )
}

