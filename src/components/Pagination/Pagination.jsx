import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const getPageNumbers = () => {
        const pageNumbers = [];
        const range = 2; // Number of pages to show on each side of the current page

        let start = Math.max(1, currentPage - range);
        let end = Math.min(totalPages, currentPage + range);

        if (currentPage - range > 1) {
            pageNumbers.push(1);
            if (currentPage - range > 2) {
                pageNumbers.push('...');
            }
        }

        for (let i = start; i <= end; i++) {
            pageNumbers.push(i);
        }

        if (currentPage + range < totalPages) {
            if (currentPage + range < totalPages - 1) {
                pageNumbers.push('...');
            }
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-between items-center mt-4">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-300 text-xs hover:bg-gray-400 text-black font-normal px-4 py-2 rounded"
            >
                Previous
            </button>

            <div className="flex gap-2">
                {getPageNumbers().map((number, index) =>
                    number === '...' ? (
                        <span key={index} className="text-xs font-normal">...</span>
                    ) : (
                        <button
                            key={index}
                            onClick={() => handlePageChange(number)}
                            className={`text-xs font-normal px-4 py-2 rounded ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                        >
                            {number}
                        </button>
                    )
                )}
            </div>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gray-300 text-xs hover:bg-gray-400 text-black font-normal px-4 py-2 rounded"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
