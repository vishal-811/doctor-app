
const HeroSection=()=>{
    return(
        <div className="md:max-w-[75%] w-full mx-auto p-6 md:p-0 select-none flex space-x-12 ">
              {/* Hero Section Content */}
              <div className="md:max-w-[60%] w-full">
                    <div>  
                           {/* Heading */}
                         <p className="text-5xl  font-sans md:tracking-wide tracking-normal md:leading-snug leading-tight font-semibold text-zinc-800">
                         Connect with top doctors instantly using AI your health, just a 
                          <span className="m-2 px-4 text-blue-700 bg-blue-200 border-solid border-blue-300 rounded-lg">click away!</span>
                         </p>

                            {/* Sub Heading */}
                         <p className="pt-4 text-xl md:text-2xl tracking-normal text-zinc-600 leading-9">
                         Skip the waiting room and experience seamless healthcare with AI. 
                         Our advanced technology connects you to top doctors in just minutes,
                         offering quick, reliable, and personalized care tailored to your needs.
                         Start your journey to better health today. 
                         </p>

                             {/*Find your doctor button*/}
                             <button className="mt-8 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex
                              items-center justify-center rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl 
                               duration-500 transform hover:scale-95">
                                   Find Your Doctor
                             </button>
                    </div>
              </div>
        </div>
    )
}
export default HeroSection;