import LoginComponent from "@/components/LoginComponent";
import SignUpComponent from "@/components/SignUpComponent";
import { useState } from "react";


const Login = () => {
  const [login, setLogin] = useState<boolean>(true);
 

  return (
    <div
      className={` h-screen flex flex-row transition duration-300 ease-in-out`}
    >
      {
        login ? 
        <LoginComponent login={login} setLogin={setLogin}/>
        :
        <SignUpComponent login={login} setLogin={setLogin}/>

      }
      <div
        className={` w-1/2 custom-bg-img  ${
          login ? "-translate-x-full" : "translate-x-0"
        } transition duration-300 flex flex-col justify-center items-start  gap-5`}
      >
        <div className="relative h-full flex flex-col justify-center items-start px-16 gap-5">
          <div className="absolute inset-0 bg-gray-600 opacity-85 rounded-lg z-0"></div>

          <p className="text-white text-6xl font-semibold z-10">
            {login ?"Welcome back!":"Looks like you're new here!"}
          </p>
          <p className="text-white text-xl z-10">
            {login ?"We are glad to see you again! Get access to your Orders, Wishlist and Recommendations.":"Join our group in few minutes! Sign up with your details to get started"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
