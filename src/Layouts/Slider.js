import React from 'react'
import { useTheme } from '../ThemeContext';
import slider1 from '../assets/images/slider1.png'
import slider2 from '../assets/images/slider2.png'
import slider3 from '../assets/images/slider3.png'
import slider4 from '../assets/images/slider4.png'
import slider5 from '../assets/images/slider5.png'
import slider6 from '../assets/images/slider6.png'
import slider7 from '../assets/images/slider7.png'
import slider8 from '../assets/images/slider8.png'
import Untitled4 from '../assets/images/Untitled-4.png'
import Untitled5 from '../assets/images/Untitled-5.png'
import Untitled6 from '../assets/images/Untitled-6.png'

function Slider() {
  const { theme } = useTheme();

  const getGradient = () => {
    return theme === 'dark'
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.4) 80%, rgb(0, 0, 0) 100%)'
      : 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.4) 80%, rgb(255, 255, 255) 100%)';
  };

  return (
    <div>
      <section className="section-slide" style={{marginTop: '0px'}}>
        <div className="wrap-slick1">
          <div className="slick1">
            {[Untitled6, Untitled5, Untitled4].map((image, index) => (
              <div
                key={index}
                className="item-slick1"
                style={{
                  backgroundImage: `${getGradient()}, url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'opacity 0.5s ease-in-out',
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  animation: `fadeInOut 15s linear infinite ${index * 5}s`
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section-slide" style={{marginTop: 0}}>
        <div className="wrap-slick2">
          <div className="slick2">
            {[
                [slider1, slider2],
                [slider3, slider4],
                [slider5, slider6],
                [slider7, slider8],
            ].map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="item-slick2"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  animation: `fadeInOut 15s linear infinite ${pairIndex * 5}s`
                }}
              >
                {pair.map((image, index) => (
                  <div
                    key={index}
                    className="image-container"
                    style={{
                      width: 'calc(100% - 100px)',
                      height: '200px',
                      margin: '0 5px',
                      borderRadius: '25px',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={image}
                      alt={`Slider ${pairIndex * 2 + index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeInOut {
          0%, 33.33% { opacity: 1; }
          33.34%, 100% { opacity: 0; }
        }
        .wrap-slick1, .wrap-slick2 {
          position: relative;
          overflow: hidden;
        }
        .wrap-slick1 {
          height: 100vh;
        }
        .wrap-slick2 {
          height: 220px;
          max-width: 1400px;
          margin: 0 auto;
        }
        .slick1, .slick2 {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default Slider
