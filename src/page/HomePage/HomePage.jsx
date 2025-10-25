import './HomePage.css';
import KATOLogo from '../../assests/logo.png';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='HomePage vintage'>
      <main>
        <div className='banner'>
          <img src='/banner.jpg' alt="banner" />
        </div>
        <div className='about-banner vintage-card'>
          <div className='about-banner-text'>
            <h2 className='vintage-title'>Về chúng tôi</h2>
            <p className='vintage-text'>
              KATO là thương hiệu thời trang mang đậm phong cách vintage –
              retro, chuyên về giày da thật và trang phục từ chất liệu tự nhiên
              như da bò nguyên tấm, da dê, linen, cotton, denim… Với sự kết hợp
              giữa thiết kế tinh tế, thủ công tỉ mỉ và sự thoải mái trong từng
              sản phẩm, KATO mang đến cho khách hàng trải nghiệm thời trang bền
              vững, khác biệt và giàu cá tính
            </p>
            <Link to='/about' className='vintage-link'>
              Xem thêm...
            </Link>
          </div>
          <div className='img-card'>
            <img src={KATOLogo} alt='KATOLogo' />
          </div>
        </div>
        <div className='product-cards'>
          <h1 className='products-title vintage-title'>Sản phẩm nổi bật</h1>
          <ProductSlider />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
