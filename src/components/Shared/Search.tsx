import { FaSearch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { publicRequest } from '../../requestMethods';

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
        const response: any = publicRequest.get("/products/search", { params: { title: queryText } });
        const { data } = response;
        setSearchResults(data);
    }, [queryText])
    
    
    console.log(searchResults);
        
    return (
        <div className='flex mt-2 justify-between rounded-md items-center border-2 border-gray-500 p-2'>
            <input value={queryText} onChange={handlequeryChange} placeholder='Buscar..' className='focus:outline-none' type="text" autoComplete='off' autoCorrect='off' spellCheck="false" maxLength={64} />
            <FaSearch className='text-gray-600' />
        </div>
    )
}
