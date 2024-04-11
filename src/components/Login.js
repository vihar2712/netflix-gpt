import { useRef, useState } from "react";
import { validateData } from "../utils/validateData";
import { BACKGROUND_IMAGE, USER_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, startSigning, stopSigning } from "../utils/userSlice";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const { loading } = useSelector((store) => store.user);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidation = () => {
    dispatch(startSigning());
    const message = validateData(
      email.current.value,
      password.current.value,
      name?.current?.value
    );
    setErrorMessage(message);
    dispatch(stopSigning());
    if (message === null) {
      dispatch(startSigning());
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
            // console.log(user, auth.currentUser);

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
                navigate("/browse");
                dispatch(stopSigning());
              })
              .catch((error) => {
                // An error occurred
                dispatch(stopSigning());
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            dispatch(stopSigning());
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
            // const user = userCredential.user;
            dispatch(stopSigning());
            navigate("/browse");
          })
          .catch((error) => {
            dispatch(stopSigning());
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === "auth/invalid-credential")
              return setErrorMessage("Wrong credentials. Try again");
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-black fixed top-0">
        <img
          src={BACKGROUND_IMAGE}
          className=" h-screen w-screen object-cover opacity-55"
          alt="bg-movies"
        />
      </div>
      <div className="flex justify-center mb-6 h-screen">
        <div className="flex flex-col relative m-4 md:m-0 md:w-4/12 bg-black text-white w-full p-4 sm:py-10 sm:px-12 rounded-md bg-opacity-80">
          <h1 className="text-xl sm:text-3xl font-bold sm:p-4 mb-2">
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
                  placeholder="username"
                  className="sm:p-4 sm:m-2 bg-transparent border border-gray-500 rounded-sm w-full"
                  required
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email address"
                className="p-4 my-2 sm:m-2 bg-transparent border border-gray-500 rounded-sm w-full"
                required
              />
              <input
                ref={password}
                type="password"
                placeholder="password"
                className="p-4 my-2 sm:m-2 bg-transparent border border-gray-500 rounded-sm w-full"
                required
              />
              <button
                disabled={loading}
                className={
                  "w-full py-2 px-4 my-2 sm:m-2 bg-red-600 hover:bg-red-700 rounded-md " +
                  (loading ? "disabled:opacity-75" : "")
                }
              >
                {loading ? "Please Wait.." : isSignIn ? "Sign In" : "Sign Up"}
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
          <div className="mt-10 p-3 w-full sm:w-9/12">
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
      <Footer />
    </div>
  );
};

export default Login;
