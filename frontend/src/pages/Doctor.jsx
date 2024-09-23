import { useEffect, useState } from "react";
import Dashboard from "../components/ui/Dashboard";
import Profile from "./Profile";

const Doctor = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(true);
  const [flynav, setFlyNav] = useState(false);
     
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth; // Get the current window width
      setFlyNav(width < 768); // Update flynav based on width
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
    
    console.log(flynav);
  return (
    <div className="flex w-full flex-row select-none">
      {/* Sidebar */}
      {!flynav ? <aside
        className={`h-screen sticky top-0 overflow-hidden ${
          isOpen ? "w-64" : "w-24"
        } bg-gradient-to-b from-custom-blue to-blue-700 shadow-xl flex flex-col pt-6 relative 
        transform duration-300 overflow-hidden`}
      >
        <div className="p-5 flex justify-between items-center border-b border-blue-400">
          {isOpen && <h1 className="text-3xl font-bold text-white">Doctor AI</h1>}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex flex-col px-2 space-y-8 border-b border-blue-400 py-6">
          {/* Dashboard */}
          <a
            onClick={() => handleTabClick("dashboard")}
           className={`flex items-center px-4 py-3 mb-3 rounded-lg transition-all text-white ${
              selectedTab === "dashboard" ? "bg-blue-800" : "hover:bg-blue-500"
            }`}
          >
            <span className="inline-block w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </span>
            {isOpen && <span className="ml-3 font-medium">Dashboard</span>}
          </a>

          {/* Patients List */}
          <a
            onClick={() => handleTabClick("patients")}
            className={`flex items-center px-4 py-3 mb-3 rounded-lg transition-all text-white ${
              selectedTab === "patients" ? "bg-blue-800" : "hover:bg-blue-500"
            }`}
            href="#"
          >
            <span className="inline-block w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            {isOpen && <span className="ml-3 font-medium">Patients</span>}
          </a>
        </div>

        <div className="flex flex-col px-2 space-y-8 border-b border-blue-400 py-6">
          {/* Profile */}
          <a
            onClick={() => handleTabClick("profile")}
            className={`flex items-center space-x-4 p-3 transition duration-300 ease-in-out rounded-lg text-white cursor-pointer ${
              selectedTab === "profile" ? "bg-blue-800" : "hover:bg-blue-500"
            }`}
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="text-slate-100"
              height={20}
              width={20}
            >
              <path
                fill="currentColor"
                d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
              />
            </svg>
            {isOpen && <h2 className="text-gray-100 font-medium">Profile</h2>}
          </a>

          {/* Settings */}
          <a
            onClick={() => handleTabClick("settings")}
            className={`flex items-center space-x-4 p-3 transition duration-300 ease-in-out rounded-lg cursor-pointer ${
              selectedTab === "settings" ? "bg-blue-800" : "hover:bg-blue-500"
            }`}
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="text-slate-100"
              height={20}
              width={20}
            >
              <path
                fill="currentColor"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4l-55.7 17.7c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.3-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 276.9 64 268.4 64 259.8s.6-17.1 1.7-25.4L22.4 195c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.3 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
            {isOpen && <h2 className="text-gray-100 font-medium ">Settings</h2>}
          </a>

          {/* Help and support */}
          <a
            onClick={() => handleTabClick("help")}
            className={`flex items-center space-x-4 p-3 transition duration-300 ease-in-out rounded-lg cursor-pointer ${
              selectedTab === "help" ? "bg-blue-800" : "hover:bg-blue-500"
            }`}
            href="#"
          >
            <svg 
              className="text-slate-100" 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
               stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
           >
           <circle cx="12" cy="12" r="10"></circle>
           <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
           <path d="M12 17h.01"></path>
         </svg>

            {isOpen && <h2 className="text-gray-100 font-medium ">Help & Support</h2>}
          </a>
        </div>
         
         <div className="absolute flex px-2 bottom-3 w-full">
         <button class="flex items-center mt-4 p-2 w-full rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4">
          </path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
           {isOpen && <span class="ml-3 font-medium">Logout</span>}
           </button>
         </div>
      </aside>:<FlyoutNavbar isOpen={isOpen} handleTabClick={handleTabClick} selectedTab={selectedTab} />
    }

      {/* Main Content */}
      <div className="flex-1">
        {selectedTab === "dashboard" && (
          <div>
              <Dashboard/>
          </div>
        )}
        {selectedTab === "patients" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Patients</h2>
            <p>Manage your patients here.</p>
          </div>
        )}
        {selectedTab === "profile" && (
          <div>
               <Profile/>
          </div>
        )}
        {selectedTab === "settings" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Settings</h2>
            <p>Update your settings here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctor;



//  When we have a small size display we can show this flying navbar.
const FlyoutNavbar = ({ handleTabClick, selectedTab }) => {
  return (
    <div className="fixed bottom-0 w-full z-30 bg-blue-400  shadow-lg">
      <div className="flex flex-row p-2">
        {/* Dashboard */}
        <a
          onClick={() => handleTabClick("dashboard")}
          className={`flex items-center justify-center p-3 transition-all text-white rounded-full ${
            selectedTab === "dashboard" ? "bg-blue-800" : "hover:bg-blue-500"
          }`}
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </a>

        {/* Patients List */}
        <a
          onClick={() => handleTabClick("patients")}
          className={`flex items-center justify-center p-3 transition-all text-white rounded-full ${
            selectedTab === "patients" ? "bg-blue-800" : "hover:bg-blue-500"
          }`}
          href="#"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-users"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </a>

        {/* Logout */}
        <div className="right-2 absolute">
          <button className="flex items-center justify-center p-3 w-full rounded-full bg-red-500 hover:bg-red-600 transition-colors text-white shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
