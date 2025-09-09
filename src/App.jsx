import './App.css';
import {
  HomePage,
  ProductsPage,
  ContactPage,
  AboutPage,
  ProductPage,
} from './page';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  // const name = 'nahn';
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
