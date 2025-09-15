import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ProductCard from '../Product/Product';
import './ProductSlider.css';

// Import CSS cho slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = ({ productsToShow }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Nếu có danh sách sản phẩm truyền vào (như sản phẩm gợi ý) thì dùng nó
    if (productsToShow) {
      setProducts(productsToShow);
      setLoading(false);
    } else {
      // Nếu không, tự fetch toàn bộ sản phẩm
      setLoading(true);
      fetch('/ProductData.json')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error('Failed to fetch products:', err))
        .finally(() => setLoading(false));
    }
  }, [productsToShow]);

  // Cấu hình cho slider
  const sliderSettings = {
    dots: true,
    infinite: products.length > 4, // Chỉ lặp lại nếu có nhiều hơn số slide hiển thị
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  if (loading) {
    return <div>Đang tải sản phẩm...</div>;
  }

  if (!products || products.length === 0) {
    return <div>Không có sản phẩm để hiển thị.</div>;
  }

  return (
    <Slider {...sliderSettings} className='product-list-slider'>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </Slider>
  );
};

export default ProductSlider;
