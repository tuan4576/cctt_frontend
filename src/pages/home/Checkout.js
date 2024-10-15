// import React, { useState } from 'react';
// import { PayPalButton } from 'react-paypal-button-v2';

// const Payment = () => {
//     const [successMessage, setSuccessMessage] = useState('');
//     const [amount, setAmount] = useState('');

//     const handleSuccess = (details, data) => {
//         console.log('Transaction completed by ' + details.payer.name.given_name);
//         console.log('Transaction data:', data);

//         // Hiển thị thông báo thành công
//         setSuccessMessage('Thanh toán thành công!');

//         // Xử lý logic thêm nếu cần, như lưu thông tin giao dịch vào database
//     };

//     const handleError = (error) => {
//         console.error('Error with PayPal transaction:', error);
//     };

//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//             <h2>Thanh toán với PayPal</h2>
//             {successMessage && (
//                 <div style={{ color: 'green', marginBottom: '10px' }}>
//                     {successMessage}
//                 </div>
//             )}
//             <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="Nhập số tiền"
//                 style={{ marginBottom: '50px', width: '100%', padding: '10px' }}
//             />
//             <PayPalButton
//                 amount={amount || '0.00'} // Sử dụng số tiền từ input
//                 currency="USD" // Đơn vị tiền tệ
//                 onSuccess={handleSuccess}
//                 onError={handleError}
//                 onCancel={(data) => console.log('Transaction canceled:', data)}
//                 options={{
//                     clientId: "AR-3LrVqYrrNxugxqTs3U6Nl4pziemBO4SdQ6w9xjg6rL-br22QsNczFq2lyCRg8F-YYXOIpA-2Ge3ZU" // Thay bằng Client ID của bạn
//                 }}
//             />
//         </div>
//     );
// };
// export default Payment;


