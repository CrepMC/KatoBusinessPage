import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { to: '/', text: 'Trang chủ' },
    { to: '/products', text: 'Sản phẩm' },
    { to: '/about', text: 'Giới thiệu' },
    { to: '/contact', text: 'Liên hệ' },
  ];

  return (
    <header className='main-header'>
      <h1>KATO Shop</h1>
      <div className='header-handle'>
        <div className='search-input'>
          <input type='text' placeholder='Search...' />
          <button className='search-button'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <nav className='header-navigate'>
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to}>
              {link.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
