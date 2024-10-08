import React from 'react'
import { useTheme } from '../../ThemeContext'

function Wishlist() {
  const { theme } = useTheme();

  return (

      <div className="max-w-4xl mx-auto space-y-4 pt-[100px] p-4">
        <div className='mt-[100px] space-y-5'>
        {/* Mục Yêu Thích 1 */}
        <div className={`flex gap-4 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
          <div className="flex gap-4">
            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
              <img src="https://readymadeui.com/images/product9.webp" className="w-full h-full object-contain" alt="Giày Thanh Lịch" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-bold">Giày Thanh Lịch</h3>
                <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Giày thể thao cao cấp cho phong cách và thoải mái</p>
              </div>
              <div className="mt-auto flex items-center gap-3">
                <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Giảm số lượng">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                  </svg>
                </button>
                <span className="font-bold text-sm leading-[18px]">1</span>
                <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Tăng số lượng">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-col">
            <div className="flex items-start gap-4 justify-end">
              <button type="button" aria-label="Thêm vào danh sách yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-red-500" viewBox="0 0 64 64">
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                </svg>
              </button>
              <button type="button" aria-label="Thêm vào giỏ hàng">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 24 24">
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/>
                  <circle cx="10.5" cy="19.5" r="1.5"/>
                  <circle cx="17.5" cy="19.5" r="1.5"/>
                </svg>
              </button>
            </div>
            <h3 className="text-base font-bold mt-auto">
              <span className="text-sm line-through text-gray-500">280.000đ</span><br />
              230.000đ
            </h3>
          </div>
        </div>

        {/* Mục Yêu Thích 2 */}
        <div className={`flex gap-4 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
          <div className="flex gap-4">
            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
              <img src="https://readymadeui.com/images/product10.webp" className="w-full h-full object-contain" alt="Giày Thể Thao Đô Thị" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-bold">Giày Thể Thao Đô Thị</h3>
                <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Giày thể thao thời trang cho cuộc sống thành phố</p>
              </div>
              <div className="mt-auto flex items-center gap-3">
                <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Giảm số lượng">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                  </svg>
                </button>
                <span className="font-bold text-sm leading-[18px]">1</span>
                <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Tăng số lượng">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-col">
            <div className="flex items-start gap-4 justify-end">
              <button type="button" aria-label="Thêm vào danh sách yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-red-500" viewBox="0 0 64 64">
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                </svg>
              </button>
              <button type="button" aria-label="Thêm vào giỏ hàng">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 24 24">
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/>
                  <circle cx="10.5" cy="19.5" r="1.5"/>
                  <circle cx="17.5" cy="19.5" r="1.5"/>
                </svg>
              </button>
            </div>
            <h3 className="text-base font-bold mt-auto">
              <span className="text-sm line-through text-gray-500">350.000đ</span><br />
              280.000đ
            </h3>
          </div>
        </div>

        {/* Mục Yêu Thích 3 */}
        <div className={`flex gap-4 px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'}`}>
          <div className="flex gap-4">
            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
              <img src="https://readymadeui.com/images/product11.webp" className="w-full h-full object-contain" alt="Bốt Nhung" />
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-bold">Bốt Nhung</h3>
                <p className="text-sm font-semibold text-gray-500 mt-2 flex items-center gap-2">Bốt nhung sang trọng cho vẻ ngoài thanh lịch</p>
              </div>
              <div className="mt-auto flex items-center gap-3">
                <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Giảm số lượng">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 124 124">
                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000" />
                  </svg>
                </button>
                <span className="font-bold text-sm leading-[18px]">1</span>
                <button type="button" className={`flex items-center justify-center w-5 h-5 outline-none rounded-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} aria-label="Tăng số lượng">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-current" viewBox="0 0 42 42">
                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-col">
            <div className="flex items-start gap-4 justify-end">
              <button type="button" aria-label="Thêm vào danh sách yêu thích">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-red-500" viewBox="0 0 64 64">
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
                </svg>
              </button>
              <button type="button" aria-label="Xóa mục">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 cursor-pointer fill-current" viewBox="0 0 24 24">
                  <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"/>
                  <circle cx="10.5" cy="19.5" r="1.5"/>
                  <circle cx="17.5" cy="19.5" r="1.5"/>
                </svg>
              </button>
            </div>
            <h3 className="text-base font-bold mt-auto">
              <span className="text-sm line-through text-gray-500">420.000đ</span><br />
              350.000đ
            </h3>
          </div>
        </div>
        </div>
      </div>

  )
}

export default Wishlist
