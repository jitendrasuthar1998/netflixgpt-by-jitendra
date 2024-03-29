import React from "react";
import UserLogo from "../assets/logo.webp";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { userLogo } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const userInfo = useSelector((store) => store.user.userInfo);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispath(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  
  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black flex items-center text-white">
      <img
        className="w-40 h-30"
        alt="logo"
        src={userLogo}
      />
      {userInfo?.email && (
        <>
          <nav>
            <ul className="flex">
              <li className="mr-2">
                <a href="#">Home</a>
              </li>
              <li className="mr-2">
                <a href="#">TV Shows</a>
              </li>
              <li className="mr-2">
                <a href="#">Movies</a>
              </li>
              <li className="mr-2">
                <a href="#">Latest</a>
              </li>
              <li>
                <a href="#">My List</a>
              </li>
            </ul>
          </nav>
          <div
            className="absolute right-10 flex items-center cursor-pointer"
            onClick={() => handleSignOut()}
          >
            <img src={UserLogo} className="w-8 mr-2" alt="logo" /> Sign Out
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
