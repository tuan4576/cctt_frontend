import React, { useState, useEffect } from 'react';
import { useTheme } from '../../ThemeContext';
import apiOrder from '../../api/apiOrder';
import { useNavigate } from 'react-router-dom';
import Load from '../../Layouts/Loading';

const OrderHistory = () => {
    const { theme } = useTheme();
    const [orders, setOrders] = useState([]);
    const [displayedOrders, setDisplayedOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const ordersPerPage = 5;

    useEffect(() => {
        fetchOrderHistory();
    }, []);

    useEffect(() => {
        setDisplayedOrders(orders.slice(0, ordersPerPage));
    }, [orders]);

    const fetchOrderHistory = async () => {
        try {
            const token = localStorage.getItem('user_token');
            if (!token) {
                console.error('No user token found');
                setIsLoading(false);
                return;
            }
            const response = await apiOrder.getOrderHistory({
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setOrders(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching order history:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const loadMoreOrders = () => {
        const currentLength = displayedOrders.length;
        const newOrders = orders.slice(currentLength, currentLength + ordersPerPage);
        setDisplayedOrders([...displayedOrders, ...newOrders]);
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Đã giao':
            case 'completed':
                return 'text-green-500';
            case 'Đang xử lý':
                return 'text-yellow-500';
            case 'Đã hủy':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const getStatusText = (status) => {
        return status === 'completed' ? 'Mua hàng thành công' : status;
    };

    if (isLoading) {
        return <Load />;
    }

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
                                    <th className="px-4 py-3 text-left">Số lượng</th>
                                    <th className="px-4 py-3 text-left">Tổng tiền</th>
                                    <th className="px-4 py-3 text-left">Trạng thái</th>
                                    <th className="px-4 py-3 text-left">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedOrders.map((order) => (
                                    <tr key={order.order_id} className={`${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} border-b`}>
                                        <td className="px-4 py-3">{order.order_code}</td>
                                        <td className="px-4 py-3">{new Date(order.order_date).toLocaleDateString()}</td>
                                        <td className="px-4 py-3">{order.total_quantity}</td>
                                        <td className="px-4 py-3">{formatCurrency(order.total_amount)}đ</td>
                                        <td className={`px-4 py-3 ${getStatusColor(order.status)}`}>{getStatusText(order.status)}</td>
                                        <td className="px-4 py-3">
                                            <button
                                                onClick={() => navigate(`/order`, { state: { orderItems: order.items } })}
                                                className={`${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white px-4 py-2 rounded transition duration-300 ease-in-out`}
                                            >
                                                Chi tiết
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {displayedOrders.length < orders.length && (
                    <div className="mt-6 text-center">
                        <button
                            onClick={loadMoreOrders}
                            className={`${theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white px-6 py-3 rounded text-lg transition duration-300 ease-in-out`}
                        >
                            Xem thêm
                        </button>
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
