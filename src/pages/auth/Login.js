// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useTheme } from '../../ThemeContext'

// function Login() {
//   const { theme } = useTheme();

//   return (
//     <div>
//      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} font-[sans-serif]`}>
//   <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 mt-18">
//     <div className="max-w-md w-full">
//       <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow`}>
//         <h2 className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-center text-2xl font-bold select-none`}>Đăng nhập</h2>
//         <form className="mt-8 space-y-4">
//           <div>
//             <div className="relative flex items-center">
//               <input name="username" type="text" required className={`w-full ${theme === 'dark' ? 'text-white bg-gray-700' : 'text-gray-800 bg-gray-50'} text-sm border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} px-4 py-3 rounded-md outline-blue-600 placeholder-transparent peer`} placeholder="Tên đăng nhập" id="username" />
//               <label htmlFor="username" className={`absolute left-4 -top-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} peer-focus:text-sm select-none pointer-events-none user-select-none`}>Tên đăng nhập</label>
//               <svg xmlns="http://www.w3.org/2000/svg" fill={theme === 'dark' ? '#9ca3af' : '#bbb'} stroke={theme === 'dark' ? '#9ca3af' : '#bbb'} className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
//                 <circle cx={10} cy={7} r={6} data-original="#000000" />
//                 <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000" />
//               </svg>
//             </div>
//           </div>
//           <div>
//             <div className="relative flex items-center mt-[25px]">
//               <input name="password" type="password" required className={`w-full ${theme === 'dark' ? 'text-white bg-gray-700' : 'text-gray-800 bg-gray-50'} text-sm border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} px-4 py-3 rounded-md outline-blue-600 placeholder-transparent peer`} placeholder="Mật khẩu" id="password" />
//               <label htmlFor="password" className={`absolute left-4 -top-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} peer-focus:text-sm select-none pointer-events-none user-select-none`}>Mật khẩu</label>
//               <svg xmlns="http://www.w3.org/2000/svg" fill={theme === 'dark' ? '#9ca3af' : '#bbb'} stroke={theme === 'dark' ? '#9ca3af' : '#bbb'} className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 24 24" onClick={() => {
//                 const passwordInput = document.getElementById('password');
//                 const eyeIcon = document.getElementById('eyeIcon');
//                 if (passwordInput.type === 'password') {
//                   passwordInput.type = 'text';
//                   eyeIcon.innerHTML = `
//                     <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
//                   `;
//                 } else {
//                   passwordInput.type = 'password';
//                   eyeIcon.innerHTML = `
//                     <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
//                   `;
//                 }
//               }}>
//                 <g id="eyeIcon">
//                   <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
//                 </g>
//               </svg>
//             </div>
//           </div>
//           <div className="flex flex-wrap items-center justify-between gap-4">
//             <div className="flex items-center">
//               <input id="remember-me" name="remember-me" type="checkbox" className={`h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded`} />
//               <label htmlFor="remember-me" className={`ml-3 block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} select-none user-select-none`}>
//                 Ghi nhớ đăng nhập
//               </label>
//             </div>
//             <div className="text-sm">
//               <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 font-semibold no-underline select-none user-select-none">
//                 Quên mật khẩu?
//               </Link>
//             </div>
//           </div>
//           <div className="!mt-8">
//             <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none select-none user-select-none">
//               Đăng nhập
//             </button>
//           </div>
//         </form>
//         <div className="mt-8">
//           <p className={`text-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 select-none user-select-none`}>Hoặc đăng nhập bằng</p>
//           <div className="flex justify-center space-x-4">
//             <button className={`flex items-center justify-center w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} transition duration-300`}>
//               <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//                 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//                 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//                 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//               </svg>
//             </button>
//             <button className={`flex items-center justify-center w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} transition duration-300`}>
//               <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/>
//               </svg>
//             </button>
//             <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#1a91da] transition duration-300">
//               <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//               </svg>
//             </button>
//             <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166fe5] transition duration-300">
//               <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//               </svg>
//             </button>
//           </div>
//           <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-sm !mt-8 text-center select-none user-select-none`}>Chưa có tài khoản? <Link to="/register" className="text-blue-600 hover:text-blue-800 ml-1 whitespace-nowrap font-semibold select-none user-select-none no-underline">Đăng ký tại đây</Link></p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   )
// }

// export default Login



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../ThemeContext';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import apiUser from '../../api/apiUser';
import toast from 'react-toastify';

