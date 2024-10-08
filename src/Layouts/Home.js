import React from 'react'

import NewsLetter from '../Layouts/NewsLetter';
import Slider from '../Layouts/Slider';
import Nav from '../Layouts/Nav';
import New from '../pages/home/New';
import Load from '../Layouts/Loading';
import Animation from '../assets/images/Animation/success';
import Pay from '../assets/images/Animation/pay';
import ZaloIcon from '../assets/images/zalo.svg'; // Đường dẫn đến hình ảnh Zalo
import PhoneIcon from '../assets/images/chat.png'; // Đường dẫn đến hình ảnh Zalo
import MessengerIcon from '../assets/images/messenger.svg'; // Đường dẫn đến hình ảnh Zalo
import Carousel from '../pages/home/Carousel'
import Like from '../pages/home/Like'
import TopSelling from '../pages/home/TopSelling'
import Avatar from '../pages/auth/Avatar';
function Home(props) {
  return (
    <div>
      <Slider />
      {/* <Nav /> */}
      {/* <Load /> */}
      {/* <Animation />
      <Pay /> */}
      {/* <NewsLetter /> */}
      {/* <Avatar /> */}
      <Carousel />
      <New />
      {/* <Like /> */}
      {/* <TopSelling /> */}
      <div className="mt-10 fixed bottom-10 right-5 z-50 flex flex-col items-end space-y-4">
        <img 
          src={PhoneIcon} 
          alt="Phone Icon" 
          className="w-11 h-11 mr-2 cursor-pointer animate-gentle-shake"
          style={{
            animation: 'gentleShake 2s ease-in-out infinite',
            transformOrigin: '50% 50%',
          }}
        />
          <img 
            src={ZaloIcon} 
            alt="Zalo Icon" 
            className="w-22 h-22 cursor-pointer animate-gentle-shake"
            style={{
              animation: 'gentleShake 2s ease-in-out infinite',
              transformOrigin: '50% 50%',
            }}
          />
        <img 
          src={MessengerIcon} 
          alt="Messenger Icon" 
          className="w-22 h-22 cursor-pointer animate-gentle-shake"
          style={{
            animation: 'gentleShake 2s ease-in-out infinite',
            transformOrigin: '50% 50%',
          }}
        />
      </div>
      <style jsx>{`
        @keyframes gentleShake {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }
      `}</style>
      
    </div>
  )
}

export default Home