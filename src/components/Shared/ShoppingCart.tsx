
import { FaShoppingCart } from 'react-icons/fa';

export const ShoppingCart = ({ items }: { items: number }) => {
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
            <FaShoppingCart className='icon' />
        </div>
    )
}