function Login() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    // Kiểm tra thông tin đăng nhập từ cookies
    const savedEmail = Cookies.get('user_email');
    const savedPassword = Cookies.get('user_password');
    const savedRememberMe = Cookies.get('user_rememberMe');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
    if (savedRememberMe === 'true') {
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = {
      email: email,
      password: password
    }

    apiUser.loginUser(data)
      .then(result => {
        console.log("result: ", result);
        if (result.status === 200) {
          // Lưu thông tin vào sessionStorage
          sessionStorage.setItem('user_email', result.data.user.email);
          sessionStorage.setItem('user_username', result.data.user.name);
          sessionStorage.setItem('user_id', result.data.user.id);
          sessionStorage.setItem('user_photo', result.data.user.photo);
          sessionStorage.setItem('user_session', result.data.sessionID);

          // Lưu token và các thông tin khác vào localStorage
          localStorage.setItem('user_token', result.data.token);

          // Lưu trạng thái "Ghi nhớ đăng nhập" vào cookies
          Cookies.set('user_rememberMe', rememberMe.toString(), { expires: 30 });

          // Nếu người dùng chọn "Ghi nhớ đăng nhập", lưu vào cookies
          if (rememberMe) {
            const cookieOptions = { expires: 30 }; // Lưu trong 30 ngày
            Cookies.set('user_email', result.data.user.email, cookieOptions);
            Cookies.set('user_password', password, cookieOptions);
          } else {
            // Xóa cookies nếu không chọn "Ghi nhớ đăng nhập"
            Cookies.remove('user_email');
            Cookies.remove('user_password');
          }

          dispatch({
            type: 'USER_DATA',
            value: result.data.user
          });
          navigate('/');
          window.location.reload();
        }
      }).catch(error => {
        console.log(error)
        setError('Email hoặc mật khẩu không chính xác');
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const clearInput = (inputName) => {
    if (inputName === 'email') setEmail('');
    if (inputName === 'password') setPassword('');
  };

  return (
    <div>
      <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} font-[sans-serif]`}>
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 mt-18">
          <div className="max-w-md w-full">
            <div className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow`}>
              <h2 className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-center text-2xl font-bold select-none`}>Đăng nhập</h2>
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <div className="relative flex items-center">
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      className={`w-full ${theme === 'dark' ? 'text-white bg-gray-700' : 'text-gray-800 bg-gray-50'} text-sm border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} px-4 py-3 rounded-md outline-blue-600 placeholder-transparent peer`} 
                      placeholder="Email" 
                      id="email"
                      value={email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email" className={`absolute left-4 -top-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} peer-focus:text-sm select-none pointer-events-none user-select-none`}>Email</label>
                    {email && (
                      <button 
                        type="button" 
                        onClick={() => clearInput('email')}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <div className="relative flex items-center mt-[25px]">
                    <input 
                      name="password" 
                      type={showPassword ? "text" : "password"}
                      required 
                      className={`w-full ${theme === 'dark' ? 'text-white bg-gray-700' : 'text-gray-800 bg-gray-50'} text-sm border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} px-4 py-3 rounded-md outline-blue-600 placeholder-transparent peer`} 
                      placeholder="Mật khẩu" 
                      id="password"
                      value={password}
                      onChange={handleChange}
                    />
                    <label htmlFor="password" className={`absolute left-4 -top-5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} peer-focus:text-sm select-none pointer-events-none user-select-none`}>Mật khẩu</label>
                    {password && (
                      <button 
                        type="button" 
                        onClick={() => clearInput('password')}
                        className="absolute right-10 top-1/2 transform -translate-y-1/2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                    <button 
                      type="button" 
                      onClick={toggleShowPassword}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="text-red-500 text-sm mt-2 h-5">
                  {error}
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className={`h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} rounded`} checked={rememberMe} onChange={handleRememberMeChange} />
                    <label htmlFor="remember-me" className={`ml-3 block text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} select-none user-select-none`}>
                      Ghi nhớ đăng nhập
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link to="/forgot-password" className="text-blue-600 hover:text-blue-800 font-semibold no-underline select-none user-select-none">
                      Quên mật khẩu?
                    </Link>
                  </div>
                </div>
                <div className="!mt-8">
                  <button type="submit" className={`w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none select-none user-select-none`} disabled={loading}>
                    {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                  </button>
                </div>
              </form>
              <div className="mt-8">
                <p className={`text-center text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 select-none user-select-none`}>Hoặc đăng nhập bằng</p>
                <div className="flex justify-center space-x-4">
                  <button className={`flex items-center justify-center w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} transition duration-300`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </button>
                  <button className={`flex items-center justify-center w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'} transition duration-300`}>
                    <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2] hover:bg-[#1a91da] transition duration-300">
                    <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1877F2] hover:bg-[#166fe5] transition duration-300">
                    <svg className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'} text-sm !mt-8 text-center select-none user-select-none`}>Chưa có tài khoản? <Link to="/register" className="text-blue-600 hover:text-blue-800 ml-1 whitespace-nowrap font-semibold select-none user-select-none no-underline">Đăng ký tại đây</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
