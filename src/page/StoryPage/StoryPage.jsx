import { useEffect } from 'react';
import './StoryPage.css';

const StoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='story-page-container'>
      <div className='story-content'>
        <h1 className='page-title'>Hành Trình Của KATO</h1>
        <p className='story-intro'>
          Từ một ý tưởng nhỏ trong một góc xưởng cũ, KATO đã vươn mình trở
          thành một thương hiệu thời trang vintage được yêu mến. Đây là câu chuyện
          về niềm đam mê, sự tỉ mỉ và hành trình đi tìm vẻ đẹp vượt thời gian.
        </p>

        <div className='story-timeline'>
          <div className='timeline-item'>
            <div className='timeline-year'>2018</div>
            <div className='timeline-content'>
              <h3>Khởi đầu khiêm tốn</h3>
              <p>
                KATO được khai sinh từ một xưởng thủ công nhỏ, nơi những người
                thợ lành nghề chia sẻ chung một tình yêu với đồ da và vẻ đẹp cổ
                điển. Sản phẩm đầu tiên là những đôi giày da được làm hoàn toàn
                thủ công, mang trong mình tâm huyết của người sáng lập.
              </p>
            </div>
          </div>

          <div className='timeline-item reverse'>
            <div className='timeline-year'>2020</div>
            <div className='timeline-content'>
              <h3>Xây dựng cộng đồng</h3>
              <p>
                Vượt qua những khó khăn ban đầu, KATO dần được biết đến qua
                những lời truyền miệng. Chúng tôi mở cửa hàng đầu tiên, không
                chỉ là nơi bán hàng mà còn là không gian để những người cùng sở
                thích gặp gỡ, chia sẻ và lan tỏa niềm đam mê vintage.
              </p>
            </div>
          </div>

          <div className='timeline-item'>
            <div className='timeline-year'>2023</div>
            <div className='timeline-content'>
              <h3>Mở rộng dòng sản phẩm</h3>
              <p>
                Từ thành công của giày da, KATO mạnh dạn mở rộng sang các dòng
                sản phẩm may mặc như áo sơ mi linen, quần denim và các phụ kiện
                khác. Tất cả đều tuân thủ triết lý cốt lõi: chất liệu tự nhiên,
                thiết kế bền vững và sự thoải mái cho người mặc.
              </p>
            </div>
          </div>

          <div className='timeline-item reverse'>
            <div className='timeline-year'>Hiện tại</div>
            <div className='timeline-content'>
              <h3>Hướng tới tương lai</h3>
              <p>
                KATO tiếp tục hành trình của mình với sứ mệnh gìn giữ những giá
                trị cũ và kiến tạo những phong cách mới. Chúng tôi cam kết không
                ngừng đổi mới, lắng nghe khách hàng và mang đến những sản phẩm
                chất lượng, bền vững, giàu cá tính.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;