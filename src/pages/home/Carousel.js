import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../ThemeContext'
import apiProduct from '../../api/apiProduct';
import Loading from '../../Layouts/Loading';
import apiShoppingCart from '../../api/apiShoppingCart';
import { IMG_URL } from '../../api/config'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './../redux/action/cartAction'

function Carousel() {
  const { theme } = useTheme();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [showLoginNotification, setShowLoginNotification] = useState(false);
  const [notificationTimeout, setNotificationTimeout] = useState(3);
  const [addedQuantity, setAddedQuantity] = useState(0);
  const productsPerPage = 4;

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await apiProduct.getAll();
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

  useEffect(() => {
    let timer;
    if (showUpdateNotification || showErrorNotification || showLoginNotification) {
      timer = setInterval(() => {
        setNotificationTimeout((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setShowUpdateNotification(false);
            setShowErrorNotification(false);
            setShowLoginNotification(false);
            return 3;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [showUpdateNotification, showErrorNotification, showLoginNotification]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      // console.log("Response from addToCart:", response);
      if (response.status === 200) {
        dispatch(addToCart(product, 1));
        setAddedQuantity(prevQuantity => prevQuantity + 1);
        setShowUpdateNotification(true);
        setNotificationTimeout(3);
      }
    } catch (error) {
      // console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
      console.log("Error response:", error.response);
      setShowErrorNotification(true);
      setNotificationTimeout(3);
    }
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  const getPaginationGroup = () => {
    let start = Math.max(1, currentPage - 1);
    let end = Math.min(totalPages, start + 2);
    if (end - start < 2) {
      start = Math.max(1, end - 2);
    }
    return [...Array(end - start + 1).keys()].map(i => i + start);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className={`${theme === 'dark' ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
        <div className="font-[sans-serif]">
          <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
            <h2 className="text-4xl font-extrabold mb-12 font-sans">Tất cả sản phẩm</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
              {Array.isArray(currentProducts) && currentProducts.map(product => (
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
                      <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-300 transform hover:scale-110"
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
          </div> 
        </div>
      </div>
      <div className="flex justify-end mr-40">
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
      {showUpdateNotification && (
        <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-green-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
          role="alert"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-green-500 inline mr-3" viewBox="0 0 512 512">
            <ellipse cx="246" cy="246" data-original="#000" rx="246" ry="246" />
            <path
              className="fill-white"
              d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
              data-original="#000"
            />
          </svg>
          <span className="text-sm font-semibold tracking-wide">Thêm thành công {addedQuantity} sản phẩm vào giỏ hàng ({notificationTimeout}s)</span>
          <button 
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" 
            onClick={() => setShowUpdateNotification(false)}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      )}
      {showErrorNotification && (
        <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-red-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
          role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-red-500 inline mr-3" viewBox="0 0 32 32">
            <path
              d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm6.36 20L21 22.36l-5-4.95-4.95 4.95L9.64 21l4.95-5-4.95-4.95 1.41-1.41L16 14.59l5-4.95 1.41 1.41-5 4.95z"
              data-original="#ea2d3f" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">Thêm thất bại vào giỏ hàng ({notificationTimeout}s)</span>
          <button 
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" 
            onClick={() => setShowErrorNotification(false)}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      )}
      {showLoginNotification && (
        <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-yellow-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
          role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-yellow-500 inline mr-3" viewBox="0 0 128 128">
            <path
              d="M56.463 14.337 6.9 106.644C4.1 111.861 8.173 118 14.437 118h99.126c6.264 0 10.338-6.139 7.537-11.356L71.537 14.337c-3.106-5.783-11.968-5.783-15.074 0z" />
            <g className="fill-white">
              <path
                d="M64 31.726a5.418 5.418 0 0 0-5.5 5.45l1.017 44.289A4.422 4.422 0 0 0 64 85.726a4.422 4.422 0 0 0 4.482-4.261L69.5 37.176a5.418 5.418 0 0 0-5.5-5.45z"
                data-original="#fff" />
              <circle cx="64" cy="100.222" r="6" data-original="#fff" />
            </g>
          </svg>
          <span className="text-sm font-semibold tracking-wide">Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng ({notificationTimeout}s)</span>
          <button 
            className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" 
            onClick={() => setShowLoginNotification(false)}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default Carousel

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
//               {Array.isArray(currentProducts) && currentProducts.map(product => (
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
//                     <Link to={`/quickView/${product.id}`} className="block h-full w-full transition-transform duration-300 hover:scale-110">
//                       <img src={`${IMG_URL}/image/${product.photo}`} alt={product.name} className="h-full w-full object-contain" />
//                     </Link>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-extrabold">{product.name}</h3>
//                     {/* <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mt-2`}>{product.description}</p> */}
//                     <div className="flex justify-between items-center mt-4">
//                       <div className="p-2 rounded-lg border border-gray-300 bg-gray-100">
//                         <h4 className="text-lg font-bold text-green-600">{product.price ? product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : ''}</h4>
//                         <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} line-through`}>{product.originalPrice ? product.originalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) : ''}</span>
//                       </div>
//                       <button 
//                         className="bg-gradient-to-r from-gray-300 to-gray-500 text-white p-3 rounded-full hover:from-gray-400 hover:to-gray-600 transition-colors"
//                         onClick={() => handleAddToCart(product)}
//                       >
//                         <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 5M17 13l1.4 5M9 21h6M9 21a2 2 0 11-4 0M15 21a2 2 0 104 0" />
//                         </svg>
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>