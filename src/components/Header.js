import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/langConstants";
import { changeLanguage } from "../utils/langSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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

  const toggleShowGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const changeLang = (e) => {
    dispatch(changeLanguage(e.target.value));
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
    <div className="flex flex-col justify-between sm:flex-row items-center bg-gradient-to-b from-black">
      <div className="w-48 sm:w-64 hover:cursor-pointer z-30">
        <img src={NETFLIX_LOGO} alt="netflix-logo" className="mt-2"/>
      </div>
      {user && (
        <div className="flex p-2 md:p-6 md:m-4 text-white items-center justify-between w-full sm:w-fit z-40">
          {showGptSearch && (
            <select
              className="bg-red-600 p-1 sm:p-2 mx-2 rounded-lg hover:cursor-pointer"
              onChange={changeLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={toggleShowGptSearch}
            className="bg-red-600 p-1 sm:p-2 mx-2 rounded-lg hover:text-gray-300"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img src={user.photoURL} className="hidden sm:inline-block sm:w-14 sm:px-2" alt="user-pic"/>
          <div className="flex flex-col text-red-600">
          <h1 className="text-sm sm:text-md md:text-lg">{user.displayName}</h1>
          <button onClick={handleSignOut} className="text-sm sm:text-md md:text-lg hover:underline">
            (Sign Out)
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
