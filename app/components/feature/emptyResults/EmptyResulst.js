import React from 'react';

const EmptyResults = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <p className="text-lg font-bold text-gray-600 mb-4">No Results found</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-400 mx-auto"  
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

export default EmptyResults;