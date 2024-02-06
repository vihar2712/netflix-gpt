import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  //   console.log("user");
  //   if (!user) navigate("/login");
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);

        // user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="flex justify-between bg-gradient-to-b from-black">
      <div className=" w-64 p-4 hover:cursor-pointer z-30">
        <img src={NETFLIX_LOGO} alt="netflix-logo" />
      </div>
      {user && (
        <div className="flex p-6 m-4 text-white items-center z-40">
          <h1>{user.displayName}</h1>
          <img src={user.photoURL} className="w-14 px-2" />
          <button onClick={handleSignOut} className="hover:underline">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
