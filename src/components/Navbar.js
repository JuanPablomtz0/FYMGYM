import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const logout = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth);
    console.log('User signed out!');
    window.location.href = '/';
};
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src='./logo.png'></img>
      </div>
      <div className='logout'>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
  
export default Navbar;