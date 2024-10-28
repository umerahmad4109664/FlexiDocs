import { useState } from "react";
const Login = () => {
  const [login, setLogin] = useState<boolean>(true);
  return (
    <div
      className={` h-screen flex flex-row transition duration-300 ease-in-out`}
    >
      <div className="w-1/2"></div>
      <div
        className={`m-6 rounded-xl w-1/2 bg-blue-600 ${
          login ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 flex flex-col justify-center items-start px-12 gap-5`}
      >
        <p className="text-white text-6xl font-semibold">Welcome back! </p>
        <p className="text-white text-xl">
          We are glad to see you again! Get access to your Orders, Wishlist and
          Recommendations.
        </p>
        <button
          onClick={() => {
            setLogin(!login);
          }}
        >
          test
        </button>
      </div>
    </div>
  );
};

export default Login;
