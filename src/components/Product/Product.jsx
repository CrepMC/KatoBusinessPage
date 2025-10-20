import './Product.css';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <div className='product-card vintage-card'>
      <Link to={`/product/${product.id}`} className='card'>
        <div className='card-img'>
          <img src={product.image} alt={product.name} className='product-img' />
        </div>
        <div className='card-title'>{product.name}</div>
        <div className='card-subtitle'>{product.desc}</div>
        <hr className='card-divider' />
      </Link>
    </div>
  );
};

export default Product;
