
import { FaHeart } from 'react-icons/fa';

export const Favorites = ({ items }: any) => {
    return (
        <div className="shoppingContainer">
            <div className='items'>
                {
                    (items < 10)

                        ?
                        (
                            <span className='count'>{items}</span>
                        )

                        :
                        (
                            <span className='count'>+10</span>
                        )
                }

            </div>
            <FaHeart className='icon' />
        </div>
    )
};


