// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useTheme } from '../../ThemeContext'

// function ShoppingCart() {
//   const { theme } = useTheme();
//   return (
// 	<div>
// 	  <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4 pt-[100px] mb-[100px]">
//   <div className="grid md:grid-cols-3 gap-4 mt-8 mt-[120px] ">
//     <div className="md:col-span-2 space-y-4">
//       <div className={`flex gap-4 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
//         <div className="flex gap-4">
//           <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
//             <img src="https://readymadeui.com/images/watch1.webp" className="w-full h-full object-contain" alt="Đồng hồ vàng thời trang" />
//           </div>
//           <div className="flex flex-col gap-4">
//             <div>
//               <h3 className="text-base font-bold">Đồng hồ vàng thời trang</h3>
//               <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Màu sắc: <span className="inline-block w-5 h-5 rounded-md bg-[#ac7f48]" /></p>
//             </div>
//             <div className="mt-auto flex items-center gap-3">
//               <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Giảm số lượng">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
//                   <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
//                 </svg>
//               </button>
//               <span className="font-bold text-sm leading-[18px]">2</span>
//               <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Tăng số lượng">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
//                   <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="ml-auto flex flex-col">
//           <div className="flex items-start gap-4 justify-end">
//             <button type="button" aria-label="Thêm vào danh sách yêu thích">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 64 64">
//                 <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
//               </svg>
//             </button>
//             <button type="button" aria-label="Xóa sản phẩm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 24 24">
//                 <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" />
//                 <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" />
//               </svg>
//             </button>
//           </div>
//           <h3 className="text-base font-bold mt-auto">
//             <span className="text-sm line-through text-gray-500">3.450.000đ</span><br />
//             2.760.000đ
//           </h3>
//         </div>
//       </div>
//       <div className={`flex gap-4 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
//         <div className="flex gap-4">
//           <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
//             <img src="https://readymadeui.com/images/watch5.webp" className="w-full h-full object-contain" alt="Đồng hồ thông minh thời trang" />
//           </div>
//           <div className="flex flex-col gap-4">
//             <div>
//               <h3 className="text-base font-bold">Đồng hồ thông minh thời trang</h3>
//               <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Màu sắc: <span className="inline-block w-5 h-5 rounded-md bg-[#e8dcdc]" /></p>
//             </div>
//             <div className="mt-auto flex items-center gap-3">
//               <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Giảm số lượng">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
//                   <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
//                 </svg>
//               </button>
//               <span className="font-bold text-sm leading-[18px]">1</span>
//               <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Tăng số lượng">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
//                   <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="ml-auto flex flex-col">
//           <div className="flex items-start gap-4 justify-end">
//             <button type="button" aria-label="Thêm vào danh sách yêu thích">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 64 64">
//                 <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
//               </svg>
//             </button>
//             <button type="button" aria-label="Xóa sản phẩm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 24 24">
//                 <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" />
//                 <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" />
//               </svg>
//             </button>
//           </div>
//           <h3 className="text-base font-bold mt-auto">
//             <span className="text-sm line-through text-gray-500">1.955.000đ</span><br />
//             1.610.000đ
//           </h3>
//         </div>
//       </div>
//       <div className={`flex gap-4 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
//         <div className="flex gap-4">
//           <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
//             <img src="https://readymadeui.com/images/sunglass6.webp" className="w-full h-full object-contain" alt="Kính tròn" />
//           </div>
//           <div className="flex flex-col gap-4">
//             <div>
//               <h3 className="text-base font-bold">Kính tròn</h3>
//               <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Màu sắc: <span className="inline-block w-5 h-5 rounded-md bg-[#000]" /></p>
//             </div>
//             <div className="mt-auto flex items-center gap-3">
//               <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Giảm số lượng">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
//                   <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
//                 </svg>
//               </button>
//               <span className="font-bold text-sm leading-[18px]">1</span>
//               <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Tăng số lượng">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
//                   <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="ml-auto flex flex-col">
//           <div className="flex items-start gap-4 justify-end">
//             <button type="button" aria-label="Thêm vào danh sách yêu thích">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 64 64">
//                 <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
//               </svg>
//             </button>
//             <button type="button" aria-label="Xóa sản phẩm">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 24 24">
//                 <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" />
//                 <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" />
//               </svg>
//             </button>
//           </div>
//           <h3 className="text-base font-bold mt-auto">
//             <span className="text-sm line-through text-gray-500">575.000đ</span><br />
//             460.000đ
//           </h3>
//         </div>
//       </div>
//     </div>
//     <div className={`rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
//       <ul className="space-y-4">
//         <li className="flex flex-wrap gap-4 text-sm">Tổng phụ <span className="ml-auto font-bold">4.600.000đ</span></li>
//         <li className="flex flex-wrap gap-4 text-sm">Phí vận chuyển <span className="ml-auto font-bold">46.000đ</span></li>
//         <li className="flex flex-wrap gap-4 text-sm">Thuế <span className="ml-auto font-bold">92.000đ</span></li>
//         <hr className={`${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`} />
//         <li className="flex flex-wrap gap-4 text-sm font-bold">Tổng cộng <span className="ml-auto">4.738.000đ</span></li>
//       </ul>
//       <div className="mt-8 space-y-2">
//         <Link to="/checkout" className={`text-sm px-4 py-2.5 w-full font-semibold tracking-wide rounded-md inline-block text-center ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'}`} style={{ textDecoration: 'none' }}>Mua ngay</Link>
//         <button type="button" className={`text-sm px-4 py-2.5 w-full font-semibold tracking-wide rounded-md ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' : 'bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300'}`}>Tiếp tục mua sắm</button>
//       </div>
//       <div className="mt-4 flex flex-wrap justify-center gap-4">
//         <img src="https://readymadeui.com/images/master.webp" alt="thẻ1" className="w-10 object-contain" />
//         <img src="https://readymadeui.com/images/visa.webp" alt="thẻ2" className="w-10 object-contain" />
//         <img src="https://readymadeui.com/images/american-express.webp" alt="thẻ3" className="w-10 object-contain" />
//       </div>
//     </div>
//   </div>
// </div>

