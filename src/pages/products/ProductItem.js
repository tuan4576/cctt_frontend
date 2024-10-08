import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product" style={{ marginBottom: "60px" }}>
            <div className="product-img">
                {/* Assuming photoArray[0] is the filename of the first image */}
                <img src={product.photo && require(`../../assets/img/${product.photo}`) ? require(`../../assets/img/${product.photo}`) : require('../../assets/img/product01.png')} alt={product.name} />
                <div className="product-label">
                    <span className="new">NEW</span>
                </div>
            </div>
            <div className="product-body">
                <p className="product-category">{product.category.name}</p>
                <h3 className="product-name"><a href="st">{product.name}</a></h3>
                <h4 className="product-price">${product.price}</h4>
                <div className="product-rating">
                    {/* Assuming static rating stars */}
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <div className="product-btns">
                    <button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
                    <button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
                    <button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
                </div>
            </div>
            <div className="add-to-cart">
                <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
            </div>
        </div>
    );
};

export default ProductItem;