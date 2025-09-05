import './Product.css';

const Product = ({ product }) => {
  return (
    <div class='product-card'>
      <div class='card'>
        <div class='card-img'>
          <img src='images/sneaker.jpg' alt='Sneaker' class='product-img' />
        </div>
        <div class='card-title'>{product.name}</div>
        <div class='card-subtitle'>
          Product description. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit.
        </div>
        <hr class='card-divider' />
        <div class='card-footer'>
          <div class='card-price'>
            <span>{product.price.toLocaleString()} VNĐ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;