import { useEffect } from 'react';
import './ShippingPage.css';

const ShippingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='shipping-page-container vintage-card'>
      <div className='shipping-content'>
        <h1 className='page-title'>Chính sách Vận chuyển & Đổi trả</h1>

        <section>
          <h2>1. Chính sách vận chuyển</h2>
          <p>
            KATO tự hào hợp tác với các đơn vị vận chuyển uy tín để đưa sản phẩm
            đến tay quý khách một cách nhanh chóng và an toàn nhất trên toàn quốc.
          </p>
          <ul>
            <li>
              <strong>Thời gian giao hàng dự kiến:</strong>
              <ul>
                <li>
                  <strong>Nội thành Hà Nội:</strong> 1-2 ngày làm việc.
                </li>
                <li>
                  <strong>Các tỉnh thành khác:</strong> 3-7 ngày làm việc.
                </li>
              </ul>
            </li>
            <li>
              <strong>Phí vận chuyển:</strong> Phí vận chuyển sẽ được tự động
              tính toán và hiển thị trong quá trình thanh toán dựa trên địa chỉ
              giao hàng của quý khách.
            </li>
            <li>
              <strong>Kiểm tra đơn hàng:</strong> Quý khách có thể theo dõi tình
              trạng đơn hàng thông qua mã vận đơn được chúng tôi cung cấp qua
              email.
            </li>
          </ul>
        </section>

        <section>
          <h2>2. Chính sách đổi trả</h2>
          <p>
            Chúng tôi mong muốn quý khách hoàn toàn hài lòng với sản phẩm của
            KATO. Nếu có bất kỳ vấn đề gì, quý khách có thể yêu cầu đổi trả
            trong vòng <strong>07 ngày</strong> kể từ ngày nhận hàng.
          </p>
          <h3>Điều kiện đổi trả:</h3>
          <ul>
            <li>Sản phẩm chưa qua sử dụng, còn nguyên tem, mác và bao bì.</li>
            <li>
              Sản phẩm bị lỗi do nhà sản xuất (ví dụ: lỗi chất liệu, lỗi đường
              may).
            </li>
            <li>Sản phẩm giao không đúng mẫu mã, size đã đặt.</li>
          </ul>
          <h3>Quy trình đổi trả:</h3>
          <ol>
            <li>
              <strong>Liên hệ:</strong> Quý khách vui lòng liên hệ với chúng tôi
              qua fanpage Facebook hoặc hotline để thông báo về yêu cầu đổi trả.
            </li>
            <li>
              <strong>Xác nhận:</strong> Chúng tôi sẽ xác nhận yêu cầu và hướng
              dẫn quý khách các bước tiếp theo.
            </li>
            <li>
              <strong>Gửi hàng:</strong> Quý khách vui lòng đóng gói sản phẩm
              cẩn thận và gửi về địa chỉ của KATO.
            </li>
            <li>
              <strong>Xử lý:</strong> Sau khi nhận và kiểm tra sản phẩm, chúng
              tôi sẽ tiến hành đổi sản phẩm mới hoặc hoàn tiền cho quý khách
              trong vòng 3-5 ngày làm việc.
            </li>
          </ol>
          <p className='note'>
            <strong>Lưu ý:</strong> KATO không hỗ trợ đổi trả đối với các sản
            phẩm giảm giá hoặc các trường hợp lỗi phát sinh từ phía khách hàng.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPage;