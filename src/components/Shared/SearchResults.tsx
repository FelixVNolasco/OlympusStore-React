import { Link } from "react-router-dom"

export const SearchResults = ({ searchResults }) => {

    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    }
    return (
        <>
            {
                searchResults.map(({ _id, title, desc, inStock, price, img }) => {
                    return (
                        <Link to={`/product/${_id}`} className="flex items-center w-full sm:w-5/6 mx-auto m-1 p-2 border-2 border-slate-500 drop-shadow-xl shadow-sm shadow-slate-500 rounded-md transition ease-in duration-100 hover:-translate-y-1">
                            <div className="w-1/3">
                                <img className="rounded-md" src={img} alt="" />
                            </div>
                            <div className="ml-2 flex flex-col w-2/3">
                                <span className="font-semibold">{truncate(title, 20)}</span>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm">{truncate(desc, 80)}</span>
                                        {
                                            inStock ?
                                                (
                                                    <span className="text-xs font-semibold bg-green-200 max-w-max">Disponible</span>
                                                )
                                                :
                                                (
                                                    <span className="text-xs font-semibold bg-red-400 max-w-max">No Disponible</span>
                                                )
                                        }
                                    </div>
                                    <span className="font-semibold">{`$${price}`}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}
