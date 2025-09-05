import './HomePage.css';
import KATOLogo from '../../assests/logo.png';
import ProductCard from '../../components/Product/Product';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

// Import CSS cho slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/ProductData.json') // file JSON để ở public/
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Cấu hình cho slider
  const sliderSettings = {
    dots: true, // Hiển thị dấu chấm điều hướng
    infinite: true, // Vòng lặp vô tận
    speed: 500, // Tốc độ chuyển slide (ms)
    slidesToShow: 4, // Số sản phẩm hiển thị trên màn hình lớn
    slidesToScroll: 1, // Số sản phẩm trượt mỗi lần
    autoplay: true, // Tự động trượt
    autoplaySpeed: 3000, // Thời gian giữa các lần trượt
    responsive: [
      {
        breakpoint: 1024, // Màn hình tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Màn hình mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

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
          <h1 className='products-title'>Sản phẩm nổi bật</h1>
          <Slider {...sliderSettings} className='product-list'>
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </Slider>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
