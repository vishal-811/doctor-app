import { Phone, GraduationCap, Stethoscope, Award, Clock, Video, Users, Edit } from "lucide-react"
import Badge from "../components/Badge";
import { useNavigate } from "react-router-dom";
const Profile=()=>{
       
      const navigate = useNavigate();
    // Write a useffect hook get a data from a backend.
    const doctorData = {
        availability: {
    Monday: ["Morning", "Afternoon"],
    Tuesday: ["Afternoon", "Evening"],
    Wednesday: ["Morning"],
    Thursday: ["Afternoon", "Evening"],
    Friday: ["Morning", "Afternoon"],
    Saturday: ["Morning"],
    Sunday: []
  },
  consultationType: ["in-person", "online"]
}
    return(
        <div className="w-full bg-slate-100 min-h-screen pb-6 relative">
                  <div className="flex flex-col bg-gradient-to-r bg-blue-800 to-blue-600 p-12">
                       <h2 className="text-slate-100  text-2xl font-semibold">Doctor's Name</h2> 
                       <h2 className="text-slate-200 text-lg tracking-tight">MD,MBBS</h2>
                  </div>
                    {/* Edit Profile button */}
                    <button 
                     onClick={() => navigate('/editprofile')} 
                     className="flex items-center space-x-2 absolute top-12 right-12 border p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl"
                    >
                   <Edit className="w-4 h-4 text-zinc-900" />
                   <span className="text-md font-semibold text-gray-800">Edit Profile</span>
                  </button>

                     
                   <div className="grid gap-6 md:gap-9 pt-6 md:pt-8 md:ps-12 ps-0">
                        <div className="flex items-center space-x-2">
                         <Phone className="text-blue-500" />
                         <span>+91 78999999999</span>
                        </div>

                         <div>
                         <h3 className="text-lg font-semibold flex items-center mb-2">
                          <GraduationCap className="mr-2 text-blue-500" />
                             Specialties
                         </h3>
                          <div className="flex flex-wrap gap-2">
                           {/* Iterate over all the specialities and render here */}
                           <Badge text={"Cardiology"}/>
                           <Badge text={"Nephrologist"}/>
                         </div>
                         </div>

                         <div>
                           <h3 className="text-lg font-semibold flex items-center mb-2">
                            <Stethoscope className="mr-2 text-blue-500" />
                               Experience
                           </h3>
                            <p>15 years of experience in treating cardiovascular diseases and performing complex cardiac procedures.</p>
                         </div>
                          
                          <div>
                             <h3 className="text-lg font-semibold flex items-center mb-2">
                             <Award className="mr-2 text-blue-500" />
                               Rating
                             </h3>
                            <div className="flex items-center">
                               <span className="text-2xl font-bold mr-2">4</span>
                                {/* Try to learn todo changes in a svg */}
                            <div className="flex">
                              <svg  className={`w-5 h-5 ${1 < Math.floor() ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                             </div>
                           </div>
                          </div>

                           <div>
                           <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                                    {/* Iterate over all the certificates and show them in a ui */}
                                <div className="mb-2 last:mb-0 p-3 bg-gray-300 rounded-lg size-fit">
                                 <p className="font-medium">Board Certified in Cardiovascular Disease</p>
                                 <p className="text-sm text-gray-600">American Board of Internal Medicine, 2010</p>
                               </div>
                          </div>
                           
                          <div>
                            <h3 className="text-lg font-semibold flex items-center mb-2">
                              <Clock className="mr-2 text-blue-500" />
                                  Availability
                            </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(doctorData.availability).map(([day, slots]) => (
                            <div key={day} className="flex items-center">
                             <span className="font-medium w-24">{day}:</span>
                              <div className="flex flex-wrap gap-1">
                              {slots.map((slot, index) => (
                              <Badge key={index} variant="outline">{slot}</Badge>
                                ))}
                               {slots.length === 0 && <span className="text-gray-400">Not available</span>}
                           </div>
                           </div>
                                ))}
                         </div>
                         </div>

                         <div>
                          <h3 className="text-lg font-semibold flex items-center mb-2">
                           Consultation Type
                          </h3>
                          <div className="flex space-x-4">
                          {doctorData.consultationType.includes('in-person') && (
                           <div className="flex items-center">
                            <Users className="mr-2 text-blue-500" />
                             <span>In-person</span>
                            </div>
                            )}
                             {doctorData.consultationType.includes('online') && (
                             <div className="flex items-center">
                             <Video className="mr-2 text-blue-500" />
                              <span>Online</span>
                             </div>
                              )}
                          </div>
                          </div>
                  </div>
     </div>
    )
}

export default Profile;