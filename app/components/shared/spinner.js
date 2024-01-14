import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid border-opacity-50 h-16 w-16"></div>
    </div>
  );
};

export default Spinner;
