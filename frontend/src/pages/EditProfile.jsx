import { useState } from "react";
import { InputLabel } from "../components/InputLabel"; // Assuming you have this component for input handling

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const EditProfile = () => {

  const [phoneNo, setPhoneNo] = useState('');
  const [degree, setDegree] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [experience, setExperience] = useState('');
  const [rating, setRating] = useState('');
  const [certifications, setCertifications] = useState([{ title: '', institution: '', year: '' }]);
  const [availability, setAvailability] = useState({});
  const [consultationType, setConsultationType] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');

  const handleAddCertification = () => {
    setCertifications([...certifications, { title: '', institution: '', year: '' }]);
  };

  const handleCertificationChange = (index, field, value) => {
    const updatedCertifications = certifications.map((cert, i) => i === index ? { ...cert, [field]: value } : cert);
    setCertifications(updatedCertifications);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleAvailabilityTimeChange = (day, field, value) => {
    setAvailability({
      ...availability,
      [day]: { ...availability[day], [field]: value }
    });
  };

  const addAvailabilityForDay = () => {
    if (selectedDay && !availability[selectedDay]) {
      setAvailability({ ...availability, [selectedDay]: { starttime: '', endtime: '' } });
      setSelectedDay('');
    }
  };

  const handleConsultationTypeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setConsultationType([...consultationType, value]);
    } else {
      setConsultationType(consultationType.filter(type => type !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  Make a backend call store all the data to the backend., after that naviagte the doctor to the Doctor.jsx page.
    console.log({ phoneNo, degree, specialties, experience, rating, certifications, availability, consultationType });
    alert('Profile updated successfully!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-700 via-blue-800 to-gray-700 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg p-8 rounded-lg border-2 border-gray-300">
        <h1 className="font-italic md:text-3xl text:xl  tracking-tight font-bold text-custom-blue mb-1">Doctor Profile</h1>
        <p className="text-md text-zinc-700 mb-6">Update your professional information</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputLabel
              labeltext="Phone Number"
              placeholdertext="Enter your phone number"
              inputtype="number"
              onChange={(e) => setPhoneNo(e.target.value)}
            />
            <InputLabel
              labeltext="Degree"
              placeholdertext="e.g., MD, MBBS"
              inputtype="text"
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>

          <InputLabel
            labeltext="Specialties"
            placeholdertext="Enter your specialties"
            inputtype="text"
            onChange={(e) => setSpecialties(e.target.value)}
          />

          <InputLabel
            labeltext="Experience"
            placeholdertext="Describe your professional experience"
            inputtype="textarea"
            onChange={(e) => setExperience(e.target.value)}
          />

          <InputLabel
            labeltext="Rating"
            placeholdertext="Your rating out of 5"
            inputtype="number"
            min="1"
            max="5"
            step="0.1"
            onChange={(e) => setRating(e.target.value)}
          />

          {/* Certifications Section */}
          <div>
            <h2 className="text-lg font-semibold">Certifications</h2>
            {certifications.map((cert, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <InputLabel
                  labeltext="Title"
                  placeholdertext="e.g., Certification in Surgery"
                  inputtype="text"
                  value={cert.title}
                  onChange={(e) => handleCertificationChange(index, 'title', e.target.value)}
                />
                <InputLabel
                  labeltext="Institution"
                  placeholdertext="e.g., Harvard University"
                  inputtype="text"
                  value={cert.institution}
                  onChange={(e) => handleCertificationChange(index, 'institution', e.target.value)}
                />
                <InputLabel
                  labeltext="Year"
                  placeholdertext="e.g., 2021"
                  inputtype="number"
                  value={cert.year}
                  onChange={(e) => handleCertificationChange(index, 'year', e.target.value)}
                />
              </div>
            ))}
            <button type="button" onClick={handleAddCertification} className="mt-2 text-blue-500">Add another certification</button>
          </div>

          {/* Availability Section */}
          <div>
            <h2 className="text-lg font-semibold">Availability</h2>
            <div className="flex space-x-4 mt-2">
              <select
                className="p-2 border border-gray-300 rounded-md"
                value={selectedDay}
                onChange={handleDayChange}
              >
                <option value="">Select a Day</option>
                {daysOfWeek.map(day => ( 
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                onClick={addAvailabilityForDay}
              >
                Add Day
              </button>
            </div>

            {Object.keys(availability).map(day => (
              <div key={day} className="mt-4">
                <h3 className="text-md font-semibold">{day}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputLabel
                    labeltext="Start Time"
                    inputtype="time"
                    value={availability[day].starttime}
                    onChange={(e) => handleAvailabilityTimeChange(day, 'starttime', e.target.value)}
                  />
                  <InputLabel
                    labeltext="End Time"
                    inputtype="time"
                    value={availability[day].endtime}
                    onChange={(e) => handleAvailabilityTimeChange(day, 'endtime', e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Consultation Type Section */}
          <div>
            <h2 className="text-lg font-semibold">Consultation Type</h2>
            <div className="flex flex-wrap space-x-4 mt-2">
              {['Online', 'In-Person'].map(type => (
                <label key={type} className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={type}
                    checked={consultationType.includes(type)}
                    onChange={handleConsultationTypeChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
