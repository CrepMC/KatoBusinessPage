import './AboutCard.css';
import { Link } from 'react-router-dom';

const AboutCard = ({
  title,
  subtitle,
  text,
  imageUrl,
  altText,
  linkTo,
  linkText,
  reverse,
}) => {
  return (
    <section className={`about-card vintage-card ${reverse ? 'reverse' : ''}`}>
      <div className='about-card-image'>
        <img src={imageUrl} alt={altText} />
      </div>
      <div className='about-card-text'>
        <h2>{title}</h2>
        {subtitle && <p className='about-subtitle'>{subtitle}</p>}
        {text && <p>{text}</p>}
        {linkTo && linkText && (
          <Link to={linkTo} className='read-more-link'>
            {linkText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default AboutCard;
