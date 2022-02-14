import { RootStateOrAny, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'

export const Slider = () => {

    const { loading } = useSelector((state: RootStateOrAny) => state.ui);
    console.log(loading);

    return (
        <div className='container full-height animate__animated animate__fadeIn animate__faster'>
            <div className="slide">
                <div className='infoContainer'>
                    <h2 className='title'>Olympus Center</h2>
                    <p className='description'>Creemos que cuando nos unimos y nos damos ánimos unos a otros, nada puede detenernos. Cuando eres parte de nuestros miembros, tienes acceso a los mejores productos.</p>
                    <div className='buttonContainer'>
                        <p className='slideButton'>LEARN MORE ...</p>
                    </div>
                </div>
                {
                    loading ?
                        (
                            <Skeleton
                                circle
                                height="400px"
                                width="400px"
                                containerClassName="avatar-skeleton"
                            />
                        )
                        :
                        (
                            <div className="imageContainerSlider">
                                <img className='image' src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641613241/Olympus/pexels-pixabay-220383_utmdhd.jpg" alt="" />
                            </div>
                        )
                }
            </div>

        </div>
    )
}


