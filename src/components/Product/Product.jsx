import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='card'>
        <div className='card-img'>
          <img src={product.image} alt={product.name} className='product-img' />
        </div>
        <div className='card-title'>{product.name}</div>
        <div className='card-subtitle'>{product.description}</div>
        <hr className='card-divider' />
        <div className='card-footer'>
          <div className='card-price'>
            <span>{product.price.toLocaleString()} VNĐ</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`} className='card-btn'>Chi tiết</Link>
      </div>
    </div>
  );
};

export default Product;
