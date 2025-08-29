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
          <img src="" alt="" >
            
          </img>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;