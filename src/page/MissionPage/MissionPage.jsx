import { useEffect } from 'react';
import './MissionPage.css';

const MissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='mission-page-container'>
      <div className='mission-content'>
        <h1 className='page-title'>Sứ Mệnh & Tầm Nhìn</h1>

        <div className='mission-card'>
          <div className='mission-icon'>
            <i className='fa-solid fa-rocket'></i>
          </div>
          <div className='mission-text'>
            <h2>Sứ Mệnh Của Chúng Tôi</h2>
            <p>
              Sứ mệnh của KATO là mang đến những sản phẩm không chỉ đẹp về hình
              thức mà còn bền vững với thời gian. Chúng tôi mong muốn trở thành
              người bạn đồng hành đáng tin cậy trong hành trình khẳng định phong
              cách của mỗi khách hàng, thông qua những sản phẩm được tạo ra từ
              sự tận tâm, trung thực và có trách nhiệm.
            </p>
          </div>
        </div>

        <div className='vision-card'>
          <div className='vision-text'>
            <h2>Tầm Nhìn Đến 2030</h2>
            <p>
              KATO đặt mục tiêu trở thành thương hiệu thời trang vintage hàng
              đầu tại Việt Nam, là lựa chọn ưu tiên cho những ai yêu thích phong
              cách cổ điển, sự bền bỉ và những giá trị thật. Chúng tôi sẽ không
              ngừng mở rộng danh mục sản phẩm, nâng cao trải nghiệm khách hàng
              và xây dựng một cộng đồng nơi mọi người có thể tự do thể hiện cá
              tính.
            </p>
          </div>
          <div className='vision-icon'>
            <i className='fa-solid fa-bullseye'></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;