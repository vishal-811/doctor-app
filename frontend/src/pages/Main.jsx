import HeroSection from "../components/HeroSection";
import About from '../components/About'
const Main = () => {
  return (
    <main className="md:pt-28 pt-10 z-10"> {/* Adjusted margin to padding-top */}
      <HeroSection />
      <About/>
    </main>
  );
};

export default Main;
