import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Shop Online</h1>
      <div className='search-input'>
        <input type='text' placeholder='Search...' />
        <button className='search-button'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <nav className='header-navigate'>
        <Link to='/'>Trang chủ</Link>
        <Link to='/products'>Sản phẩm</Link>
        <Link to='/about'>Giới thiệu</Link>
        <Link to='/contact'>Liên hệ</Link>
      </nav>
    </header>
  );
};

export default Header;
