import aboutsvg from '../assets/Aboutpage.svg';

const About = () => {
  return (
    <div className='w-full md:mt-20 mt-4'>
      {/* Image Section */}
      <img src={aboutsvg} alt="About DoctorAI" className='w-full object-cover m-0 p-0' />

      <div className='bg-customBlue'>
        {/* About Us Section */}
        <section className='text-center'>
          <div className='w-full max-w-4xl mx-auto px-4'>
            <h1 className='text-white text-5xl md:text-6xl font-extrabold mb-4'>
              DoctorAI
            </h1>
            <p className='text-white text-2xl md:text-4xl font-semibold leading-relaxed'>
              Connect with top doctors and get
              <span className='text-yellow-300'> personalized health insights </span>
              effortlessly.
            </p>
          </div>
        </section>

        {/* Why DoctorAI Section */}
        <section className='w-[90%] md:w-[70%] lg:w-[60%] mx-auto bg-white mt-12 p-8 md:p-12 lg:p-16 rounded-lg shadow-2xl'>
          <h3 className='text-zinc-900 font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-8'>
            Why DoctorAI?
          </h3>

          <div className='space-y-6 md:space-y-8'>
            {/* 24/7 Access */}
            <div className='flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
              <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#4A90E2" strokeWidth="5" fill="none" />
                <text x="50%" y="50%" textAnchor="middle" fill="#4A90E2" fontSize="24" fontFamily="Arial" dy=".3em">24/7</text>
                <line x1="15" y1="15" x2="30" y2="30" stroke="#4A90E2" strokeWidth="2" />
                <line x1="15" y1="85" x2="30" y2="70" stroke="#4A90E2" strokeWidth="2" />
                <line x1="85" y1="15" x2="70" y2="30" stroke="#4A90E2" strokeWidth="2" />
                <line x1="85" y1="85" x2="70" y2="70" stroke="#4A90E2" strokeWidth="2" />
              </svg>
              <p className='text-zinc-900 text-lg md:text-xl font-medium'>
                <strong>24/7 Access:</strong> Consult with top experts anytime, anywhere.
              </p>
            </div>

            {/* Personalized Care */}
            <div className='flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
              <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 70 L20 40 C10 30, 30 10, 50 30 C70 10, 90 30, 80 40 Z" fill="#FF6F61" />
                <path d="M30 60 C25 65, 45 75, 55 65 L65 75 C75 65, 55 55, 45 65 Z" fill="#4A90E2" />
              </svg>
              <p className='text-zinc-900 text-lg md:text-xl font-medium'>
                <strong>Personalized Care:</strong> Tailored health recommendations just for you.
              </p>
            </div>

            {/* Seamless Experience */}
            <div className='flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
              <svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#4A90E2" strokeWidth="8" fill="none" strokeDasharray="200" strokeDashoffset="0" />
                <path d="M50 10 L60 20 L50 30" fill="none" stroke="#4A90E2" strokeWidth="4" />
                <line x1="50" y1="30" x2="50" y2="10" stroke="#4A90E2" strokeWidth="4" />
              </svg>
              <p className='text-zinc-900 text-lg md:text-xl font-medium'>
                <strong>Seamless Experience:</strong> Easy, intuitive, and efficient.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
