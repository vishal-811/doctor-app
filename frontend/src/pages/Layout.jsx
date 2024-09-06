import { Footer } from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
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
