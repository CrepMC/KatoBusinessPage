import { Header, Sidebar, Footer } from '../../components/';
import { Link } from 'react-router-dom';
import './HomePage.css';
import KATOLogo from '../../assests/logo.png';
import ProductCard from '../../components/Product/Product';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/ProductData.json') // file JSON để ở public/
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
        <div className='about-card'>
          <div className='about-card-text'>
            <h1>Về chúng tôi</h1>
            <p>
              KATO là thương hiệu thời trang mang đậm phong cách vintage –
              retro, chuyên về giày da thật và trang phục từ chất liệu tự nhiên
              như da bò nguyên tấm, da dê, linen, cotton, denim… Với sự kết hợp
              giữa thiết kế tinh tế, thủ công tỉ mỉ và sự thoải mái trong từng
              sản phẩm, KATO mang đến cho khách hàng trải nghiệm thời trang bền
              vững, khác biệt và giàu cá tính
            </p>
          </div>
          <div className='about-card-img'>
            <img src='' alt='' />
          </div>
        </div>
        <div className='product-cards'>
          <h1 className='products-title'>Products</h1>
          <div className='product-list'>
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
