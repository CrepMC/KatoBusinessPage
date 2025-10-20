import './App.css';
import {
  HomePage,
  ProductsPage,
  ContactPage,
  AboutPage,
  ProductPage,
  NotFoundPage,
  FAQPage,
  ShippingPage,
  StoryPage,
  MissionPage,
  ValuesPage,
  ProcessPage,
} from './page';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Layout className='vintage'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        {/* Các trang con của Giới thiệu */}
        <Route path='/about/story' element={<StoryPage />} />
        <Route path='/about/mission' element={<MissionPage />} />
        <Route path='/about/values' element={<ValuesPage />} />
        <Route path='/about/process' element={<ProcessPage />} />
        <Route path='/faq' element={<FAQPage />} />
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
