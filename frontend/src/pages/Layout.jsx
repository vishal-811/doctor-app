import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import Main from '../pages/Main';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer/>
    </div>
  );
}

export default Layout;
