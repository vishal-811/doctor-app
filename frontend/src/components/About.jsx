import aboutsvg from '../assets/Aboutpage.svg';

const About = () => {
  return (
    <div className='w-full md:mt-20 mt-4'>
      {/* Image Section */}
      <img src={aboutsvg} alt="About DoctorAI" className='w-full object-cover m-0 p-0' />

      <div className='bg-custom-blue'>
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
        <section className='w-[90%] md:w-[85%] mx-auto bg-white mt-12 p-8 md:p-12 lg:p-16 rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300'>
          <h3 className='text-zinc-900 font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-8'>
            Why DoctorAI?
          </h3>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-6 md:p-12   p-6 text-wrap'>
            {/* 24/7 Access */}
            <div className='flex flex-col items-center text-center'>
              <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#4A90E2" strokeWidth="5" fill="none" />
                <text x="50%" y="50%" textAnchor="middle" fill="#4A90E2" fontSize="24" fontFamily="Arial" dy=".3em">24/7</text>
              </svg>
              <p className='text-zinc-900 text-lg md:text-xl font-medium mt-4'>
                <strong>24/7 Access:</strong> Consult with top experts anytime, anywhere.
              </p>
            </div>

            {/* Personalized Care */}
            <div className='flex flex-col items-center text-center'>
              <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 70 L20 40 C10 30, 30 10, 50 30 C70 10, 90 30, 80 40 Z" fill="#FF6F61" />
                <path d="M30 60 C25 65, 45 75, 55 65 L65 75 C75 65, 55 55, 45 65 Z" fill="#4A90E2" />
              </svg>
              <p className='text-zinc-900 text-lg md:text-xl font-medium mt-4'>
                <strong>Personalized Care:</strong> Tailored health recommendations just for you.
              </p>
            </div>

            {/* Seamless Experience */}
            <div className='flex flex-col items-center text-center'>
              <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#4A90E2" strokeWidth="8" fill="none" strokeDasharray="200" strokeDashoffset="0" />
                <path d="M50 10 L60 20 L50 30" fill="none" stroke="#4A90E2" strokeWidth="4" />
                <line x1="50" y1="30" x2="50" y2="10" stroke="#4A90E2" strokeWidth="4" />
              </svg>
              <p className='text-zinc-900 text-lg md:text-xl font-medium mt-4'>
                <strong>Seamless Experience:</strong> Easy, intuitive, and efficient.
              </p>
            </div>
          </div>
        </section>

            {/* Discover Section */}
        <div className='mt-16 max-w-[70%] mx-auto pb-6 text-pretty'>
           <h2 className='text-4xl md:text-5xl font-bold text-white text-center leading-normal md:leading-snug font-serif'>
             Discover 
            <span className='ms-4 mb-4 md:text-3xl text-2xl tracking-wide bg-white text-zinc-700 px-6 py-3 rounded-lg transform rotate-[2deg] inline-flex  shadow-2xl shadow-black'>
              DoctorAI
             </span>
            <br />
            The ultimate platform that connects you with top doctors, ensuring your well-being is always a priority.
           </h2>
        </div>
          
      </div>
    </div>
  );
};

export default About;
