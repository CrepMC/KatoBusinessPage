import './App.css';
import { HomePage, ProductsPage, ContactPage, AboutPage } from './page';
import { Route, Routes } from 'react-router-dom';

const App = () => {

  // const name = 'nahn';

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
}

export default App;