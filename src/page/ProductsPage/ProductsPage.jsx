import './ProductsPage.css';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/Product/Product';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('/ProductData.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setError('Không thể tải danh sách sản phẩm.');
        setLoading(false);
      });
  }, []);

  return (
    <div className='ProductsPage'>
      <h1 className='page-title'>Tất cả sản phẩm</h1>
      {loading && <div className='loading-message'>Đang tải sản phẩm...</div>}
      {error && <div className='error-message'>{error}</div>}
      {!loading && !error && (
        <div className='product-grid'>
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
