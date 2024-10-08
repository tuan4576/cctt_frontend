import React, { Component } from "react";
import axios from "axios";
import { Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Api } from "../api/Api";
function withRouter(Component) {
    function ComponentWithRouterProps(props) {
        const params = useParams();
        return <Component {...props} params={params} />;
    }
    return ComponentWithRouterProps;
}
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            loading: true,
            cartLoading: false,
            cartButtonInit: true,
            productId: "",
            product: "",
            stocks: [],
            selectedSize: "",
            selectedColor: "",
            cartCount: "",
            quantity: 1,
            avaibleQuantity: "",
            settings: {
                dots: true,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        };
    }
    getProduct(id) {
        this.setState({ loading: true });
        console.log("Fetching product with ID:", id);
        axios
            .get(`${Api}/products/${id}`)
            .then((response) => {
                console.log("API call successful:", response);
                this.setState({
                    productId: id,
                    product: response.data,
                    stocks: [...response.data.stocks],
                    loading: false,
                });
            }).catch((error) => {
                this.setState({ loading: false });
                console.error("API call failed:", error);
            });
    }
    handleMouseLeave() {
        this.setState({ cartButtonInit: true });
    }
    handleWishlist(e) {
        e.preventDefault();
        if (!localStorage.getItem("token")) {
            this.props.showLogin();
        } else {
            axios
                .post(
                    `${Api}/product/wishlist`,
                    {
                        productId: e.target.id,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    }
                )
                .then((response) => {
                    if (response.status === 200) {
                        this.props.updateWishlistCount(response.data);
                        this.props.showToast("Added to wishlist!");
                    }
                })
                .catch((error) => {
                    this.props.showToast("Product is already in the wishlist!");
                });
        }
    }
    componentDidMount() {
        const { productId } = this.props.params; // Accessing productId from params 
        this.getProduct(productId);
    }
    componentDidUpdate(prevProps) {
        const { productId } = this.props.params; // Accessing productId from params
        if (productId !== prevProps.params.productId) {
            this.getProduct(productId);
        }
    }
    render() {
        const { productId } = this.props.params; // Accessing productId from params
        const {
            loading,
            product,
            settings,
            avaibleQuantity,
            quantity,
            cartButtonInit,
            cartLoading,
            stocks,
            selectedSize,
            selectedColor,
        } = this.state;
        if (loading) {
            return <Spinner animation="border" />;
        }
        return (
            <div>
                <div id="breadcrumb" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul className="breadcrumb-tree">
                                    <li><a href="\">Home</a></li>
                                    <li><a href="\">All Categories</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Headphones</a></li>
                                    <li className="active">Product name goes here</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal.Body>
                    <div className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-md-push-2">
                                    <div id="product-main-imgs">
                                        <div id="product-imgs">
                                            <div className="product-preview">
                                                <img src={product.photo && require(`../../assets/img/${product.photo}`) ? require(`../../assets/img/${product.photo}`) : require('../../assets/img/hotdeal.png')} alt={product.name} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <div className="product-details">
                                        <h2 className="product-name">{product.name}</h2>
                                        <div>
                                            <div className="product-rating">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <a className="review-link" href="#">10 Review(s) | Add your review</a>
                                        </div>
                                        <div>
                                            <h3 className="product-price">
                                                ${product.price - product.price * 0.1}{" "} <del className="product-old-price">{product.price}</del></h3>
                                            <span className="product-available">In Stock</span>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                        <div className="product-options">
                                            <label>
                                                Size &nbsp;&nbsp;
                                                <select className="input-select">
                                                    <option value="0">X</option>
                                                </select>
                                            </label>
                                            <label>
                                                &nbsp;&nbsp;Color&nbsp;&nbsp;
                                                <select className="input-select">
                                                    <option value="0">Red</option>
                                                </select>
                                            </label>
                                        </div>

                                        <div className="add-to-cart">
                                            <div className="qty-label">
                                                Qty
                                                <div className="input-number">
                                                    <input type="number" />
                                                    <span className="qty-up">+</span>
                                                    <span className="qty-down">-</span>
                                                </div>
                                                <div className="rating-progress">
                                                    <div style={{ width: '80%' }}></div>
                                                </div>
                                                <span className="sum">3</span>
                                                <li>
                                                    <div className="rating-stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="rating-progress">
                                                        <div style={{ width: '60%' }}></div>
                                                    </div>
                                                    <span className="sum">2</span>
                                                </li>
                                                <li>
                                                    <div className="rating-stars">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                    <div className="rating-progress">
                                                        <div>

                                                        </div>
                                                    </div>
                                                    <span className="sum">0</span>
                                                </li>
                                                <li>
                                                    <div className="rating-stars">

                                                    </div>
                                                </li>
                                            </div>
                                            <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                        </div>

                                        <ul className="product-btns">
                                            <li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                                            <li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
                                        </ul>

                                        <ul className="product-links">
                                            <li>Category:</li>
                                            <li><a href="#">Headphones</a></li>
                                            <li><a href="#">Accessories</a></li>
                                        </ul>

                                        <ul className="product-links">
                                            <li>Share:</li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                        </ul>

                                    </div>
                                </div>

                            </div>


                            <div className="col-md-12">
                                <div id="product-tab">
                                    <ul className="tab-nav">
                                        <li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
                                        <li><a data-toggle="tab" href="#tab2">Details</a></li>
                                        <li><a data-toggle="tab" href="#tab3">Reviews (3)</a></li>
                                    </ul>

                                    {/* <div className="tab-content">
                                        <div id="tab1" className="tab-pane fade in active">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>
                                        </div>

                                     <div id="tab2" className="tab-pane fade in">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                </div>
                                            </div>
                                        </div>


                                        <div id="tab3" className="tab-pane fade in">
                                            <div className="row">

                                                <div className="col-md-3">
                                                    <div id="rating">
                                                        <div className="rating-avg">
                                                            <span>4.5</span>
                                                            <div className="rating-stars">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star-o"></i>
                                                            </div>
                                                        </div>
                                                        <ul className="rating">
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                            <li>
                                                                <div className="rating-stars">
                                                                    <i className="fa fa-star"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                    <i className="fa fa-star-o"></i>
                                                                </div>
                                                                <div className="rating-progress">
                                                                    <div></div>
                                                                </div>
                                                                <span className="sum">0</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div id="reviews">
                                                        <ul className="reviews">
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o empty"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o empty"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="review-heading">
                                                                    <h5 className="name">John</h5>
                                                                    <p className="date">27 DEC 2018, 8:0 PM</p>
                                                                    <div className="review-rating">
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star"></i>
                                                                        <i className="fa fa-star-o empty"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="review-body">
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="reviews-pagination">
                                                            <li className="active">1</li>
                                                            <li><a href="#">2</a></li>
                                                            <li><a href="#">3</a></li>
                                                            <li><a href="#">4</a></li>
                                                            <li><a href="#"><i className="fa fa-angle-right"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div id="review-form">
                                                        <form className="review-form">
                                                            <input className="input" type="text" placeholder="Your Name" />
                                                            <input className="input" type="email" placeholder="Your Email" />
                                                            <textarea className="input" placeholder="Your Review"></textarea>
                                                            <div className="input-rating">
                                                                <span>Your Rating: </span>
                                                                <div className="stars">
                                                                    <input id="star5" name="rating" value="5" type="radio" /><label htmlFor="star5"></label>
                                                                    <input id="star4" name="rating" value="4" type="radio" /><label htmlFor="star4"></label>
                                                                    <input id="star3" name="rating" value="3" type="radio" /><label htmlFor="star3"></label>
                                                                    <input id="star2" name="rating" value="2" type="radio" /><label htmlFor="star2"></label>
                                                                    <input id="star1" name="rating" value="1" type="radio" /><label htmlFor="star1"></label>
                                                                </div>
                                                            </div>
                                                            <button className="primary-btn">Submit</button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body >
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Related Products</h3>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div id="product-imgs">
                                        <div className="product-img">
                                            <div className="product-label">
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-preview">
                                            <img height="300" width="300" src={product.photo && require(`../../assets/img/${product.photo}`) ? require(`../../assets/img/${product.photo}`) : require('../../assets/img/hotdeal.png')} alt={product.name} />
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        <div className="product-rating">
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
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div id="product-imgs">
                                        <div className="product-img">
                                            <div className="product-label">
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-preview">
                                            <img height="300" width="300" src={product.photo && require(`../../assets/img/${product.photo}`) ? require(`../../assets/img/${product.photo}`) : require('../../assets/img/hotdeal.png')} alt={product.name} />
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        <div className="product-rating">
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
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div id="product-imgs">
                                        <div className="product-img">
                                            <div className="product-label">
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-preview">
                                            <img height="300" width="300" src={product.photo && require(`../../assets/img/${product.photo}`) ? require(`../../assets/img/${product.photo}`) : require('../../assets/img/hotdeal.png')} alt={product.name} />
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        <div className="product-rating">
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
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="product">
                                    <div id="product-imgs">
                                        <div className="product-img">
                                            <div className="product-label">
                                                <span className="new">NEW</span>
                                            </div>
                                        </div>
                                        <div className="product-preview">
                                            <img height="300" width="300" src={product.photo && require(`../../assets/img/${product.photo}`) ? require(`../../assets/img/${product.photo}`) : require('../../assets/img/hotdeal.png')} alt={product.name} />
                                        </div>
                                    </div>
                                    <div className="product-body">
                                        <p className="product-category">Category</p>
                                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                                        <div className="product-rating">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        );
    }
}
export default withRouter(ProductDetail);