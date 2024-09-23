import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
   
     const navigate = useNavigate();
    useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) { // Check for larger screens (md and up)
        setScrolled(window.scrollY > 0);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`text-black w-full md:mx-auto border-2 bg-white md:rounded-lg z-50 shadow-lg transition-all duration-300 ease-in-out ${
        scrolled ? 'sticky top-0 max-w-full translate-y-0 h-18 md:rounded-none ps-12 pe-12' : 
        'md:max-w-[75%] w-full sticky top-0 md:translate-y-4 md:h-16'
      }`}
    >
      <div className="flex justify-between items-center p-4 md:p-2">
        <div className="flex items-center">
          <h2 className="text-2xl tracking-wide font-bold text-blue-600">DoctorAI</h2>
        </div>

        {/* Right part - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-md font-semibold text-zinc-900">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">AI Tools</p>
          </div>
          
          {/* Auth buttons */}
          <div className="flex space-x-4">
            <button onClick={async()=>{
                navigate('/signin')
            }} className="border-2 border-blue-500 px-4 py-2 rounded-xl text-blue-500 hover:bg-blue-100 transition-colors duration-300">
              Log in
            </button>
            <button onClick={async()=>{
               navigate('/signup')
            }} className="bg-blue-600 px-4 py-2 rounded-xl text-white">
              Sign up for free
            </button>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white w-full text-center z-50">
          <div className="flex flex-col space-y-4 py-4 text-md font-semibold text-zinc-900">
            <p className="cursor-pointer">Home</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">AI Tools</p>
            <button onClick={async()=>{
               navigate('/signin')
            }} className="border-2 border-blue-500 px-6 py-2 rounded-xl text-blue-500 hover:bg-blue-100 transition-colors duration-300">
              Log in
            </button>
            <button onClick={async()=>{
                navigate('/signup')
            }} className="bg-blue-600 px-4 py-2 rounded-xl text-white">
              Sign up for free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
