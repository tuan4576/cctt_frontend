import React, { useState, useEffect } from 'react';
import { useTheme } from '../../ThemeContext';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
    const { theme } = useTheme();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Mock data for demonstration
        const mockOrders = [
            { id: 1, createdAt: '2023-07-01', totalAmount: 1500000, status: 'Đã giao' },
            { id: 2, createdAt: '2023-07-05', totalAmount: 2000000, status: 'Đang xử lý' },
            { id: 3, createdAt: '2023-07-10', totalAmount: 1800000, status: 'Đã hủy' },
        ];
        setOrders(mockOrders);
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Đã giao':
                return 'text-green-500';
            case 'Đang xử lý':
                return 'text-yellow-500';
            case 'Đã hủy':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className={`min-h-screen pt-40 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className="container mx-auto px-4 py-8">
                <h1 className={`text-3xl font-bold mb-10 ${theme === 'dark' ? 'text-purple-300' : 'text-purple-600'} text-center`}>Lịch sử đơn hàng</h1>
                {orders.length === 0 ? (
                    <p className="text-center text-lg">Bạn chưa có đơn hàng nào.</p>
                ) : (
                    <div className={`overflow-x-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md rounded-lg mt-8`}>
                        <table className="w-full table-auto">
                            <thead className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                <tr>
                                    <th className="px-4 py-3 text-left">Mã đơn hàng</th>
                                    <th className="px-4 py-3 text-left">Ngày đặt</th>
                                    <th className="px-4 py-3 text-left">Tổng tiền</th>
                                    <th className="px-4 py-3 text-left">Trạng thái</th>
                                    <th className="px-4 py-3 text-left">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                                        <td className="px-4 py-3">{order.id}</td>
                                        <td className="px-4 py-3">{new Date(order.createdAt).toLocaleDateString()}</td>
                                        <td className="px-4 py-3">{order.totalAmount.toLocaleString()}đ</td>
                                        <td className={`px-4 py-3 ${getStatusColor(order.status)}`}>{order.status}</td>
                                        <td className="px-4 py-3">
                                            <Link to={`/order/${order.id}`} className={`${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white px-4 py-2 rounded transition duration-300 ease-in-out`}>
                                                Chi tiết
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <div className="mt-10 text-center">
                    <button onClick={() => window.location.href = '/'} className={`${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-purple-300' : 'bg-gray-200 hover:bg-gray-300 text-purple-700'} px-6 py-3 rounded text-lg transition duration-300 ease-in-out`}>
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
