import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import { Api } from './../api/Api';

const ProductPage = ({ title }) => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    const [categoryPages, setCategoryPages] = useState({});

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            const defaultCategory = categories[0].id;
            setCurrentCategory(defaultCategory);
            setCurrentPage(1);
            fetchProducts(1, defaultCategory);
        }
    }, [categories]);

    useEffect(() => {
        if (currentCategory !== null) {
            fetchProducts(currentPage, currentCategory);
        }
    }, [currentPage, currentCategory]);

    const fetchProducts = async (page, categoryId) => {
        setLoading(true);
        try {
            const response = await axios.get(`${Api}/product/categories/${categoryId}/new?page=${page}`);
            console.log('Fetched products:', response.data);
            const productData = response.data.data || [];
            setProducts(productData);
            setLastPage(response.data.last_page || 1);
            setCategoryPages(prevState => ({
                ...prevState,
                [categoryId]: [page, response.data.last_page]
            }));
        } catch (error) {
            console.error('Error fetching products', error);
            setProducts([]);
            setLastPage(1);
        } finally {
            setLoading(false);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${Api}/product/categories`);
            console.log('Fetched categories:', response.data);
            setCategories(response.data || []);
        } catch (error) {
            console.error('Error fetching categories', error);
            setCategories([]);
        }
    };

    const handleClick = (categoryId) => {
        setCurrentCategory(categoryId);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const chunkArray = (array, size) => {
        if (!array) return [];
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const productRows = chunkArray(products, 4);

    return (
        <div>
            <div id="breadcrumb" className="section">
                <div className="container">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">Danh mục sản phẩm</h3>
                            <div className="section-nav">
                                <ul className="section-tab-nav tab-nav">
                                    {categories.map(category => (
                                        <li key={category.id} className={category.id === currentCategory ? "active" : ""}>
                                            <a id={category.id} onClick={() => handleClick(category.id)} data-toggle="tab" href="#">
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    {loading ? (
                        <div>Loading...</div>
                    ) : products.length > 0 ? (
                        productRows.map((row, rowIndex) => (
                            <div className="row" key={rowIndex}>
                                {row.map((product) => (
                                    <div className="col-md-3 col-xs-3" key={product.id}>
                                        <ProductItem product={product} />
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div>No products found.</div>
                    )}
                    <div className="pagination">
                        {Array.from({ length: lastPage }, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? 'active' : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
