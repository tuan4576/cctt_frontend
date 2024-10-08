import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';

const PaymentSuccessful = () => {
    const { theme } = useTheme();

    return (
        <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800'}`}>
            <div className={`max-w-md w-full p-8 rounded-lg shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="text-center">
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-purple-600' : 'bg-gradient-to-r from-purple-400 to-pink-400'}`}>
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className={`mt-4 text-2xl font-bold ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'}`}>Thanh toán thành công!</h2>
                    <p className={`mt-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được xác nhận.</p>
                </div>
                <div className="mt-8">
                    <button onClick={() => window.location.href = '/'} className={`block w-full text-center py-2 px-4 rounded-md ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white' : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'}`}>
                        Trở về trang chủ
                    </button>
                    <button onClick={() => window.location.href = '/checkout/order-history'} className={`block w-full text-center mt-4 py-2 px-4 rounded-md ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-purple-300' : 'bg-gray-200 hover:bg-gray-300 text-purple-700'}`}>
                        Xem lịch sử đơn hàng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessful;
