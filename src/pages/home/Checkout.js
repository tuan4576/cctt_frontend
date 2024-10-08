// import React from 'react'
// import { useTheme } from '../../ThemeContext'

// function Checkout() {
//   const { theme } = useTheme();

//   return (
//     <div>
//       <div className={`font-[sans-serif] ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} pt-[130px] pb-[100px] pr-[100px]`}>
//         <div className="max-lg:max-w-xl mx-auto w-full">
//           <div className="grid lg:grid-cols-3 gap-6">
//             <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
//               <div className="text-center max-lg:hidden">
//                 <h2 className={`text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} inline-block border-b-2 ${theme === 'dark' ? 'border-white' : 'border-gray-800'} pb-1`}>Thanh toán</h2>
//               </div>
//               <form className="lg:mt-16">
//                 <div>
//                   <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Thông tin giao hàng</h2>
//                   <div className="grid sm:grid-cols-2 gap-8 mt-8">
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="text" placeholder="Họ tên" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="email" placeholder="Địa chỉ email" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="text" placeholder="Địa chỉ đường" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="text" placeholder="Thành phố" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="text" placeholder="Tỉnh/Thành phố" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="text" placeholder="Mã bưu điện" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-16">
//                   <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Phương thức thanh toán</h2>
//                   <div className="grid gap-3 sm:grid-cols-3 mt-4">
//                     <div className="flex items-center">
//                       <input type="radio" className="w-4 h-4 cursor-pointer" id="card" defaultChecked />
//                       <label htmlFor="card" className="ml-3 flex gap-1 cursor-pointer">
//                         <img src="https://readymadeui.com/images/visa.webp" className="w-10" alt="card1" />
//                         <img src="https://readymadeui.com/images/american-express.webp" className="w-10" alt="card2" />
//                         <img src="https://readymadeui.com/images/master.webp" className="w-10" alt="card3" />
//                       </label>
//                     </div>
//                     <div className="flex items-center">
//                       <input type="radio" className="w-4 h-4 cursor-pointer" id="paypal" />
//                       <label htmlFor="paypal" className="ml-3 flex gap-1 cursor-pointer">
//                         <img src="https://readymadeui.com/images/paypal.webp" className="w-16" alt="paypalCard" />
//                       </label>
//                     </div>
//                     <div className="flex items-center">
//                       <input type="radio" className="w-4 h-4 cursor-pointer" id="momo" />
//                       <label htmlFor="momo" className="ml-3 flex gap-1 cursor-pointer">
//                         <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" className="w-16" alt="momoCard" />
//                       </label>
//                     </div>
//                   </div>
//                   <div className="grid gap-6 mt-6">
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="text" placeholder="Tên chủ thẻ" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                     <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                       <input type="number" placeholder="Số thẻ" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                         <input type="text" placeholder="Ngày hết hạn" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                       </div>
//                       <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
//                         <input type="text" placeholder="CVV" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
//                       </div>
//                     </div>
//                     <div className="flex items-center">
//                       <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
//                       <label htmlFor="remember-me" className="ml-2 block text-sm">
//                         Tôi đồng ý với <a href="#st;" className="text-blue-600 font-semibold hover:underline ml-1">Điều khoản và Điều kiện</a>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-4 mt-8">
//                   <button type="button" className={`min-w-[150px] px-6 py-3.5 text-sm ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} rounded-lg`}>Quay lại</button>
//                   <button type="button" className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Thanh toán 5.520.000đ</button>
//                 </div>
//               </form>
//             </div>
//             <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg`}>
//               <h2 className={`text-4xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>17.250.000đ</h2>
//               <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} mt-8 space-y-4`}>
//                 <li className="flex flex-wrap gap-4 text-sm">Giày Split <span className="ml-auto font-bold">3.450.000đ</span></li>
//                 <li className="flex flex-wrap gap-4 text-sm">Giày Echo Elegance <span className="ml-auto font-bold">4.600.000đ</span></li>
//                 <li className="flex flex-wrap gap-4 text-sm">Bốt VelvetGlide <span className="ml-auto font-bold">6.900.000đ</span></li>
//                 <li className="flex flex-wrap gap-4 text-sm">Thuế <span className="ml-auto font-bold">2.300.000đ</span></li>
//                 <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">Tổng cộng <span className="ml-auto">17.250.000đ</span></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Checkout


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import apiShoppingCart from '../../api/apiShoppingCart';
import apiOrder from '../../api/apiOrder';
import Success from '../../assets/images/Animation/success';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const theme = useSelector(state => state.theme);
  const navigate = useNavigate();
  const shippingFee = 30000; // Phí vận chuyển 30.000đ

  useEffect(() => {
    getShoppingCartList();
  }, []);

  const getShoppingCartList = async () => {
    const token = localStorage.getItem('user_token');
    if (!token) {
      console.error('No user token found');
      // Handle the case when there's no token, e.g., redirect to login page
      return;
    }
    try {
      const response = await apiShoppingCart.getAll({
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const groupedItems = groupCartItems(response.data);
      setCartItems(groupedItems);
      calculateSubtotal(groupedItems);
    } catch (error) {
      console.error('Error fetching shopping cart:', error);
    }
  };

  const groupCartItems = (items) => {
    return items.reduce((acc, item) => {
      if (item && item.stock && item.stock.product) {
        const key = item.stock.product.id;
        if (!acc[key]) {
          acc[key] = { ...item, quantity: 0 };
        }
        acc[key].quantity += item.quantity;
      }
      return acc;
    }, {});
  };

  const calculateSubtotal = (items) => {
    const total = Object.values(items).reduce((sum, item) => {
      const price = item.stock && item.stock.product ? item.stock.product.price : 0;
      return sum + price * item.quantity;
    }, 0);
    setSubtotal(total);
  };

  const total = subtotal + shippingFee + 5000; // Tổng cộng bao gồm phí vận chuyển và thuế

  const handlePayment = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('user_token');
    if (!token) {
      console.error('No user token found');
      // Handle the case when there's no token, e.g., redirect to login page or show an error message
      setIsLoading(false);
      return;
    }
    const orderData = Object.values(cartItems).map(item => ({
      stock_id: item.stock.id,
      quantity: item.quantity
    }));

    try {
      const response = await apiOrder.create(orderData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Order created:', response.data);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/checkout/successful');
      }, 3500); // Chuyển hướng sau 3.5 giây
    } catch (error) {
      console.error('Error creating order:', error);
      // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi)
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <Success />
          <p className="text-center mt-4 text-xl font-semibold">Đang thanh toán!</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg`}>
      <h2 className={`text-4xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        {total.toLocaleString()}đ
      </h2>
      <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} mt-8 space-y-4`}>
        {Object.values(cartItems).map((item) => (
          <li key={item.id} className="flex flex-wrap gap-4 text-sm">
            <span className="flex-grow">
              {item.stock && item.stock.product ? item.stock.product.name : 'Product Name Not Available'}
            </span>
            <span className="w-16 text-center">
              x{item.quantity}
            </span>
            <span className="w-24 text-right font-bold">
              {((item.stock && item.stock.product ? item.stock.product.price : 0) * item.quantity).toLocaleString()}đ
            </span>
          </li>
        ))}
        <li className="flex flex-wrap gap-4 text-sm">
          <span className="flex-grow">Phí vận chuyển</span>
          <span className="w-16"></span>
          <span className="w-24 text-right font-bold">{shippingFee.toLocaleString()}đ</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          <span className="flex-grow">Thuế</span>
          <span className="w-16"></span>
          <span className="w-24 text-right font-bold">5.000đ</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
          <span className="flex-grow">Tổng cộng</span>
          <span className="w-16"></span>
          <span className="w-24 text-right">{total.toLocaleString()}đ</span>
        </li>
      </ul>
      <button
        onClick={handlePayment}
        disabled={isLoading}
        className={`mt-8 w-full px-6 py-3 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Đang xử lý...' : `Thanh toán ${total.toLocaleString()}đ`}
      </button>
    </div>
  );
};

