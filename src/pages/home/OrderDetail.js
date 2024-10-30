import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Load from '../../Layouts/Loading';

function OrderDetail() {
  const { theme } = useTheme();
  const location = useLocation();
  const { orderItems } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  if (isLoading) {
    return <Load />;
  }

  if (!orderItems) {
    return <div>No order details available.</div>;
  }

  return (
    <div className={`min-h-screen pt-40 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-10 ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'} text-center`}>Chi tiết đơn hàng</h1>
        <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-lg p-6`}>
          <h3 className="text-lg font-semibold mb-3">Sản phẩm:</h3>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <tr>
                  <th className="px-4 py-2 text-left">Tên sản phẩm</th>
                  <th className="px-4 py-2 text-left">Số lượng</th>
                  <th className="px-4 py-2 text-left">Giá</th>
                  <th className="px-4 py-2 text-left">Tổng</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((item, index) => (
                  <tr key={index} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                    <td className="px-4 py-2">{item.product_name}</td>
                    <td className="px-4 py-2">x {item.quantity}</td>
                    <td className="px-4 py-2">{formatCurrency(item.price)}đ</td>
                    <td className="px-4 py-2">{formatCurrency(item.quantity * item.price)}đ</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
