import { RootStateOrAny, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'

export const Slider = () => {

    const { loading } = useSelector((state: RootStateOrAny) => state.ui);

    return (
        <div className='container mx-auto full-height animate__animated animate__fadeIn animate__faster'>
            <div className="slide">
                <div className='infoContainer'>
                    <h2 className='title'>Olympus Store</h2>
                    <p className='description'>Creemos que cuando nos unimos y nos damos ánimos unos a otros, nada puede detenernos. Cuando eres parte de nuestros miembros, tienes acceso a los mejores productos.</p>
                    <div className='buttonContainer'>
                        <p className='slideButton'>LEARN MORE ...</p>
                    </div>
                </div>
                {
                    loading ?
                        (
                            <div className="skeletonLoader">
                                <Skeleton
                                    circle
                                    height="100%"
                                    width="100%"
                                    containerClassName="avatar-skeleton"
                                />
                            </div>
                        )
                        :
                        (
                            <div className="imageContainerSlider">
                                <img className='image' src="https://res.cloudinary.com/dhyxqmnua/image/upload/c_scale,w_460/v1641613241/Olympus/pexels-pixabay-220383_utmdhd.jpg" alt="" />
                            </div>
                        )
                }
            </div>
        </div>
    )
}


