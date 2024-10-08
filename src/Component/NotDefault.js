



import React from 'react';

const NoProducts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-24 h-24 text-gray-400 mb-4"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s1.5 -2 4 -2 4 2 4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
      <p className="text-xl font-semibold text-gray-600">Chưa có sản phẩm nào</p>
    </div>
  );
};

export default NoProducts;

