import React from 'react'
import { useTheme } from '../../ThemeContext'

function Blog() {
  const { theme } = useTheme();

  return (
    <>
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} font-sans p-4 pt-20`}>
      <div className="max-w-5xl max-lg:max-w-3xl max-md:max-w-sm mx-auto mt-20">
        <div>
          <h2 className={`text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} inline-block`}>BÀI VIẾT MỚI NHẤT</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className={`flex max-lg:flex-col ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300`}>
            <div className="h-64 lg:w-full">
              <img src="https://example.com/iphone-14-pro.jpg" alt="iPhone 14 Pro" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Đánh giá chi tiết iPhone 14 Pro</h3>
              <span className={`text-sm block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} mt-2`}>10 THÁNG 2, 2023 | BỞI NGUYỄN VĂN A</span>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} mt-4`}>Khám phá những tính năng mới nhất và hiệu năng vượt trội của iPhone 14 Pro trong bài đánh giá chi tiết của chúng tôi.</p>
              <a href="#st;" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Đọc Thêm</a>
            </div>
          </div>
          <div className={`flex max-lg:flex-col ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300`}>
            <div className="h-64 lg:w-full">
              <img src="https://example.com/samsung-galaxy-s23.jpg" alt="Samsung Galaxy S23" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>So sánh Samsung Galaxy S23 và iPhone 14</h3>
              <span className={`text-sm block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} mt-2`}>7 THÁNG 6, 2023 | BỞI TRẦN THỊ B</span>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} mt-4`}>Phân tích chi tiết về hiệu năng, camera và thiết kế giữa hai flagship hàng đầu từ Samsung và Apple.</p>
              <a href="#st;" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Đọc Thêm</a>
            </div>
          </div>
          <div className={`flex max-lg:flex-col ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300`}>
            <div className="h-64 lg:w-full">
              <img src="https://example.com/xiaomi-13.jpg" alt="Xiaomi 13" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Xiaomi 13: Đột phá công nghệ mới</h3>
              <span className={`text-sm block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} mt-2`}>5 THÁNG 10, 2023 | BỞI LÊ VĂN C</span>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} mt-4`}>Khám phá những tính năng độc đáo và công nghệ tiên tiến trên Xiaomi 13, mẫu flagship mới nhất của hãng.</p>
              <a href="#st;" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Đọc Thêm</a>
            </div>
          </div>
          <div className={`flex max-lg:flex-col ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-[1.03] transition-all duration-300`}>
            <div className="h-64 lg:w-full">
              <img src="https://example.com/oppo-find-x5-pro.jpg" alt="OPPO Find X5 Pro" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>OPPO Find X5 Pro: Đỉnh cao nhiếp ảnh di động</h3>
              <span className={`text-sm block ${theme === 'dark' ? 'text-gray-400' : 'text-gray-400'} mt-2`}>10 THÁNG 12, 2023 | BỞI PHẠM THỊ D</span>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} mt-4`}>Tìm hiểu về khả năng chụp ảnh đỉnh cao và những tính năng camera độc đáo trên OPPO Find X5 Pro.</p>
              <a href="#st;" className="mt-4 inline-block text-blue-600 font-semibold text-sm hover:underline">Đọc Thêm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blog
