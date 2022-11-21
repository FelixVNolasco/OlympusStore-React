import { useEffect } from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ProductsMap } from './ProductsMap';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const PaginatedProducts = ({ currentProducts, itemsPerPage }) => {

    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(currentProducts.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(currentProducts.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, currentProducts]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % currentProducts.length;
        setItemOffset(newOffset);
    };
    return (
        <div className='flex flex-col w-full items-center h-full justify-between'>
            <ProductsMap currentProducts={currentItems} />
            <ReactPaginate
                className='w-5/6 md:w-3/4 lg:w-1/3  mx-auto items-center p-6 mb-32 flex gap-4 bg-slate-700 text-slate-50 justify-center rounded-md drop-shadow-xl shadow-sm shadow-slate-500'
                breakLabel="..."
                nextLabel={<FaArrowAltCircleRight width={24} />}
                pageClassName='rounded-md bg-green-500'
                pageLinkClassName='px-4 h-16'
                activeClassName='bg-blue-500'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<FaArrowAltCircleLeft />}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

