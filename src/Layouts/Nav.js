import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'
import apiProduct from '../api/apiProduct';

function Nav() {
  const { theme } = useTheme();

  return (
    <>
    <div className={`${theme === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
      <div className="font-[sans-serif]">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold mb-12">Premium Sneakers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
              <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative`}>
                  <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className={`${theme === 'dark' ? 'fill-white' : 'fill-gray-800'} inline-block`} viewBox="0 0 64 64">
                      <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -20%
                  </div>
                  <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                    <Link to="/quickView">
                      <img src="https://readymadeui.com/images/product10.webp" alt="Product 3" className="h-full w-full object-contain" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">Blaze Burst</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <h4 className="text-lg font-bold">$11.20</h4>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-through`}>$14.00</span>
                      </div>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div> 
    </div>
    </>
  )
}

export default Nav
{/* <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative`}>
              <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" className={`${theme === 'dark' ? 'fill-white' : 'fill-gray-800'} inline-block`} viewBox="0 0 64 64">
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                </svg>
              </div>
              <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                -20%
              </div>
              <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                <Link to="/quickView">
                  <img src="https://readymadeui.com/images/product10.webp" alt="Product 3" className="h-full w-full object-contain" />
                </Link>
              </div>
              <div>
                <h3 className="text-lg font-extrabold">Blaze Burst</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h4 className="text-lg font-bold">$11.20</h4>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-through`}>$14.00</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div> */}