// 	</div>
//   )
// }

// export default ShoppingCart






import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import apiShoppingCart from '../../api/apiShoppingCart';
import Loading from '../../Layouts/Loading';
import { toast } from 'react-toastify';
import { useTheme } from '../../ThemeContext';
import { IMG_URL } from '../../api/config'
import  Pay from '../../assets/images/Animation/pay'
const ShoppingCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user_data);
    const { theme } = useTheme();

    const [loading, setLoading] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] = useState(false);
    const [messageTimer, setMessageTimer] = useState(null);
    const [countdownTime, setCountdownTime] = useState(3);
    const [quantities, setQuantities] = useState({});
    const [showQuantityMessage, setShowQuantityMessage] = useState(false);
    const [quantityMessageContent, setQuantityMessageContent] = useState('');
    const [showPayAnimation, setShowPayAnimation] = useState(false);

    useEffect(() => {
        getShoppingCartList();
    }, []);

    useEffect(() => {
        return () => {
            if (messageTimer) {
                clearTimeout(messageTimer);
            }
        };
    }, [messageTimer]);

    useEffect(() => {
        // Load quantities from localStorage when component mounts
        const savedQuantities = JSON.parse(localStorage.getItem('cartQuantities')) || {};
        setQuantities(savedQuantities);
    }, []);

    useEffect(() => {
        // Save quantities to localStorage whenever it changes
        localStorage.setItem('cartQuantities', JSON.stringify(quantities));
    }, [quantities]);

    const getShoppingCartList = async () => {
        setLoading(true);
        const token = localStorage.getItem('user_token');

        if (!token) {
            console.log('User is not logged in');
            setLoading(false);
            return;
        }

        try {
            const response = await apiShoppingCart.getAll({            
                headers: {
                    Authorization: `Bearer ${token}`
            }});
            let localCartList = localStorage.getItem('cartList') !== null ? localStorage.getItem('cartList') : null;
            console.log(response)
            setCartItems(response.data);
            setLoading(false);
            updateCartCount(response.data.length);
            calcTotal(localCartList)
            
            // Initialize quantities state with saved values or default to item quantity
            const savedQuantities = JSON.parse(localStorage.getItem('cartQuantities')) || {};
            const initialQuantities = {};
            response.data.forEach(item => {
                initialQuantities[item.id] = savedQuantities[item.id] || item.quantity;
            });
            setQuantities(initialQuantities);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const updateCartCount = (count) => {
        dispatch({ type: 'CART_COUNT', value: count });
    };

    const calcTotal = (localCartList) => {
        const total = cartItems.reduce((sum, item) => {
            const price = item.stock && item.stock.product ? item.stock.product.price : 0;
            return sum + price * (quantities[item.id] || item.quantity);
        }, 0);
        setTotal(total);
    };

    const showMessage = (setMessageFunc, duration = 3000) => {
        setMessageFunc(true);
        setCountdownTime(3);
        if (messageTimer) clearTimeout(messageTimer);
        
        const countdownInterval = setInterval(() => {
            setCountdownTime((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(countdownInterval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        const timer = setTimeout(() => {
            setMessageFunc(false);
            clearInterval(countdownInterval);
        }, duration);
        
        setMessageTimer(timer);
    };

    const deleteCartItem = async (itemId) => {
        const token = localStorage.getItem('user_token');
        if (!token) {
            toast.error('You need to be logged in to delete items from your cart.');
            return;
        }
        try {
            const response = await apiShoppingCart.deleteCartById(itemId, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
                calcTotal();
                updateCartCount(cartItems.length - 1);
                showMessage(setShowDeleteSuccessMessage);
                
                // Remove the quantity for this item from state and localStorage
                setQuantities(prevQuantities => {
                    const newQuantities = { ...prevQuantities };
                    delete newQuantities[itemId];
                    localStorage.setItem('cartQuantities', JSON.stringify(newQuantities));
                    return newQuantities;
                });
            }
        } catch (error) {
            console.error('Error deleting cart item:', error);
            toast.error('Failed to remove item from cart. Please try again.');
        }
    };

    const handleQuantityChange = (itemId, change) => {
        setQuantities(prevQuantities => {
            const newQuantity = Math.max(1, (prevQuantities[itemId] || 0) + change);
            const newQuantities = { ...prevQuantities, [itemId]: newQuantity };
            localStorage.setItem('cartQuantities', JSON.stringify(newQuantities));
            if (change > 0) {
                setQuantityMessageContent(`Đã thêm số lượng còn: ${newQuantity}`);
                showMessage(setShowQuantityMessage);
            } else if (change < 0) {
                setQuantityMessageContent(`Đã giảm số lượng còn: ${newQuantity}`);
                showMessage(setShowQuantityMessage);
            }
            return newQuantities;
        });
    };

    const updateQuantity = async () => {
        const token = localStorage.getItem('user_token');
        try {
            const updatePromises = Object.entries(quantities).map(([itemId, quantity]) => 
                apiShoppingCart.updateQuantity(itemId, { quantity }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            );
            await Promise.all(updatePromises);
            setShowPayAnimation(true);
            setTimeout(() => {
                setShowPayAnimation(false);
                navigate('/checkout');
            }, 3200); // Hide animation and navigate after 3 seconds
        } catch (error) {
            console.error('Error updating quantities:', error);
            toast.error('Không thể cập nhật số lượng. Vui lòng thử lại.');
        }
    };

    if (loading) {
        return <Loading />;
    }

    const subtotal = cartItems.reduce((total, item) => {
        const price = item.stock && item.stock.product ? item.stock.product.price : 0;
        return total + price * (quantities[item.id] || item.quantity);
    }, 0);

    return (
        <div>
            {showSuccessMessage && (
                <div className=" mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
                    role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-green-500 inline mr-3" viewBox="0 0 512 512">
                        <ellipse cx="246" cy="246" data-original="#000" rx="246" ry="246" />
                        <path className="fill-white"
                            d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
                            data-original="#000" />
                    </svg>
                    <span className="text-sm font-semibold tracking-wide">cập nhật thành công</span>
                    <span className="ml-2 text-sm">{countdownTime}s</span>
                </div>
            )}
            {showDeleteSuccessMessage && (
                <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-green-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
                    role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-green-500 inline mr-3" viewBox="0 0 512 512">
                        <ellipse cx="246" cy="246" data-original="#000" rx="246" ry="246" />
                        <path className="fill-white"
                            d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
                            data-original="#000" />
                    </svg>
                    <span className="text-sm font-semibold tracking-wide">Đã xóa sản phẩm trong giỏ hàng</span>
                    <span className="ml-2 text-sm">{countdownTime}s</span>
                </div>
            )}
            {showQuantityMessage && (
                <div className="mt-2 bg-white shadow-[0_3px_10px_-3px_rgba(6,81,237,0.3)] border-t-4 border-blue-500 text-gray-800 flex items-center w-max max-w-sm p-4 rounded-md fixed top-20 right-4 z-50"
                    role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] shrink-0 fill-blue-500 inline mr-3" viewBox="0 0 512 512">
                        <ellipse cx="246" cy="246" data-original="#000" rx="246" ry="246" />
                        <path className="fill-white"
                            d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
                            data-original="#000" />
                    </svg>
                    <span className="text-sm font-semibold tracking-wide">{quantityMessageContent}</span>
                    <span className="ml-2 text-sm">{countdownTime}s</span>
                </div>
            )}
            {showPayAnimation && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <Pay />
                </div>
            )}
            <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4 pt-[100px] mb-[100px]">
                <div className="grid md:grid-cols-3 gap-4 mt-8 mt-[120px]">
                    <div className="md:col-span-2 space-y-4">
                        {Object.values(cartItems.reduce((acc, item) => {
                            if (item.stock && item.stock.id) {
                                if (!acc[item.stock.id]) {
                                    acc[item.stock.id] = {...item, quantity: 0};
                                }
                                acc[item.stock.id].quantity += item.quantity;
                            }
                            return acc;
                        }, {})).map((item) => (
                            <div key={item.id} className={`flex gap-4 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
                                <div className="flex gap-4 flex-grow">
                                    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                        {item.stock && item.stock.product && item.stock.product.photo && (
                                            <img src={`${IMG_URL}/image/${item.stock.product.photo}`} alt={item.stock.product.name} className="w-full h-full object-cover"/>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-4 flex-grow">
                                        <div>
                                            <h3 className="text-base font-bold">{item.stock && item.stock.product ? item.stock.product.name : 'Product Name Not Available'}</h3>
                                            <p className="text-sm text-gray-500">Mã sản phẩm: {item.id || 'ID Not Available'}</p>
                                        </div>
                                        <div className="mt-auto flex items-center gap-3">
                                            <button 
                                                type="button" 
                                                className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} 
                                                aria-label="Giảm số lượng"
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
                                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                                                </svg>
                                            </button>
                                            <span className="font-bold text-sm leading-[18px]">{quantities[item.id] || item.quantity}</span>
                                            <button 
                                                type="button" 
                                                className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} 
                                                aria-label="Tăng số lượng"
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
                                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm">Giá:</span>
                                            <span className="text-base font-bold">{item.stock && item.stock.product ? item.stock.product.price : '0'}đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between items-end">
                                    <div className="flex items-start gap-4">
                                        <button type="button" aria-label="Thêm vào danh sách yêu thích">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 64 64">
                                                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                                            </svg>
                                        </button>
                                        <button type="button" aria-label="Xóa sản phẩm" onClick={() => deleteCartItem(item.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current text-red-500" viewBox="0 0 24 24">
                                                <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000" />
                                                <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                                    <h3 className="text-base font-bold mt-auto">
                                        <span className="text-sm line-through text-gray-500">{((item.stock && item.stock.product ? item.stock.product.price : 0) * 1.25).toLocaleString()}đ</span><br />
                                        {((item.stock && item.stock.product ? item.stock.product.price : 0) * (quantities[item.id] || item.quantity)).toLocaleString()}đ
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <ul className="space-y-4">
                            <li className="flex flex-wrap gap-4 text-sm">Tổng phụ <span className="ml-auto font-bold">{subtotal.toLocaleString()}đ</span></li>
                            {subtotal > 0 && (
                                <>
                                    <li className="flex flex-wrap gap-4 text-sm">Phí vận chuyển <span className="ml-auto font-bold">30.000đ</span></li>
                                    <li className="flex flex-wrap gap-4 text-sm">Thuế <span className="ml-auto font-bold">5.000đ</span></li>
                                    <hr className={`${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}`} />
                                    <li className="flex flex-wrap gap-4 text-sm font-bold">Tổng cộng <span className="ml-auto">{(subtotal + 30000 + 5000).toLocaleString()}đ</span></li>
                                </>
                            )}
                        </ul>
                        <div className="mt-8 space-y-2">
                            <button onClick={updateQuantity} className={`text-sm px-4 py-2.5 w-full font-semibold tracking-wide rounded-md inline-block text-center ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-800 hover:bg-gray-900 text-white'}`}>Mua ngay</button>
                            <button type="button" className={`text-sm px-4 py-2.5 w-full font-semibold tracking-wide rounded-md ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600' : 'bg-transparent hover:bg-gray-100 text-gray-800 border border-gray-300'}`}>Tiếp tục mua sắm</button>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-4">
                            <img src="https://readymadeui.com/images/master.webp" alt="thẻ1" className="w-10 object-contain" />
                            <img src="https://readymadeui.com/images/visa.webp" alt="thẻ2" className="w-10 object-contain" />
                            <img src="https://readymadeui.com/images/american-express.webp" alt="thẻ3" className="w-10 object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
