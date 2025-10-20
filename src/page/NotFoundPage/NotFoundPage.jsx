import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='not-found-container vintage-card'>
      <div className='not-found-content'>
        <h1 className='error-code'>404</h1>
        <p className='error-message'>Oops! Page Not Found.</p>
        <p className='error-description'>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to='/' className='home-link'>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
