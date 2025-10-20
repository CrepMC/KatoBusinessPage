import { Footer, Sidebar, Header } from "../components";
import './Layout.css'

const Layout = ({children}) => {
  return (
    <div className='wrapper vintage'>
      <Header />
      <div className='main-area'>
        <Sidebar />
        <main className='content'>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;