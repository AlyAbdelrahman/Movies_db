'use client'
import React, { useState } from 'react';

const InputField = ({ placeholder, value, onChange, errorMessage }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative flex-grow mr-2 md:mb-0 sm:mb-7 sm:w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className={`w-full border ${focused ? 'border-dark-500' : 'border-gray-600'}
        ${errorMessage && !focused && 'border-red-500'}
          px-4 py-2 rounded focus:outline-none focus:shadow-outline transition-all duration-300 bg-gray-800 text-white`}
      />
      {errorMessage && <p className="text-red-500 text-sm mt-1 absolute">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
