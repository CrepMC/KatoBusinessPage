import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import ProductSlider from '../../components/ProductSlider/ProductSlider';

const ProductPage = () => {
  const { id } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 1. Fetch data only once when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetch('/ProductData.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setAllProducts(data);
        setError(null);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setError('Không thể tải dữ liệu sản phẩm. Vui lòng thử lại sau.');
        setAllProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once

  // 2. Use useMemo to find the current product and avoid re-computation
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (allProducts.length > 0) {
      const currentProduct = allProducts.find((p) => p.id === parseInt(id));
      setProduct(currentProduct);
    }
  }, [id, allProducts]);

  // 3. Use useMemo for suggested products
  const suggestedProducts = useMemo(() => {
    if (!product || allProducts.length === 0) return [];
    // Lấy 4 sản phẩm khác làm gợi ý
    return allProducts
      .filter((p) => p.id !== product.id)
      .sort(() => 0.5 - Math.random()) // Trộn ngẫu nhiên để gợi ý đa dạng hơn
      .slice(0, 8);
  }, [product, allProducts]);

  if (loading) {
    return <div className='loading'>Đang tải...</div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  if (!product) {
    return <div className='not-found'>Không tìm thấy sản phẩm.</div>;
  }

  return (
    <div className='ProductPage'>
      <div className='product-detail-container vintage-card'>
        <div className='product-image-section'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='product-info-section'>
          <h1 className='product-name'>{product.name}</h1>
          <p className='product-description'>{product.desc}</p>
        </div>
      </div>

      <div className='suggested-products'>
        <h2>Sản phẩm khác</h2>
        <ProductSlider productsToShow={suggestedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
