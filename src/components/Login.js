import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <form className="lg:w-4/12 flex flex-col items-center absolute bg-black text-white p-10 rounded-md top-36 right-1/3 bg-opacity-80">
        <h1 className="w-9/12 text-3xl font-bold p-4 mb-2">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <div className="w-9/12">
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
            />
          )}
          <input
            type="email"
            placeholder="Email address"
            className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
          />
          <input
            type="password"
            placeholder="password"
            className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
          />
          <button className="w-full py-2 px-4 m-2 bg-red-600 hover:bg-red-700 rounded-md">
            Sign In
          </button>
        </div>
        <p>Forgot Password?</p>
        <div className="m-2 p-3 w-9/12">
          <p>
            {isSignIn ? "New to Netflix ? " : "Already Registered ? "}
            <span
              className="hover:underline cursor-pointer"
              onClick={handleIsSignIn}
            >
              {isSignIn ? " Sign up now." : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
