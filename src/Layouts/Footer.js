import React from 'react';

const Footer = () => (
  <>
  <footer className="font-sans tracking-wide bg-[#213343] py-10 px-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Sản phẩm</h4>
      <ul className="space-y-5">
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Điện thoại</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Máy tính bảng</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Phụ kiện</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Sản phẩm mới</a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Dịch vụ</h4>
      <ul className="space-y-5">
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Bảo hành</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Sửa chữa</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Đổi trả</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Hỗ trợ kỹ thuật</a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Thông tin</h4>
      <ul className="space-y-5">
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Tin tức công nghệ</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Hướng dẫn mua hàng</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Chính sách bảo mật</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Điều khoản sử dụng</a>
        </li>
      </ul>
    </div>
    <div>
      <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Liên hệ</h4>
      <ul className="space-y-5">
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Hotline: 1900 1234</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Email: support@phonestore.com</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM</a>
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 inline-block mr-3 bg-[#FFA726] rounded-full"></span>
          <a href="#st" className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all no-underline">Giờ làm việc: 8:00 - 22:00</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
  <p className="text-gray-400 text-base text-center">Copyright © {new Date().getFullYear()} COZA Store.</p>
  </div>
</footer>



  </>
);

export default Footer;
