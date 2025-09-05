import './Product.css';

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
      </div>
    </div>
  );
};

export default Product;
