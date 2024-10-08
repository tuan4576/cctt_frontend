import React from 'react'

function Contact() {
  return (
    <>
    <div className="container mx-auto px-4 py-16 pt-36">
      <h1 className="text-4xl font-bold mb-8 text-center">Liên Hệ Với Chúng Tôi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Thông Tin Liên Hệ</h2>
          <p className="mb-4">
            Chúng tôi rất mong được nghe từ bạn! Cho dù bạn có câu hỏi về sản phẩm của chúng tôi, cần trợ giúp với đơn hàng, hoặc chỉ muốn chào hỏi, chúng tôi luôn sẵn sàng hỗ trợ bạn.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Địa Chỉ</h3>
            <p>123 Đường Điện Thoại, Quận Công Nghệ, TP. Hồ Chí Minh</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Điện Thoại</h3>
            <p>(028) 1234-5678</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p>info@dienthoaishop.com</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gửi Tin Nhắn Cho Chúng Tôi</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Họ Tên</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Tin Nhắn</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-md" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Tìm Cửa Hàng</h2>
        <div className="info-right h-96">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.537279495234!2d106.6678195!3d10.7701621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edde1d7d09f%3A0xc7ac8e4f254ef3be!2s766%2F3D%20%C4%90.%20S%C6%B0%20V%E1%BA%A1n%20H%E1%BA%A1nh%2C%20Ph%C6%B0%E1%BB%9Dng%2012%2C%20Qu%E1%BA%ADn%2010%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1625631007932!5m2!1sen!2sus"
            title="Vị Trí Cửa Hàng"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact