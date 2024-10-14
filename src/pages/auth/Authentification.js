import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import { useDispatch } from 'react-redux';
import Avatar from './Avatar';

function Authentification() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('user_token');
    const storedUsername = sessionStorage.getItem('user_username');
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Remove all user-related session storage items
    sessionStorage.removeItem('user_email');
    sessionStorage.removeItem('user_username');
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('user_photo');
    sessionStorage.removeItem('user_session');

    // Remove token from localStorage
    localStorage.removeItem('user_token');

    // Reset Redux state
    dispatch({
      type: 'USER_DATA',
      value: null
    });

    // Update login state
    setIsLoggedIn(false);
    setUsername('');

    // Redirect to home page
    navigate('/');

    // Reload the page
    window.location.reload();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {isLoggedIn ? (
        <div className="flex items-center">
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            <Avatar />
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10" style={{top: '100%'}}>
              <button onClick={() => navigate('/profile')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hồ sơ</button>
              <button onClick={() => navigate('/checkout/order-history')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lịch sử mua hàng</button>
              <button onClick={() => navigate('/settings')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cài đặt</button>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng xuất</button>
            </div>
          )}
        </div>
      ) : (
        <Link 
          to="/login" 
          className="flex items-center p-2 cursor-pointer hover:bg-gray-100 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default Authentification;


