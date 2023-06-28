import React, { useContext } from "react";
import avatarPlaceHolder from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
  const { user } = useContext(AuthContext);
  return (
    <img
      src={user && user?.photoURL ? user.photoURL : avatarPlaceHolder}
      alt={`${
        user ? `${user.displayName}'s profile picture` : "User Profile Picture"
      }`}
      className="h-7 w-7 rounded-full"
    />
  );
};

export default Avatar;
