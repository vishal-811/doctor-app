import { useState } from "react";
import { useRole } from "../contexts/RoleContext";
import { SignupComponent } from "../components/auth/SignupComponent";

const Signup = () => {
  const { role } = useRole();
  
  return (
    role ? (
       <div className="min-h-screen bg-gradient-to-r from-gray-700 via-blue-800 to-gray-700">
          <SignupComponent/>
       </div>
    ) : (
        <ChooseRole />
    )
  );
}
const ChooseRole = () => {
    const { setRole } = useRole();
    const [selectedRole, setSelectedRole] = useState(null);
  
    const handleContinue = () => {
      if (selectedRole) {
        setRole(selectedRole);
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center md:p-4 p-7">
        <div className="w-full max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-6 text-center">
            Please Select Your Role
          </h2>
          <p className="text-lg text-zinc-900 font-semibold mb-8 text-center max-w-2xl mx-auto">
            Select your role to personalize your DoctorAI experience. Your choice shapes how you'll interact with our platform.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Doctor Role */}
            <div 
              className={`flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transition-shadow  cursor-pointer ${
                selectedRole === 'doctor' ? 'border-2 border-blue-400' : 'border border-transparent'
              }`}
              onClick={() => setSelectedRole('doctor')}
            >
              <svg 
                viewBox="0 0 512 512" 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-20 h-20 mb-4 text-blue-600"
              >
                {/* SVG Path Data */}
                <path d="m346 121c-8.289062 0-15-6.710938-15-15v-76h-150v76c0 8.289062-6.710938 15-15 15s-15-6.710938-15-15v-91c0-8.289062 6.710938-15 15-15h180c8.289062 0 15 6.710938 15 15v91c0 8.289062-6.710938 15-15 15zm0 0" fill="#465a61"/>
                <path d="m346 121c8.289062 0 15-6.710938 15-15v-91c0-8.289062-6.710938-15-15-15h-90v30h75v76c0 8.289062 6.710938 15 15 15zm0 0" fill="#3b4a51"/>
                <path d="m391 406 30-157.5-30-157.5h-270l-30 157.5 30 157.5c0 4.199219-1.648438 7.949219-4.351562 10.648438-2.699219 2.703124-6.449219 4.351562-10.648438 4.351562l150 31 150-31c-4.199219 0-7.949219-1.648438-10.648438-4.351562-2.703124-2.699219-4.351562-6.449219-4.351562-10.648438zm0 0" fill="#e0eaf0"/>
                <path d="m406 421c-4.199219 0-7.949219-1.648438-10.648438-4.351562-2.703124-2.699219-4.351562-6.449219-4.351562-10.648438l30-157.5-30-157.5h-135v361zm0 0" fill="#b2d1d6"/>
                <path d="m121 91v330l-60 31-61-31v-285c0-24.851562 20.148438-45 45-45zm0 0" fill="#ff3f5c"/>
                <path d="m256 361c-57.890625 0-105-47.109375-105-105s47.109375-105 105-105 105 47.109375 105 105-47.109375 105-105 105zm0 0" fill="#ff3f5c"/>
                <path d="m361 256c0-57.890625-47.109375-105-105-105v210c57.890625 0 105-47.109375 105-105zm0 0" fill="#ff001e"/>
                <path d="m256 301c-8.289062 0-15-6.710938-15-15v-60c0-8.289062 6.710938-15 15-15s15 6.710938 15 15v60c0 8.289062-6.710938 15-15 15zm0 0" fill="#e0eaf0"/>
                <path d="m286 271h-60c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h60c8.289062 0 15 6.710938 15 15s-6.710938 15-15 15zm0 0" fill="#e0eaf0"/>
                <path d="m271 286v-60c0-8.289062-6.710938-15-15-15v90c8.289062 0 15-6.710938 15-15zm0 0" fill="#b2d1d6"/>
                <path d="m256 271h30c8.289062 0 15-6.710938 15-15s-6.710938-15-15-15h-30zm0 0" fill="#b2d1d6"/>
                <path d="m512 136v285l-61 31-60-31v-330h75c24.851562 0 46 20.148438 46 45zm0 0" fill="#ff001e"/>
                <path d="m512 421v46c0 8.398438-6.597656 15-15 15h-46v15c0 8.398438-6.597656 15-15 15h-60c-8.402344 0-15-6.601562-15-15v-15h-210v15c0 8.398438-6.597656 15-15 15h-60c-8.402344 0-15-6.601562-15-15v-15h-46c-8.402344 0-15-6.601562-15-15v-46zm0 0" fill="#596c76"/>
                <path d="m256 482h105v15c0 8.398438 6.597656 15 15 15h60c8.402344 0 15-6.601562 15-15v-15h46c8.402344 0 15-6.601562 15-15v-46h-256zm0 0" fill="#465a61"/>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">Doctor</h3>
            </div>
  
            {/* Patient Role */}
            <div 
              className={`flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-shadow  cursor-pointer ${
                selectedRole === 'patient' ? 'border-2 border-green-400' : 'border border-transparent'
              }`}
              onClick={() => setSelectedRole('patient')}
            >
              <img 
                width="100" 
                height="100" 
                src="https://img.icons8.com/bubbles/100/patient-care.png" 
                alt="Patient Care"
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Patient</h3>
            </div>
          </div>

           {/* Button */}
           <div className="text-center">
            <button
              onClick={handleContinue}
              disabled={!selectedRole}
              className="px-8 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue as {selectedRole || 'Selected Role'}
            </button>
          </div>
      </div>
     </div>
    );
  }
  

export default Signup;
 