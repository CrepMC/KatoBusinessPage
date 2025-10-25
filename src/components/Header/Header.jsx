import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import KatoLogo from '../../assests/logo2.png';

const Header = () => {
  const navLinks = [
    { to: '/', text: 'Trang chủ' },
    { to: '/products', text: 'Sản phẩm' },
    { to: '/about', text: 'Giới thiệu' },
    { to: '/contact', text: 'Liên hệ' },
  ];

  return (
    <header className='main-header'>
      <div className='header-container'>
        <Link to='/'>
          <div className='header-logo'>
            <img src={KatoLogo} alt='' />
            <h1>KATOShop</h1>
          </div>
        </Link>
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
      </div>
    </header>
  );
};

export default Header;
