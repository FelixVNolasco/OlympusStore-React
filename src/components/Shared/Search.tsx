import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { publicRequest } from '../../requestMethods';
import { SearchResults } from './SearchResults';

export const Search = () => {

    const [queryText, setqueryText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handlequeryChange = (e) => {
        setqueryText(e.target.value);
    }

    useEffect(() => {
        if (!queryText) {
            setSearchResults([])
            return;
        }
        ; (async () => {
            const response: any = await publicRequest.get("/products/search", { params: { title: queryText } });
            const { data } = response;
            setSearchResults(data);
        })()
    }, [queryText])


    return (
        <>
            <div className='flex mt-2 justify-between rounded-md items-center border-2 border-gray-500 p-2'>
                <input value={queryText} onChange={handlequeryChange} placeholder='Buscar..' className='focus:outline-none w-full' type="text" autoComplete='off' autoCorrect='off' spellCheck="false" maxLength={64} />
                <FaSearch className='text-gray-600' />
            </div>

            <div className="mt-1 flex flex-col">
                <SearchResults searchResults={searchResults} />
            </div>
        </>
    )
}
