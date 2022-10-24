import { RootStateOrAny, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton'

export const Hero = () => {

    const { loading } = useSelector((state: RootStateOrAny) => state.ui);

    return (
        <section className='grid justify-items-center lg:mt-32 xl-mt-64 mb-64'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center'>
                <div className='mt-12 lg:mt-0 text-gray-800'>
                    <h1 className='text-center lg:text-left text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight'>Olympus Store
                        <br />
                        <span className='text-blue-600'>Los mejores en el campo</span>
                    </h1>
                </div>

                {
                     loading ? 
                        (
                            <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
                                <Skeleton
                                    circle
                                    height="442px"
                                    width="442px"
                                    containerClassName="avatar-skeleton"
                                />
                            </div>
                        )
                        :
                        (
                            <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
                                <img className='w-8/12 rounded-lg shadow-lg' src="https://res.cloudinary.com/dhyxqmnua/image/upload/c_scale,w_600/v1666391173/Olympus/logo512_fvobug.png" alt="" />
                            </div>
                        )
                }
            </div>
        </section >
    )
}


