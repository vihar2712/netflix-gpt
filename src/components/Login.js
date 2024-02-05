import { useRef, useState } from "react";
import { validateData } from "../utils/validateData";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidation = () => {
    const message = validateData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMessage(message);
    if (!isSignIn) {
      // Sign up page
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          user.displayName = name.current.value;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In/Log In page
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="flex flex-col absolute bg-black text-white lg:w-4/12 py-10 px-12 rounded-md top-28 right-1/3 bg-opacity-80">
      <h1 className="text-3xl font-bold p-4 mb-2">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleValidation();
        }}
      >
        <div>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email address"
            className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
          />
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
          />
          <button className="w-full py-2 px-4 m-2 bg-red-600 hover:bg-red-700 rounded-md">
            Sign In
          </button>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-600 font-bold text-lg p-2 m-2">{errorMessage}</p>
      )}
      <p className="text-center hover:text-gray-400 hover:underline hover:cursor-pointer">
        Forgot Password?
      </p>
      <div className="mt-10 p-3 w-9/12">
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
    </div>
  );
};

export default Login;
