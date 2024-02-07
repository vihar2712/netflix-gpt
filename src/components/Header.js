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
    <div className="flex justify-between bg-gradient-to-b from-black">
      <div className=" w-64 p-4 hover:cursor-pointer z-30">
        <img src={NETFLIX_LOGO} alt="netflix-logo" />
      </div>
      {user && (
        <div className="flex p-6 m-4 text-white items-center z-40">
          {showGptSearch && (
            <select
              className="bg-red-600 p-2 mx-2 rounded-lg hover:cursor-pointer"
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
            className="bg-red-600 p-2 mx-2 rounded-lg hover:text-gray-300"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
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
