import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; 
import { IMG_URL } from '../api/config'
import Authentification from '../pages/auth/Authentification';
import { useSelector } from 'react-redux';
import apiProduct from '../api/apiProduct';

function Header() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cart = useSelector(state => state.cart);
  const cartItemCount = cart ? cart.length : 0;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);  
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const token = localStorage.getItem('user_token');
    setIsLoggedIn(!!token);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let headerClasses = scrolled ? 'scrolled header' : 'header';

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(true);

    if (value.trim()) {
      try {
        const response = await apiProduct.search(value);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error searching products:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowResults(false);
  };

  // Click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className={headerClasses}>
        <div className="container-menu-desktop">
          <div className="wrap-menu-desktop" style={{marginTop:'-35px'}}>
            <nav className="limiter-menu-desktop container flex justify-between items-center">
              <a href="#st" className="logo">
                <img
                  src={`${IMG_URL}/icons/logo-02.png`}
                  alt="Logo"
                  width="150"
                  height="20"
                  loading="lazy"
                />
              </a>
              <div id="collapseMenu" className="flex-grow max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
                <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </button>
                <ul className="lg:flex lg:justify-center lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                  <li className="mb-6 hidden max-lg:block">
                    <a href="#st"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" /></a>
                  </li>
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <Link to="/" className="lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[13px] no-underline">
                      <button className="w-full text-left">Trang chủ</button>
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <Link to="/shop" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[13px] no-underline">
                      <button className="w-full text-left">Cửa hàng</button>
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <Link to="/blog" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[13px] no-underline">
                      <button className="w-full text-left">Thông tin</button>
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <Link to="/about" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[13px] no-underline">
                      <button className="w-full text-left">Về chúng tôi</button>
                    </Link>
                  </li>
                  <li className="max-lg:border-b max-lg:py-3 px-3">
                    <Link to="/contact" className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[13px] no-underline">
                      <button className="w-full text-left">Liên hệ</button>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="wrap-icon-header flex items-center">
                  <div className="search-container relative">
                    <form onSubmit={handleSearchSubmit} className="flex bg-transparent border-b focus-within:border-blue-600 overflow-visible items-center mr-5 relative">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="14px" className="fill-blue-500 dark:fill-red-400 mr-3 rotate-90">
                        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                      </svg>
                      <input 
                        type="text" 
                        placeholder="Tìm kiếm ..." 
                        className="outline-none bg-transparent text-blue-500 dark:text-red-400 placeholder-blue-500 dark:placeholder-red-400 text-[14px] w-full px-2 py-1"
                        spellCheck="false"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onFocus={() => setShowResults(true)}
                      />
                      {searchTerm && (
                        <button 
                          type="button"
                          onClick={clearSearch} 
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                      {showResults && searchResults.length > 0 && (
                        <div className="absolute top-full left-0 w-[300px] bg-white shadow-lg rounded-lg mt-1 z-50 max-h-[400px] overflow-y-auto">
                          {searchResults.map((result) => (
                            <Link
                              key={result.id}
                              to={`/quickView/${result.id}`}
                              className="block p-3 hover:bg-gray-100 border-b border-gray-100 no-underline hover:no-underline"
                              onClick={() => {
                                setSearchTerm('');
                                setSearchResults([]);
                                setShowResults(false);
                              }}
                            >
                              <div className="text-sm font-medium text-gray-900">{result.name}</div>
                              <div className="text-sm text-gray-500">{result.price.toLocaleString('vi-VN')}đ</div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </form>
                  </div>
                  <Link to="/filter" className="p-2 cursor-pointer hover:bg-gray-100 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                  </Link>
                  <div className="flex items-center mr-[1px]">
                    <label className="relative cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={theme === 'dark'}
                        onChange={toggleTheme}
                      />
                      <div
                        className="w-[60px] h-8 flex items-center bg-transparent rounded-full text-[12px] peer-checked:text-white text-gray-300 font-extrabold after:flex after:items-center after:justify-center peer after:content-['\2600'] peer-checked:after:content-['\1F319'] peer-checked:after:translate-x-full after:absolute after:left-[2px] peer-checked:after:border-gray-800 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gray-800 peer-checked:after:bg-gray-800">
                      </div>
                    </label>
                  </div>
               
                <Link to="/shopping-cart" className="p-2 cursor-pointer hover:bg-gray-100 rounded-full relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cartItemCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{cartItemCount}</span>
                  )}
                </Link>
                <Link to="/wishlist" className="p-2 cursor-pointer hover:bg-gray-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </Link>
                
                {isLoggedIn ? (
                  <Authentification />
                ) : (
                  <Link to="/login" className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
