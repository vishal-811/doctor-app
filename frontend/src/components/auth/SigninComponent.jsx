import { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import { InputLabel } from "../InputLabel";
import { Button } from "../Button";

export const SigninComponent=()=>{
     const [errortxt, setErrortxt] = useState('');
     const [loading, setLoading] = useState(false);
     const [postInputs, setPostInputs] = useState({
      email: "",
      password: ""
  });

    const navigate =useNavigate();
  return (
    <div className="pt-10 ps-3 pe-3 md:pt-24">
      <div className="flex flex-col max-w-md mx-auto border border-gray-200  shadow-4xl rounded-2xl p-4 bg-white">
        <div className="flex flex-col ps-2 pe-2">
          <h2 className="font-italic text-xl tracking-tight font-bold text-custom-blue">DoctorAI</h2>
          <div>
            <h2 className="text-2xl font-medium text-zinc-900 tracking-tight">Sign in</h2>
            <p className="text-zinc-500">to continue to DoctorAI</p>
          </div>
          <InputLabel
            labeltext={"Email address"}
            placeholdertext={"Enter your email"}
            inputtype={"email"}
            Errortext={errortxt === 'email' ? "Email" : undefined}
            errorColor={errortxt ==='email' ? true : false}
            onChange={(e) => {
              setErrortxt('');
              setPostInputs({
                ...postInputs,
                email: e.target.value
              });
            }}
          />
          <InputLabel
            labeltext={"Password"}
            placeholdertext={"Enter your password"}
            inputtype={"password"}
            Errortext={errortxt === 'password' ? "Password" : undefined}
            errorColor={errortxt ==='password' ? true : false}
            onChange={(e) => {
              setErrortxt('');
              setPostInputs({
                ...postInputs,
                password: e.target.value
              });
            }}
          />
          <Button
            text={loading ? "Signing in..." : "Sign in"}  // replace it with nice loader.
            onClick={async () => {
              setLoading(true);

              // Validate input fields 
              if (!postInputs.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(postInputs.email)) {
                setErrortxt('email');
                setLoading(false);
                return;
              }
              if (!postInputs.password) {
                setErrortxt('password');
                setLoading(false);
                return;
              }

              try {
                const response = await axios.post("backendurl", {
                  ...postInputs   // send email  password by using spread opearator
                });
               //  console.log(response);
                setLoading(false);
                  if(response.status===200){
                     console.log(response);
                      login(response.data.token);
                     navigate('/');
                  }
              } catch (error) {
                setErrortxt(error.response.data.msg);
                console.log(error.response.data.msg);
                setLoading(false);
              }
            }}
            // disabled={loading}
          />

          <div className="flex flex-col mt-1">
            {/* Show if any error */}
            {errortxt && (
              errortxt ==="Couldn't find your account"?
                <small className="text-sm text-red-500">Couldn't find account!</small> : undefined
            )}
            <div className="mt-3 flex items-center space-x-1 mb-8">
              <p className="text-sm text-black">No account?</p>
              <Link to={'/signup'}>
                <p className="text-lg text-blue-700  tracking-tight"> Sign Up</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
