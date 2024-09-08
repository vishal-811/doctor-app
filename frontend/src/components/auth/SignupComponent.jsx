import { InputLabel } from '../InputLabel'
import { Button } from '../Button'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Select from 'react-select'
import { useRole } from '../../contexts/RoleContext'

export const SignupComponent = () => {
   const { role } = useRole();
  const specialties = [
    { value: 'neurologist', label: 'Neurologist' },
    { value: 'nephrologist', label: 'Nephrologist' },
    { value: 'cardiologist', label: 'Cardiologist' },
    { value: 'dermatologist', label: 'Dermatologist' },
    { value: 'pediatrician', label: 'Pediatrician' },
    { value: 'psychiatrist', label: 'Psychiatrist' },
    { value: 'rheumatologist', label: 'Rheumatologist' },
    { value: 'other', label: 'Other' },  // "Other" option
  ]

  const [signPostParams, setSignPostParams] = useState({
    username: "",
    email: "",
    password: "",
    specialty: null,  // Stores the selected specialty or "other"
    otherSpecialty: "",  // Stores the user-inputted specialty if "Other" is selected
  })
  const [showOtherInput, setShowOtherInput] = useState(false)
  const [errortext, setErrorText] = useState('')
  const [specialtyError, setSpecialtyError] = useState('') // Error state for specialty
  const navigate = useNavigate()

  return (
    <div className="pt-10 ps-3 pe-3 md:pt-12 pb-6">
      <div className="flex flex-col pb-7 max-w-md mx-auto border border-gray-200 shadow-2xl rounded-2xl p-4 bg-white">
        <div className="flex flex-col ps-2 pe-2">
          <h2 className="font-italic text-xl tracking-tight font-bold text-custom-blue mb-4">DoctorAI</h2>
          <div>
            <h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Create your account</h2>
            <p className="text-zinc-500 tracking-wider">to continue to DoctorAI</p>
          </div>
          <InputLabel labeltext={"Full Name"} placeholdertext={"Enter your Full Name"} inputtype={"text"} Errortext={errortext === 'Fullname' ? "Fullname" : undefined}
            errorColor={errortext === 'Fullname' ? true : false}
            onChange={(e) => {
              setErrorText('')
              setSignPostParams({
                ...signPostParams,
                username: e.target.value
              })
            }}
          />
          <InputLabel labeltext={"Email address"} placeholdertext={"Enter your email"} inputtype={"email"} Errortext={errortext === 'email' ? "Email" : undefined}
            errorColor={errortext === 'email' ? true : false}
            onChange={(e) => {
              setErrorText('')
              setSignPostParams({
                ...signPostParams,
                email: e.target.value
              })
            }}
          />
          <InputLabel labeltext={"Password"} placeholdertext={"Enter your password"} inputtype={"password"} Errortext={errortext === 'password' ? 'Password' : undefined}
            errorColor={errortext === 'password' ? true : false}
            onChange={(e) => {
              setErrorText('')
              setSignPostParams({
                ...signPostParams,
                password: e.target.value
              })
            }}
          />
            {/* Dropdown for choosing specialty */}
          {role === 'doctor' && (
             <>
             <label className="text-zinc-700 mb-1 mt-5">Specialty</label>
          <div className="mt-0">
            <Select
              options={specialties}
              placeholder="Select your specialty"
              isSearchable
              onChange={(selectedOption) => {
                setSpecialtyError("") // Clear any previous specialty error
                if (selectedOption.value === 'other') {
                  setShowOtherInput(true)
                  setSignPostParams({
                    ...signPostParams,
                    specialty: 'other'  // Set specialty to "other"
                  })
                } else {
                  setShowOtherInput(false)
                  setSignPostParams({
                    ...signPostParams,
                    specialty: selectedOption.value,
                    otherSpecialty: ""  // Clear the manual input if another specialty is selected
                  })
                }
              }}
            />
          </div>

          {showOtherInput && (
            <InputLabel
              labeltext={"Enter your specialty"}
              placeholdertext={"e.g., Orthopedist"}
              inputtype={"text"}
              onChange={(e) => {
                setSpecialtyError('')  // Clear the error when typing
                setSignPostParams({
                  ...signPostParams,
                  otherSpecialty: e.target.value  // Store the manual input
                })
              }}
            />
          )}
             </>
          )}

          <Button text={"Sign up"}
            onClick={async () => {
              // Validate Input fields
              if (!signPostParams.Fullname) {
                setErrorText("Fullname")
                return
              }
              if (!signPostParams.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signPostParams.email)) {
                setErrorText('email')
                return
              }
              if (!signPostParams.password) {
                setErrorText('password')
                return
              }
              if (!signPostParams.specialty) {
                setSpecialtyError('Please select your specialty')
                return
              }
              if ((signPostParams.specialty === 'other' && !signPostParams.otherSpecialty)) {
                setSpecialtyError('Please specify your specialty')
                return
              }
                    alert("signup ho gya hai")
              try {
                const response = await axios.post('backend url', {
                  ...signPostParams,
                  specialty: signPostParams.specialty === 'other' ? signPostParams.otherSpecialty : signPostParams.specialty  // Send the correct specialty
                })
                console.log(response)
                if (response.status === 200) {
                  navigate('/')
                }
              } catch (error) {
                console.log(error)
                setErrorText(error.response.data.msg)
              }
            }}
          />

          {(errortext ==="Any backend error" || specialtyError) && (
            <div className="pt-2 flex flex-row space-x-1 items-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"
              className="text-red-600" width={14}>
              <path fill="currentColor" fillRule="evenodd" 
              d="M13.4 7A6.4 6.4 0 1 1 .6 7a6.4 6.4 0 0 1 12.8 0Zm-5.6 3.2a.8.8 0 1 1-1.6 0 .8.8 0 0 1 1.6 0ZM7 3a.8.8 0 0 0-.8.8V7a.8.8 0 0 0 1.6 0V3.8A.8.8 0 0 0 7 3Z" 
              clipRule="evenodd"></path></svg>
              <small className="text-sm  text-red-600">{errortext || specialtyError}</small>
             </div>
          )}

          <div className="mt-6 flex items-center space-x-1 mb-8">
            <p className="text-sm text-black">Have an account?</p>
            <Link to={'/signin'}>
              <p className="text-lg text-blue-700 tracking-tight"> Sign in</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
