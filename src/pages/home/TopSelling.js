import React, { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import Loading from '../../Layouts/Loading';
import apiProduct from '../../api/apiProduct';

function TopSelling() {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await apiProduct.getNewestTopSelling('top-selling');
        console.log("API response:", response.data);  // Log the API response
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          console.error("Error fetching products: response data is not an array", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
      <div className="font-[sans-serif]">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold mb-12 font-sans">Sản phẩm bán chạy nhất</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
            {Array.isArray(products) && products.map(product => (
              <div key={product.id} className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative`}>
                <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" className={`${theme === 'dark' ? 'fill-white' : 'fill-gray-800'} inline-block`} viewBox="0 0 64 64">
                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                  </svg>
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  -20%
                </div>
                <div>
                  <h3 className="text-lg font-extrabold">{product.name}</h3>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-2`}>{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="p-2 rounded-lg border border-gray-300 bg-gray-100">
                      <h4 className="text-lg font-bold text-green-600">{product.price ? product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : ''}</h4>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-through`}>{product.originalPrice ? product.originalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : ''}</span>
                    </div>
                    <button className="bg-gradient-to-r from-gray-300 to-gray-500 text-white p-3 rounded-full hover:from-gray-400 hover:to-gray-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 21h6M9 21a2 2 0 11-4 0M15 21a2 2 0 104 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSelling;


