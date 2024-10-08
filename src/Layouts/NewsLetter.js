// import React from 'react'
// import { useTheme } from '../ThemeContext'

// function NewsLetter() {
//   const { theme } = useTheme();

//   return (
//     <div>
//     <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
//       <div className="text-center">
//         <div className="flex items-center justify-center mb-4 relative">
//           <div className="relative">
//             <svg 
//               className={`h-24 w-24 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`} 
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="10" />
//               <path d="M8 15h8" />
//               <circle cx="9" cy="9" r="1" fill="currentColor">
//                 <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
//               </circle>
//               <circle cx="15" cy="9" r="1" fill="currentColor">
//                 <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
//               </circle>
//             </svg>
//             <svg className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full" width="40" height="40" viewBox="0 0 40 40">
//               <circle cx="20" cy="20" r="15" fill="none" stroke={`url(#stars-${theme})`} strokeWidth="2">
//                 <animateTransform
//                   attributeName="transform"
//                   type="rotate"
//                   from="0 20 20"
//                   to="360 20 20"
//                   dur="3s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//               <path d={`M20 5 L22 10 L27 10 L23 14 L25 19 L20 16 L15 19 L17 14 L13 10 L18 10 Z`} fill={theme === 'dark' ? 'yellow' : 'orange'}>
//                 <animateTransform
//                   attributeName="transform"
//                   type="rotate"
//                   from="0 20 20"
//                   to="360 20 20"
//                   dur="3s"
//                   repeatCount="indefinite"
//                 />
//               </path>
//             </svg>
//           </div>
//           <h1 className={`text-6xl font-bold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'} ml-4`}>404</h1>
//         </div>
//         <p className={`text-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-8`}>Oops! Page not found</p>
//         <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-4`}>The page you're looking for doesn't exist or has been moved.</p>
//         <button className={`mt-8 px-4 py-2 ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded transition duration-300`}>
//           Go Home
//         </button>
//       </div>
//     </div>
//     <svg width="0" height="0">
//       <defs>
//         <linearGradient id="stars-dark" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="yellow">
//             <animate attributeName="offset" values="0;1;0" dur="4s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="33%" stopColor="white">
//             <animate attributeName="offset" values="0.33;1.33;0.33" dur="4s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="66%" stopColor="yellow">
//             <animate attributeName="offset" values="0.66;1.66;0.66" dur="4s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="100%" stopColor="white">
//             <animate attributeName="offset" values="1;2;1" dur="4s" repeatCount="indefinite" />
//           </stop>
//         </linearGradient>
//         <linearGradient id="stars-light" x1="0%" y1="0%" x2="100%" y2="0%">
//           <stop offset="0%" stopColor="orange">
//             <animate attributeName="offset" values="0;1;0" dur="4s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="33%" stopColor="yellow">
//             <animate attributeName="offset" values="0.33;1.33;0.33" dur="4s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="66%" stopColor="orange">
//             <animate attributeName="offset" values="0.66;1.66;0.66" dur="4s" repeatCount="indefinite" />
//           </stop>
//           <stop offset="100%" stopColor="yellow">
//             <animate attributeName="offset" values="1;2;1" dur="4s" repeatCount="indefinite" />
//           </stop>
//         </linearGradient>
//       </defs>
//     </svg>
//     </div>
//   )
// }

// export default NewsLetter

// import React from 'react'

// function NewsLetter() {
//   const handleRefresh = () => {
//     window.location.reload();
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-gray-800">
//         <div className="max-w-lg w-full p-10 bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
//           <div className="text-center">
//             <h2 className="text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">Oops!</h2>
//             <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">Something's not quite right</p>
//             <div className="mb-8 relative">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-32 h-32 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
//               </div>
//               <svg className="mx-auto h-32 w-32 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <p className="text-gray-600 dark:text-gray-400 mb-8">We're working on fixing this. In the meantime, why not try refreshing?</p>
//             <button 
//               onClick={handleRefresh}
//               className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:-translate-y-1 transition-all duration-300"
//             >
//               Refresh Page
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NewsLetter
import React from 'react'

function NewsLetter() {
  return (
    <></>
    // <div>
    //   <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    //     <div className="max-w-3xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
    //       <div className="text-center">
    //         <h2 className="mt-6 text-3xl font-extrabold text-black">
    //           User Profile
    //         </h2>
    //       </div>
    //       <div className="mt-8 space-y-6">
    //         <div className="flex justify-center">
    //           <div className="relative">
    //             <img className="h-32 w-32 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
    //             <span className="absolute bottom-0 right-0 h-4 w-4 bg-green-400 rounded-full border-2 border-white"></span>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
    //           <div>
    //             <label htmlFor="first-name" className="block text-sm font-medium text-black">
    //               First name
    //             </label>
    //             <div className="mt-1">
    //               <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md font-bold text-black" value="John" readOnly />
    //             </div>
    //           </div>
    //           <div>
    //             <label htmlFor="last-name" className="block text-sm font-medium text-black">
    //               Last name
    //             </label>
    //             <div className="mt-1">
    //               <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md font-bold text-black" value="Doe" readOnly />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label htmlFor="email" className="block text-sm font-medium text-black">
    //               Email
    //             </label>
    //             <div className="mt-1">
    //               <input id="email" name="email" type="email" autoComplete="email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md font-bold text-black" value="johndoe@example.com" readOnly />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label htmlFor="phone" className="block text-sm font-medium text-black">
    //               Phone
    //             </label>
    //             <div className="mt-1">
    //               <input type="text" name="phone" id="phone" autoComplete="tel" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md font-bold text-black" value="+1 (555) 123-4567" readOnly />
    //             </div>
    //           </div>
    //           <div className="sm:col-span-2">
    //             <label htmlFor="location" className="block text-sm font-medium text-black">
    //               Location
    //             </label>
    //             <div className="mt-1">
    //               <input type="text" name="location" id="location" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md font-bold text-black" value="New York, NY" readOnly />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex items-center justify-between">
    //         <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    //           Edit Profile
    //         </button>
    //         <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    //           Change Password
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default NewsLetter
