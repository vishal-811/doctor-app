import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 max-w-[85%] mx-auto rounded-xl m-6">
      <div className="flex flex-col md:flex-row justify-between items-center px-12">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-right">
          <p className="text-lg">© 2024 DoctorAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
