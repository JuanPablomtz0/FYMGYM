import React from "react";
import { getAuth, signOut } from "firebase/auth";

import { Button } from "@chakra-ui/react";

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
        <img src='./gym_logo_dark.png'></img>
      </div>
      <div className='title'>
        <h1>FYM GYM</h1>
      </div>
      <div className='logout'>
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
};
  
export default Navbar;