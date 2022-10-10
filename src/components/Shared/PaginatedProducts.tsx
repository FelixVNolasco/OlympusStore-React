import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { ProductsMap } from './ProductsMap';


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
        <div className='flex flex-col h-full justify-between'>
            <ProductsMap currentProducts={currentItems} />
            <ReactPaginate
                className='pt-6 pb-6 flex gap-4 bg-slate-700 text-slate-50 justify-center'
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

