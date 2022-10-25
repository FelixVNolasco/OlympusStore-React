import { FaShoppingCart } from 'react-icons/fa';

export const ShoppingCart = ({ items }: { items: number }) => {
    return (
        <div className="flex relative">
            <FaShoppingCart className='flex-1 w-8 h-8 fill-current text-gray-800' width={"24px"}/>
            <div className='relative left-2'>
                {
                    (items < 10)
                        ?
                        (
                            <span className='absolute right-0 top-0 rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>{items}</span>
                        )
                        :
                        (
                            <span className='absolute right-0 top-0 rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center'>+10</span>
                        )
                }

            </div>
        </div>
    )
}


