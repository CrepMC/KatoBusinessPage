import './AboutPage.css';
import { Header, Sidebar, Footer } from '../../components/';

const AboutPage = () => {
  return (
    <div className='AboutPage'>
      <main>
        <div className='About-main'>
          <img src="" alt="" />
          <p>
            KATO là thương hiệu thời trang mang đậm phong cách vintage – retro,
            chuyên về giày da thật và trang phục từ chất liệu tự nhiên như da bò
            nguyên tấm, da dê, linen, cotton, denim… Với sự kết hợp giữa thiết
            kế tinh tế, thủ công tỉ mỉ và sự thoải mái trong từng sản phẩm, KATO
            mang đến cho khách hàng trải nghiệm thời trang bền vững, khác biệt
            và giàu cá tính
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;