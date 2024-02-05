import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between">
      <div className=" w-64 p-4 hover:cursor-pointer z-30">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>
      {user && (
        <div className="flex p-6 m-4 text-white items-center">
            <h1>{user.displayName}</h1>
          <img src={user.photoURL} className="w-14 px-2" />
          <button onClick={handleSignOut} className="hover:underline">Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
