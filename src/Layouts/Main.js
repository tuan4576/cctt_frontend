import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Layouts/Home'; // Adjust the path if needed
// import Collections from '../pages/home/Collections'; // Ensure the path is correct
// import ProductPage from '../pages/products/ProductPage';
// import ProductDetail from './../pages/products/ProductDetail';
import Login from './../pages/auth/Login';
import Register from './../pages/auth/Register';
import QuickView from './../pages/home/QuickView';
import ShoppingCart from './../pages/home/ShoppingCart';
import Wishlist from './../pages/home/Wishlist';
import Checkout from '../pages/home/Checkout';
import Blog from '../pages/home/Blog';
import Shop from '../pages/home/Shop';
import About from '../pages/home/About';
import Contact from '../pages/home/Contact';
import Profile from '../pages/auth/User/profile';
import Setting from '../pages/auth/User/settings';
import PaymentSuccessful from '../pages/home/PaymentSuccessful';
import OrderHistory from '../pages/home/OrderHistory';
import { useTheme } from '../ThemeContext';

const Main = () => {
  const { theme } = useTheme(); // Sử dụng theme từ Context

  return (
    <main>
      <div className={`bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen`}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/collections" element={<Collections />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quickView/:productId" element={<QuickView />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/checkout/successful" element={<PaymentSuccessful />} />
          <Route path="/checkout/order-history" element={<OrderHistory />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
