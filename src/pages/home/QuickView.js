
// import React, { useState } from 'react'
// import { useTheme } from '../../ThemeContext'

// function QuickView(props) {
//   const [activeTab, setActiveTab] = useState('details');
//   const { theme } = useTheme();

//   return (
//     <div>
//       <div className={`font-sans pt-[100px] pb-[100px] ${theme === 'dark' ? 'bg-[#1A202C] text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
//         <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
//           <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="w-full lg:sticky top-0 flex gap-3">
//               <img src="https://readymadeui.com/images/product2.webp" alt="Product" className="w-3/4 rounded-lg object-cover" />
//               <div className="w-20 flex flex-col max-sm:mb-4 gap-3">
//                 <img src="https://readymadeui.com/images/product1.webp" alt="Product1" className="w-full cursor-pointer rounded-lg" />
//                 <img src="https://readymadeui.com/images/product6.webp" alt="Product2" className="w-full cursor-pointer rounded-lg" />
//                 <img src="https://readymadeui.com/images/product7.webp" alt="Product3" className="w-full cursor-pointer rounded-lg" />
//                 <img src="https://readymadeui.com/images/product3.webp" alt="Product4" className="w-full cursor-pointer rounded-lg" />
//               </div>
//             </div>
//             <div>
//               <h2 className={`text-2xl max-sm:text-2xl font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Adjective Attire | T-shirt</h2>
//               <div className="mt-8">
//                 <h3 className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-4xl max-sm:text-3xl font-bold`}>$12</h3>
//               </div>
//               <div className="mt-8">
//                 <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Sizes</h3>
//                 <div className="flex flex-wrap gap-4 mt-4">
//                   <button type="button" className={`w-12 h-11 border-2 font-semibold text-xs ${theme === 'dark' ? 'text-gray-300 border-gray-500 hover:bg-gray-700' : 'text-gray-600 border-gray-300 hover:bg-gray-200'} rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 active:bg-blue-500`}>SM</button>
//                   <button type="button" className={`w-12 h-11 border-2 font-semibold text-xs ${theme === 'dark' ? 'text-gray-300 border-blue-400 hover:bg-gray-700' : 'text-gray-600 border-blue-500 hover:bg-gray-200'} rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 active:bg-blue-500`}>MD</button>
//                   <button type="button" className={`w-12 h-11 border-2 font-semibold text-xs ${theme === 'dark' ? 'text-gray-300 border-gray-500 hover:bg-gray-700' : 'text-gray-600 border-gray-300 hover:bg-gray-200'} rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 active:bg-blue-500`}>LG</button>
//                   <button type="button" className={`w-12 h-11 border-2 font-semibold text-xs ${theme === 'dark' ? 'text-gray-300 border-gray-500 hover:bg-gray-700' : 'text-gray-600 border-gray-300 hover:bg-gray-200'} rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 active:bg-blue-500`}>XL</button>
//                   <button type="button" className={`w-12 h-11 border-2 font-semibold text-xs ${theme === 'dark' ? 'text-gray-300 border-gray-500 hover:bg-gray-700' : 'text-gray-600 border-gray-300 hover:bg-gray-200'} rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 active:bg-blue-500`}>XXL</button>
//                 </div>
//               </div>
//               <div className="mt-8">
//                 <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Colors</h3>
//                 <div className="flex flex-wrap gap-4 mt-4">
//                   <button type="button" className={`w-12 h-11 bg-black border-2 ${theme === 'dark' ? 'border-gray-500' : 'border-white'} hover:border-blue-400 hover:scale-105 active:scale-95 transition-transform duration-200 rounded-lg shrink-0`} />
//                   <button type="button" className={`w-12 h-11 bg-gray-400 border-2 ${theme === 'dark' ? 'border-gray-500' : 'border-white'} hover:border-blue-400 hover:scale-105 active:scale-95 transition-transform duration-200 rounded-lg shrink-0`} />
//                   <button type="button" className={`w-12 h-11 bg-orange-400 border-2 ${theme === 'dark' ? 'border-gray-500' : 'border-white'} hover:border-blue-400 hover:scale-105 active:scale-95 transition-transform duration-200 rounded-lg shrink-0`} />
//                   <button type="button" className={`w-12 h-11 bg-red-400 border-2 ${theme === 'dark' ? 'border-gray-500' : 'border-white'} hover:border-blue-400 hover:scale-105 active:scale-95 transition-transform duration-200 rounded-lg shrink-0`} />
//                 </div>
//               </div>
//               <div className="mt-10 flex flex-wrap gap-4">
//                 <button type="button" className={`flex items-center justify-center px-8 py-4 ${theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-400 hover:bg-blue-500'} text-white border border-transparent text-base rounded-lg transition-colors duration-300 active:bg-blue-500 transform hover:scale-105 active:scale-95`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 512 512">
//                     <path d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0" data-original="#000000" />
//                   </svg>
//                   Add to cart
//                 </button>
//                 <button type="button" className={`flex items-center justify-center px-8 py-4 ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'} border border-gray-500 text-base rounded-lg transition-colors duration-300 active:bg-gray-500 transform hover:scale-105 active:scale-95`}>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 cursor-pointer fill-current inline mr-3" viewBox="0 0 64 64">
//                     <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
//                   </svg>
//                   Add to wishlist
//                 </button>
//               </div>
              
