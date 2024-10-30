import React, { useState, useEffect } from 'react';
import { IMG_URL } from '../../api/config'
import apiProduct from '../../api/apiProduct';
import apiCategory from '../../api/apiCategory';
import { Link } from 'react-router-dom';
import Loading from '../../Layouts/Loading';
import apiShoppingCart from '../../api/apiShoppingCart';

const Filter = () => {
    const [filters, setFilters] = useState({
        searchTerm: '',
        category: 'all', 
        priceRange: [18356000, 39459000],
        sortBy: 'newest',
        priceFilter: 'all'
    });

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showLoginNotification, setShowLoginNotification] = useState(false);
    const [showUpdateNotification, setShowUpdateNotification] = useState(false);
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [notificationTimeout, setNotificationTimeout] = useState(0);
    const [categories, setCategories] = useState([
        { value: 'all', label: 'Tất cả' }
    ]);

    const priceRangeOptions = [
        { value: 'all', label: 'Tất cả', range: [0, 100000000] },
        { value: '2to4', label: 'Từ 2 - 4 triệu', range: [2000000, 4000000] },
        { value: '4to7', label: 'Từ 4 - 7 triệu', range: [4000000, 7000000] },
        { value: '7to13', label: 'Từ 7 - 13 triệu', range: [7000000, 13000000] },
        { value: '13to20', label: 'Từ 13 - 20 triệu', range: [13000000, 20000000] },
        { value: '20to30', label: 'Từ 20 - 30 triệu', range: [20000000, 30000000] },
        { value: 'above30', label: 'Trên 30 triệu', range: [30000000, 100000000] }
    ];

    const sortOptions = [
        { value: 'newest', label: 'Mới nhất' },
        { value: 'price-asc', label: 'Giá tăng dần' },
        { value: 'price-desc', label: 'Giá giảm dần' },
        { value: 'name-asc', label: 'Tên A-Z' },
        { value: 'name-desc', label: 'Tên Z-A' }
    ];

    useEffect(() => {
        if (notificationTimeout > 0) {
            const timer = setTimeout(() => {
                setNotificationTimeout(prev => prev - 1);
                if (notificationTimeout === 1) {
                    setShowLoginNotification(false);
                    setShowUpdateNotification(false);
                    setShowErrorNotification(false);
                }
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [notificationTimeout]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await apiCategory.getAll();
                if (response.data) {
                    const fetchedCategories = response.data.map(cat => ({
                        value: cat.id.toString(),
                        label: cat.name
                    }));
                    setCategories([{ value: 'all', label: 'Tất cả' }, ...fetchedCategories]);
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            setIsLoading(true);
            try {
                let response;
                if (filters.category !== 'all') {
                    response = await apiProduct.getProductCategoryId(filters.category);
                    if (response.data && response.data.products) {
                        setProducts(response.data.products.data);
                        setFilteredProducts(response.data.products.data);
                    }
                } else {
                    response = await apiProduct.getAll();
                    if (Array.isArray(response.data.data)) {
                        setProducts(response.data.data);
                        setFilteredProducts(response.data.data);
                    }
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                setProducts([]);
                setFilteredProducts([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [filters.category]);

    useEffect(() => {
        let result = [...products];

        // Apply search filter
        if (filters.searchTerm) {
            result = result.filter(product => 
                product.name.toLowerCase().includes(filters.searchTerm.toLowerCase())
            );
        }

        // Apply price range filter
        result = result.filter(product => {
            const price = product.price;
            return price >= filters.priceRange[0] && price <= filters.priceRange[1];
        });

        // Apply sorting
        switch (filters.sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name-asc':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'newest':
                result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                break;
            default:
                break;
        }

        setFilteredProducts(result);
    }, [filters.searchTerm, filters.priceRange, filters.sortBy, products]);

    const handleFilterChange = (key, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [key]: value
        }));
    };

    const handlePriceRangeOptionChange = (option) => {
        handleFilterChange('priceFilter', option.value);
        handleFilterChange('priceRange', option.range);
    };

    const handleCustomRangeChange = (index, value) => {
        const newRange = [...filters.priceRange];
        newRange[index] = value;
        setFilters(prevFilters => ({
            ...prevFilters,
            priceRange: newRange
        }));
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

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-white rounded-lg p-6 mb-6 shadow-md mt-[100px]">
            {showLoginNotification && (
                <div className="fixed top-[100px] right-4 bg-yellow-500 text-white px-6 py-3 rounded shadow-lg z-50">
                    Vui lòng đăng nhập để thêm vào giỏ hàng
                </div>
            )}
            {showUpdateNotification && (
                <div className="fixed top-[100px] right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
                    Đã thêm sản phẩm vào giỏ hàng
                </div>
            )}
            {showErrorNotification && (
                <div className="fixed top-[100px] right-4 bg-red-500 text-white px-6 py-3 rounded shadow-lg z-50">
                    Có lỗi xảy ra khi thêm vào giỏ hàng
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-6">
                {/* Right Side - Other Filters */}
                <div className="md:w-3/4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Category Select */}
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={filters.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat.value} value={cat.value}>{cat.label}</option>
                            ))}
                        </select>

                        {/* Sort Select */}
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={filters.sortBy}
                            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                        >
                            {sortOptions.map(option => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Left Side - Price Range Options */}
                <div className="md:w-1/4">
                    <h3 className="font-semibold text-lg mb-4">Mức Giá</h3>
                    <div className="flex flex-wrap gap-4">
                        {priceRangeOptions.map(option => (
                            <div key={option.value} className="flex items-center">
                                <input
                                    type="radio"
                                    id={option.value}
                                    name="priceRange"
                                    checked={filters.priceFilter === option.value}
                                    onChange={() => handlePriceRangeOptionChange(option)}
                                    className="mr-2"
                                />
                                <label htmlFor={option.value} className="text-gray-700">{option.label}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Display filtered products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white shadow-md border rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
                        <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" className="fill-gray-800 inline-block" viewBox="0 0 64 64">
                                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                            </svg>
                        </div>
                        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                            <Link to={`/quickView/${product.id}`}>
                                <img src={`${IMG_URL}/image/${product.photo}`} alt={product.name} className="h-full w-full object-contain" />
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-lg font-extrabold">{product.name}</h3>
      
                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <h4 className="text-lg font-bold">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h4>
                                    <span className="text-sm text-gray-500 line-through">
                                        {(product.price * 1.2).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                                <button 
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
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
    );
};

export default Filter;
