import React from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const SimplePagination = ({ currentPage, totalPages, handlePrevPage, handleNextPage }) => {
    return (
        <div className="flex items-center gap-8">
            <button size="sm" variant="outlined" onClick={handlePrevPage} disabled={currentPage === 1}>
                <GrLinkPrevious strokeWidth={2} className={currentPage === 1 ? 'h-4 w-4 text-gray-300' : 'h-4 w-4'} />
            </button>
            <p className="font-normal text-gray-600">
                Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </p>
            <button size="sm" variant="outlined" onClick={handleNextPage} disabled={currentPage === totalPages}>
                <GrLinkNext
                    strokeWidth={2}
                    className={currentPage === totalPages ? 'h-4 w-4 text-gray-300' : 'h-4 w-4'}
                />
            </button>
        </div>
    );
};

export default SimplePagination;
