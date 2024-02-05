import { useRef, useState } from "react";
import { validateData } from "../utils/validateData";
import { BACKGROUND_IMAGE, USER_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    if (message === null) {
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
            console.log(user, auth.currentUser);

            //   user.displayName = name.current.value;
            updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_LOGO,
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
              });
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
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-black absolute top-0">
        <img src={BACKGROUND_IMAGE} className="opacity-55" alt="bg-movies" />
      </div>

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
                required
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email address"
              className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="password"
              className="p-4 m-2 bg-transparent border border-gray-500 rounded-sm w-full"
              required
            />
            <button className="w-full py-2 px-4 m-2 bg-red-600 hover:bg-red-700 rounded-md">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className="text-red-600 font-bold text-lg p-2 m-2">
            {errorMessage}
          </p>
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
    </div>
  );
};

export default Login;
