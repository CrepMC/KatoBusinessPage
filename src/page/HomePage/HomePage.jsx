import { Header, Sidebar, Footer } from '../../components/';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Header />
      <Sidebar />
      <main>
        <div className='banner'>
          <div className='banner-title'>
            <h1>KATO Shop</h1>
          </div>
          <div className='about-card'>
            <img src='' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sed
              laborum impedit dignissimos, doloremque porro illum earum veniam
              soluta delectus voluptate inventore molestias atque perspiciatis
              eum a reiciendis debitis? Error.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