//               {/* Tab Navigation */}
//               <div className={`flex border-b mt-10 ${theme === 'dark' ? 'border-gray-500' : 'border-gray-400'}`}>
//                 <button
//                   onClick={() => setActiveTab('details')}
//                   className={`px-4 py-2 focus:outline-none ${
//                     activeTab === 'details' ? `border-b-2 ${theme === 'dark' ? 'border-blue-400' : 'border-blue-500'} font-semibold` : ''
//                   }`}
//                 >
//                   Details
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('description')}
//                   className={`px-4 py-2 focus:outline-none ${
//                     activeTab === 'description' ? `border-b-2 ${theme === 'dark' ? 'border-blue-400' : 'border-blue-500'} font-semibold` : ''
//                   }`}
//                 >
//                   Description
//                 </button>
//               </div>

//               {/* Tab Content */}
//               <div className="p-4">
//                 {activeTab === 'details' && (
//                   <div>
//                     <ul className={`space-y-3 list-disc pl-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
//                       <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
//                       <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
//                       <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
//                       <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
//                     </ul>
//                   </div>
//                 )}
//                 {activeTab === 'description' && (
//                   <div>
//                     <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
//                       This is a simple and comfortable t-shirt, perfect for everyday wear. It
//                       goes well with almost anything in your wardrobe and can be styled in
//                       various ways.
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default QuickView



import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../ThemeContext'
import apiProduct from '../../api/apiProduct';
import Loading from '../../Layouts/Loading';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { IMG_URL } from '../../api/config'
import Description from '../componet/description';
import apiShoppingCart from '../../api/apiShoppingCart';

function QuickView() {
  const [activeTab, setActiveTab] = useState('details');
  const { theme } = useTheme();
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [showLoginNotification, setShowLoginNotification] = useState(false);
  const [notificationTimeout, setNotificationTimeout] = useState(3);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiProduct.getProductById(productId);
        setProduct(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

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

  const handleAddToCart = async () => {
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
      await apiShoppingCart.addToCart(data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setShowUpdateNotification(true);
      setNotificationTimeout(3);
    } catch (error) {
      console.error('Error adding to cart:', error);
      setShowErrorNotification(true);
      setNotificationTimeout(3);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to format price in Vietnamese currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div>
      <div className={`font-sans pt-[100px] pb-[100px] ${theme === 'dark' ? 'bg-[#1A202C] text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        <div className="p-4 max-w-6xl max-md:max-w-xl mx-auto">
          <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="w-full lg:sticky top-0">
              <img 
                src={`${IMG_URL}/image/${product.photo}`}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                {product.name}
              </h2>

              <div className={`text-3xl font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                {formatPrice(product.price)}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 px-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}
                >
                  <FaShoppingCart className="inline mr-2" />
                  Add to Cart
                </button>
                <button className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <FaHeart />
                </button>
              </div>

              {/* Tabs */}
              <div className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                <div className="flex gap-4">
                  <button 
                    onClick={() => setActiveTab('details')}
                    className={`py-2 ${activeTab === 'details' ? 'border-b-2 border-gray-500' : ''}`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('description')} 
                    className={`py-2 ${activeTab === 'description' ? 'border-b-2 border-gray-500' : ''}`}
                  >
                    Description
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="py-4">
                {activeTab === 'details' && (
                  <ul className="list-disc pl-4 space-y-2">
                    {product.details && typeof product.details === 'string' ? (
                      <li>{product.details}</li>
                    ) : product.details && Array.isArray(product.details) ? (
                      product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))
                    ) : (
                      <li>No details available</li>
                    )}
                  </ul>
                )}
                {activeTab === 'description' && (
                  <p>{product.description || 'No description available'}</p>
                )}
              </div>

              <Description />
            </div>
          </div>
        </div>
      </div>

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
  )
}

export default QuickView