import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from "react-paypal-button-v2";
import apiShoppingCart from '../../api/apiShoppingCart';
import apiOrder from '../../api/apiOrder';
import Success from '../../assets/images/Animation/success';
import { IMG_URL } from '../../api/config';

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
      navigate('/login');
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
      console.log(groupedItems);
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

  const handlePaymentSuccess = async (details, data) => {
    setIsLoading(true);
    const token = localStorage.getItem('user_token');
    if (!token) {
      console.error('No user token found');
      navigate('/login');
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
      }, 3500);
    } catch (error) {
      console.error('Error creating order:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <Success />
        </div>
      </div>
    );
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} max-w-3xl mx-auto mt-40 rounded-lg shadow-lg overflow-hidden`}>
      <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-6`}>
        <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
          Thanh toán
        </h2>
        <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Vui lòng kiểm tra lại thông tin đơn hàng của bạn
        </p>
      </div>
      <div className="p-6">
        <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} space-y-4`}>
          {Object.values(cartItems).map((item) => (
            <li key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <img src={`${IMG_URL}/image/${item.stock?.product?.photo}` || 'placeholder.jpg'} alt={item.stock?.product?.photo} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{item.stock?.product?.name || 'Product Name Not Available'}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Số lượng: {item.quantity}</p>
                </div>
              </div>
              <span className="font-bold">
                {((item.stock?.product?.price || 0) * item.quantity).toLocaleString()}đ
              </span>
            </li>
          ))}
        </ul>
        <div className={`mt-6 space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
          <div className="flex justify-between">
            <span>Tạm tính</span>
            <span>{subtotal.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between">
            <span>Phí vận chuyển</span>
            <span>{shippingFee.toLocaleString()}đ</span>
          </div>
          <div className="flex justify-between">
            <span>Thuế</span>
            <span>5.000đ</span>
          </div>
          <div className={`flex justify-between pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <span className="text-lg font-bold">Tổng cộng</span>
            <span className="text-lg font-bold">{total.toLocaleString()}đ</span>
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-gray-700">
        <PayPalButton
          amount={(total / 23000).toFixed(2)}
          currency="USD"
          onSuccess={handlePaymentSuccess}
          options={{
            clientId: "AR-3LrVqYrrNxugxqTs3U6Nl4pziemBO4SdQ6w9xjg6rL-br22QsNczFq2lyCRg8F-YYXOIpA-2Ge3ZU"
          }}
          style={{
            layout: 'vertical',
            color: 'gold',
            shape: 'rect',
            label: 'paypal'
          }}
        />
      </div>
    </div>
  );
};

export default Checkout;



// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import apiShoppingCart from '../../api/apiShoppingCart';
// import apiOrder from '../../api/apiOrder';
// import Success from '../../assets/images/Animation/success';

// const Checkout = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [subtotal, setSubtotal] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const theme = useSelector(state => state.theme);
//   const navigate = useNavigate();
//   const shippingFee = 30000; // Phí vận chuyển 30.000đ

//   useEffect(() => {
//     getShoppingCartList();
//   }, []);

//   const getShoppingCartList = async () => {
//     const token = localStorage.getItem('user_token');
//     if (!token) {
//       console.error('No user token found');
//       // Handle the case when there's no token, e.g., redirect to login page
//       return;
//     }
//     try {
//       const response = await apiShoppingCart.getAll({
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       const groupedItems = groupCartItems(response.data);
//       setCartItems(groupedItems);
//       calculateSubtotal(groupedItems);
//     } catch (error) {
//       console.error('Error fetching shopping cart:', error);
//     }
//   };

//   const groupCartItems = (items) => {
//     return items.reduce((acc, item) => {
//       if (item && item.stock && item.stock.product) {
//         const key = item.stock.product.id;
//         if (!acc[key]) {
//           acc[key] = { ...item, quantity: 0 };
//         }
//         acc[key].quantity += item.quantity;
//       }
//       return acc;
//     }, {});
//   };

//   const calculateSubtotal = (items) => {
//     const total = Object.values(items).reduce((sum, item) => {
//       const price = item.stock && item.stock.product ? item.stock.product.price : 0;
//       return sum + price * item.quantity;
//     }, 0);
//     setSubtotal(total);
//   };

//   const total = subtotal + shippingFee + 5000; // Tổng cộng bao gồm phí vận chuyển và thuế

//   const handlePayment = async () => {
//     setIsLoading(true);
//     const token = localStorage.getItem('user_token');
//     if (!token) {
//       console.error('No user token found');
//       // Handle the case when there's no token, e.g., redirect to login page or show an error message
//       setIsLoading(false);
//       return;
//     }
//     const orderData = Object.values(cartItems).map(item => ({
//       stock_id: item.stock.id,
//       quantity: item.quantity
//     }));

//     try {
//       const response = await apiOrder.create(orderData, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log('Order created:', response.data);
//       setShowSuccess(true);
//       setTimeout(() => {
//         navigate('/checkout/successful');
//       }, 3500); // Chuyển hướng sau 3.5 giây
//     } catch (error) {
//       console.error('Error creating order:', error);
//       // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi)
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (showSuccess) {
//     return (
//       <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//         <div className="bg-white p-8 rounded-lg shadow-xl">
//           <Success />
//           <p className="text-center mt-4 text-xl font-semibold">Đang thanh toán!</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'} p-6 rounded-lg`}>
//       <h2 className={`text-4xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
//         {total.toLocaleString()}đ
//       </h2>
//       <ul className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} mt-8 space-y-4`}>
//         {Object.values(cartItems).map((item) => (
//           <li key={item.id} className="flex flex-wrap gap-4 text-sm">
//             <span className="flex-grow">
//               {item.stock && item.stock.product ? item.stock.product.name : 'Product Name Not Available'}
//             </span>
//             <span className="w-16 text-center">
//               x{item.quantity}
//             </span>
//             <span className="w-24 text-right font-bold">
//               {((item.stock && item.stock.product ? item.stock.product.price : 0) * item.quantity).toLocaleString()}đ
//             </span>
//           </li>
//         ))}
//         <li className="flex flex-wrap gap-4 text-sm">
//           <span className="flex-grow">Phí vận chuyển</span>
//           <span className="w-16"></span>
//           <span className="w-24 text-right font-bold">{shippingFee.toLocaleString()}đ</span>
//         </li>
//         <li className="flex flex-wrap gap-4 text-sm">
//           <span className="flex-grow">Thuế</span>
//           <span className="w-16"></span>
//           <span className="w-24 text-right font-bold">5.000đ</span>
//         </li>
//         <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
//           <span className="flex-grow">Tổng cộng</span>
//           <span className="w-16"></span>
//           <span className="w-24 text-right">{total.toLocaleString()}đ</span>
//         </li>
//       </ul>
//       <button
//         onClick={handlePayment}
//         disabled={isLoading}
//         className={`mt-8 w-full px-6 py-3 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//       >
//         {isLoading ? 'Đang xử lý...' : `Thanh toán ${total.toLocaleString()}đ`}
//       </button>
      
//     </div>
//   );
// };

// export default Checkout;