export default Checkout;


{/* <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
              <div className="text-center max-lg:hidden">
                <h2 className={`text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} inline-block border-b-2 ${theme === 'dark' ? 'border-white' : 'border-gray-800'} pb-1`}>Thanh toán</h2>
              </div>
              <form className="lg:mt-16" onSubmit={handleSubmit}>
                <div>
                  <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Thông tin giao hàng</h2>
                  <div className="grid sm:grid-cols-2 gap-8 mt-8">
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="text" placeholder="Họ tên" name="firstName" value={firstName} onChange={handleChange} className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="email" placeholder="Địa chỉ email" name="email" value={email} onChange={handleChange} className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="text" placeholder="Địa chỉ đường" name="address" value={address} onChange={handleChange} className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="text" placeholder="Thành phố" name="city" value={city} onChange={handleChange} className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="text" placeholder="Quốc gia" name="country" value={country} onChange={handleChange} className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="text" placeholder="Mã bưu điện" name="zip" value={zip} onChange={handleChange} className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Phương thức thanh toán</h2>
                  <div className="grid gap-3 sm:grid-cols-3 mt-4">
                    <div className="flex items-center">
                      <input type="radio" className="w-4 h-4 cursor-pointer" id="card" defaultChecked />
                      <label htmlFor="card" className="ml-3 flex gap-1 cursor-pointer">
                        <img src="https://readymadeui.com/images/visa.webp" className="w-10" alt="card1" />
                        <img src="https://readymadeui.com/images/american-express.webp" className="w-10" alt="card2" />
                        <img src="https://readymadeui.com/images/master.webp" className="w-10" alt="card3" />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" className="w-4 h-4 cursor-pointer" id="paypal" />
                      <label htmlFor="paypal" className="ml-3 flex gap-1 cursor-pointer">
                        <img src="https://readymadeui.com/images/paypal.webp" className="w-16" alt="paypalCard" />
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input type="radio" className="w-4 h-4 cursor-pointer" id="momo" />
                      <label htmlFor="momo" className="ml-3 flex gap-1 cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" className="w-16" alt="momoCard" />
                      </label>
                    </div>
                  </div>
                  <div className="grid gap-6 mt-6">
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="text" placeholder="Tên chủ thẻ" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                    <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                      <input type="number" placeholder="Số thẻ" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                        <input type="text" placeholder="Ngày hết hạn" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                      </div>
                      <div className="flex border-b-2 border-gray-400 focus-within:border-blue-600">
                        <input type="text" placeholder="CVV" className={`px-2 pb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} w-full text-sm outline-none bg-transparent focus:${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="remember-me" className="ml-2 block text-sm">
                        Tôi đồng ý với <a href="#st;" className="text-blue-600 font-semibold hover:underline ml-1">Điều khoản và Điều kiện</a>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 mt-8">
                  <button type="button" className={`min-w-[150px] px-6 py-3.5 text-sm ${theme === 'dark' ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'} rounded-lg`}>Quay lại</button>
                  <button type="button" onClick={handleCheckout} className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">Thanh toán {total}đ</button>
                </div>
              </form>
            </div> */}