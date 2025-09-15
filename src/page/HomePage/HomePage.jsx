import './HomePage.css';
import KATOLogo from '../../assests/logo.png';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import { Link } from 'react-router-dom';
import AboutCard from '../../components/AboutCard/AboutCard';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <main>
        <div className='banner'>
          <div className='img-card'>
            <img src={KATOLogo} alt='KATOLogo' />
          </div>
          <div className='banner-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed
              laborum impedit dignissimos, doloremque porro illum earum veniam
              soluta delectus voluptate inventore molestias atque perspiciatis
              eum a reiciendis debitis? Error.
            </p>
          </div>
        </div>
        <AboutCard
          reverse={true}
          title="Về chúng tôi"
          text="KATO là thương hiệu thời trang mang đậm phong cách vintage – retro, chuyên về giày da thật và trang phục từ chất liệu tự nhiên như da bò nguyên tấm, da dê, linen, cotton, denim… Với sự kết hợp giữa thiết kế tinh tế, thủ công tỉ mỉ và sự thoải mái trong từng sản phẩm, KATO mang đến cho khách hàng trải nghiệm thời trang bền vững, khác biệt và giàu cá tính"
          imageUrl="https://placehold.co/300x300?text=Về chúng tôi"
          altText="Về chúng tôi"
          linkTo="/about"
          linkText="Xem thêm..."
        />
        <div className='product-cards'>
          <h1 className='products-title'>Sản phẩm nổi bật</h1>
          <ProductSlider />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
