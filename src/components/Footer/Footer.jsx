import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const productLinks = [
    { to: '/products', text: 'Tất cả sản phẩm' },
    { to: '/products?category=shoes-sandal', text: 'Giày dép' },
    { to: '/products?category=apparel', text: 'Trang phục' },
  ];

  const helpLinks = [
    { to: '/faq', text: 'FAQ' },
    { to: '/contact', text: 'Liên hệ' },
    { to: '/shipping', text: 'Vận chuyển & Đổi trả' },
    { to: '/privacy-policy', text: 'Chính sách bảo mật' }
  ];

  return (
    <footer>
      <div className='main-content'>
        <div className='about'>
          <h3>Về chúng tôi</h3>
          <p>
            KATO là thương hiệu thời trang mang đậm phong cách vintage – retro,
            chuyên về giày da thật và các sản phẩm may mặc.
          </p>
          <li>
            <Link to='/about'>Xem thêm ...</Link>
          </li>
        </div>
        <div className='products'>
          <h3>Sản phẩm</h3>
          <ul>
            {productLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='help'>
          <h3>Hỗ trợ</h3>
          <ul>
            {helpLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='contact'>
          <h3>Liên hệ</h3>
          <p>
            <strong>Trụ sở:</strong> Số 164 đường Ngô Xuân Quảng, Trâu Quỳ, Gia
            Lâm, Hà Nội
          </p>
          <p>
            <strong>ĐT:</strong> <a href='tel:0979021450'>0979 021 450</a>
          </p>
          <p>
            <strong>Website:</strong>{' '}
            <a href='https://kato.net.vn' target='_blank' rel='noreferrer'>
              kato.net.vn
            </a>
          </p>
          <p>
            <strong>Fanpage:</strong>{' '}
            <a
              href='https://facebook.com/katotrauquy'
              target='_blank'
              rel='noreferrer'
            >
              KATOShop
            </a>
          </p>
        </div>
      </div>
      <hr />
      <div className='copyright'>
        <p>&copy; {new Date().getFullYear()} KATO. Đã đăng ký bản quyền.</p>
        <div className='license'>
          <p>© 2025 Tạo bởi</p>
          <a
            href='https://github.com/CrepMC'
            target='_blank'
            style={{
              color: 'inherit',
              textDecoration: 'none',
              marginLeft: '4px',
            }}
          >
            CrepMC
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
