import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className='main-content'>
        <div className='about'>
          <h3>About Us</h3>
          <p>
            KATO is a fashion brand with a vintage-retro style, specializing in
            genuine leather shoes and apparel.
          </p>
        </div>
        <div className='products'>
          <h3>Products</h3>
          <ul>
            <li>
              <Link to='/products'>All Products</Link>
            </li>
            <li>
              <Link to='/products/shoes'>Shoes</Link>
            </li>
            <li>
              <Link to='/products/apparel'>Apparel</Link>
            </li>
            <li>
              <Link to='/products/accessories'>Accessories</Link>
            </li>
          </ul>
        </div>
        <div className='help'>
          <h3>Help</h3>
          <ul>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/shipping'>Shipping & Returns</Link>
            </li>
          </ul>
        </div>
        <div className='contact'>
          <h3>Contact</h3>
          <p>123 Vintage St, Retro City</p>
          <p>Email: contact@kato.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} KATO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;