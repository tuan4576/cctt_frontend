import React from 'react'

function About() {
  return (
    <>
    <div className="container mx-auto px-4 py-16 pt-24">
      <h1 className="text-4xl font-bold mb-8 text-center">Về Chúng Tôi</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img src="https://via.placeholder.com/600x400" alt="Về Chúng Tôi" className="rounded-lg shadow-lg" />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Câu Chuyện Của Chúng Tôi</h2>
          <p className="mb-4">
            Được thành lập vào năm 2023, niềm đam mê với công nghệ di động đã dẫn chúng tôi đến việc tạo ra một trải nghiệm mua sắm điện thoại trực tuyến độc đáo. Chúng tôi tin rằng mọi người đều xứng đáng sở hữu những chiếc điện thoại thông minh hiện đại và tiện ích.
          </p>
          <p className="mb-4">
            Bộ sưu tập được chọn lọc kỹ càng của chúng tôi bao gồm các mẫu điện thoại mới nhất và những dòng máy kinh điển, đảm bảo bạn sẽ tìm thấy chiếc điện thoại hoàn hảo cho mọi nhu cầu.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Sứ Mệnh Của Chúng Tôi</h2>
          <p className="mb-4">
            Chúng tôi cam kết cung cấp những chiếc điện thoại chất lượng cao, dịch vụ khách hàng xuất sắc và trải nghiệm mua sắm mượt mà. Mục tiêu của chúng tôi là giúp bạn thể hiện phong cách cá nhân thông qua công nghệ di động.
          </p>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Tại Sao Chọn Chúng Tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Đảm Bảo Chất Lượng</h3>
            <p>Chúng tôi chỉ cung cấp điện thoại chính hãng, chất lượng cao từ các thương hiệu uy tín.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Giao Hàng Nhanh Chóng</h3>
            <p>Tận hưởng các tùy chọn vận chuyển nhanh chóng và đáng tin cậy để nhận điện thoại của bạn sớm nhất có thể.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💯</div>
            <h3 className="text-xl font-semibold mb-2">Hài Lòng Khách Hàng</h3>
            <p>Đội ngũ hỗ trợ tận tâm của chúng tôi luôn sẵn sàng đảm bảo sự hài lòng hoàn toàn của bạn.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About