// import React, { useEffect, useState } from 'react';
// import { useTheme } from '../../ThemeContext';
// import { Link } from 'react-router-dom';
// import apiProduct from '../../api/apiProduct';

// function Shop() {
//     const { theme } = useTheme();
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchProducts = async () => {
//             setIsLoading(true);
//             try {
//                 const response = await apiProduct.getProductCategoryId();
//                 console.log("API response:", response.data);  // Log the API response
//                 if (Array.isArray(response.data)) {
//                     setProducts(response.data);
//                 } else {
//                     console.error("Error fetching products: response data is not an array", response.data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchProducts();
//     }, []);

//   return (
//     <>
//         <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full pt-36">
//           <h2 className="text-4xl font-extrabold mb-12 mt-16">Giày Cao Cấp</h2>
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
//               {products.map(product => (
//                 <div key={product.id} className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative`}>
//                   <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4`}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16px" className={`${theme === 'dark' ? 'fill-white' : 'fill-gray-800'} inline-block`} viewBox="0 0 64 64">
//                       <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
//                     </svg>
//                   </div>
//                   <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
//                     -20%
//                   </div>
//                   <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
//                     <Link to="/quickView">
//                       <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
//                     </Link>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-extrabold">{product.name}</h3>
//                     <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-2`}>{product.description}</p>
//                     <div className="flex justify-between items-center mt-4">
//                       <div>
//                         <h4 className="text-lg font-bold">{product.price}đ</h4>
//                         <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-through`}>{product.originalPrice}đ</span>
//                       </div>
//                       <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//     </>
//   )
// }

// export default Shop


//  <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full pt-36">
//           <h2 className="text-4xl font-extrabold mb-12 mt-16">Giày Cao Cấp</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">

          
//             <div className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative`}>
//               <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4`}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16px" className={`${theme === 'dark' ? 'fill-white' : 'fill-gray-800'} inline-block`} viewBox="0 0 64 64">
//                   <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
//                 </svg>
//               </div>
//               <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
//                 -20%
//               </div>
//               <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
//                 <Link to="/quickView">
//                   <img src="https://readymadeui.com/images/product10.webp" alt="Sản phẩm 3" className="h-full w-full object-contain" />
//                 </Link>
//               </div>
//               <div>
//                 <h3 className="text-lg font-extrabold">Blaze Burst</h3>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 <div className="flex justify-between items-center mt-4">
//                   <div>
//                     <h4 className="text-lg font-bold">280.000đ</h4>
//                     <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-through`}>350.000đ</span>
//                   </div>
//                   <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> 

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import apiProduct from '../../api/apiProduct';
import Loading from '../../Layouts/Loading';
import NoProducts from '../../Component/NotDefault';
import { IMG_URL } from '../../api/config'
import apiShoppingCart from '../../api/apiShoppingCart';

const Shop = () => {
  const { theme } = useTheme();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [showLoginNotification, setShowLoginNotification] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiProduct.getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        let response;
        if (selectedCategory) {
          response = await apiProduct.getProductCategoryId(selectedCategory);
          setProducts(response.data.products.data);
        } else {
          response = await apiProduct.getAll();
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const setNotificationTimeout = (seconds) => {
    setTimeout(() => {
      setShowUpdateNotification(false);
      setShowErrorNotification(false);
      setShowLoginNotification(false);
    }, seconds * 1000);
  };

  const handleAddToCart = async (product) => {
    const token = localStorage.getItem('user_token');
    if (!token) {
      setShowLoginNotification(true);
      setNotificationTimeout(3);
      return;
    }
    try {
      const data = { 
        stock_id: product.stocks[0].id,
        quantity: 1
      };
      const response = await apiShoppingCart.addToCart(data, {
        headers: { 
          Authorization: `Bearer ${token}` 
        } 
      });
      if (response.status === 200) {
        setShowUpdateNotification(true);
        setNotificationTimeout(3);
      }
    } catch (error) {
      console.log("Error response:", error.response);
      setShowErrorNotification(true);
      setNotificationTimeout(3);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);
    if (end - start < 2) {
      start = Math.max(1, end - 2);
    }
    return [...Array(end - start + 1).keys()].map(i => i + start);
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'} pt-36`}>
      <div className="font-[sans-serif]">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          <h2 className="text-4xl font-extrabold mb-12 font-sans">Danh mục sản phẩm</h2>
          
          {/* Categories */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleCategoryClick(null)}
                className={`px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === null
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Tất cả
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products */}
          {isLoading ? (
            <Loading />
          ) : currentProducts.length === 0 ? (
            <NoProducts />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
              {currentProducts.map(product => (
                <div key={product.id} className={`bg-white shadow-md border rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all duration-300 relative hover:shadow-xl`}>
                  <div className={`${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4 transition-colors duration-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" className={`${theme === 'dark' ? 'fill-white' : 'fill-gray-800'} inline-block`} viewBox="0 0 64 64">
                      <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    -20%
                  </div>
                  <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                    <Link to={`/quickView/${product.id}`} className="block h-full w-full transition-transform duration-300 hover:scale-110">
                      <img src={`${IMG_URL}/image/${product.photo}`} alt={product.name} className="h-full w-full object-contain" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold hover:text-blue-500 transition-colors duration-300">{product.name}</h3>
                    
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        <h4 className="text-lg font-bold">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h4>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-through`}>
                          {(product.price * 1.2).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </span>
                      </div>
                      <button 
                        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
                        onClick={() => handleAddToCart(product)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Pagination */}
      <div className="flex justify-end mr-40 mt-8">
        <ul className="flex space-x-4">
          <li
            className="flex items-center justify-center shrink-0 bg-gray-300 w-10 h-10 rounded-lg cursor-pointer"
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-400" viewBox="0 0 55.753 55.753">
              <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" data-original="#000000" />
            </svg>
          </li>
          {getPaginationGroup().map(pageNumber => (
            <li
              key={pageNumber}
              className={`flex items-center justify-center shrink-0 ${currentPage === pageNumber ? 'bg-blue-500 border-2 border-blue-500 text-white' : 'hover:bg-gray-50 border-2 text-[#333]'} cursor-pointer text-base font-bold w-10 h-10 rounded-lg`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}
          <li
            className="flex items-center justify-center shrink-0 bg-gray-300 w-10 h-10 rounded-lg cursor-pointer"
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
              <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" data-original="#000000" />
            </svg>
          </li>
        </ul>
      </div>

      {/* Notifications */}
      {showUpdateNotification && (
        <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-green-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
          role="alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-green-500 inline mr-3" viewBox="0 0 512 512">
            <path d="M256 512C114.51 512 0 397.49 0 256S114.51 0 256 0s256 114.51 256 256-114.51 256-256 256zm0-480C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm144 224c0 88.37-71.63 160-160 160S80 344.37 80 256 151.63 96 240 96s160 71.63 160 160zm-80 0c0-44.18-35.82-80-80-80s-80 35.82-80 80 35.82 80 80 80 80-35.82 80-80z"/>
          </svg>
          <span>Thêm vào giỏ hàng thành công!</span>
        </div>
      )}

      {showErrorNotification && (
        <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-red-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
          role="alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-red-500 inline mr-3" viewBox="0 0 512 512">
            <path d="M256 512C114.51 512 0 397.49 0 256S114.51 0 256 0s256 114.51 256 256-114.51 256-256 256zm0-480C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm144 224c0 88.37-71.63 160-160 160S80 344.37 80 256 151.63 96 240 96s160 71.63 160 160zm-80 0c0-44.18-35.82-80-80-80s-80 35.82-80 80 35.82 80 80 80 80-35.82 80-80z"/>
          </svg>
          <span>Có lỗi xảy ra khi thêm vào giỏ hàng!</span>
        </div>
      )}

      {showLoginNotification && (
        <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-yellow-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
          role="alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-yellow-500 inline mr-3" viewBox="0 0 512 512">
            <path d="M256 512C114.51 512 0 397.49 0 256S114.51 0 256 0s256 114.51 256 256-114.51 256-256 256zm0-480C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32zm144 224c0 88.37-71.63 160-160 160S80 344.37 80 256 151.63 96 240 96s160 71.63 160 160zm-80 0c0-44.18-35.82-80-80-80s-80 35.82-80 80 35.82 80 80 80 80-35.82 80-80z"/>
          </svg>
          <span>Vui lòng đăng nhập để thêm vào giỏ hàng!</span>
        </div>
      )}
    </div>
  );
};

export default Shop;
