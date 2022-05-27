import React from "react";
import { getAuth, signOut } from "firebase/auth";

import { Button } from '@chakra-ui/react'

const Navbar = () => {
  const logout = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth);
    console.log('User signed out!');
    window.location.href = '/';
};
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src='./gym_logo.png'></img>
          <h2>FYM GYM</h2>
        </div>
          <Button onClick={logout}>Logout</Button>
          <div className='account'>
            <img id="account" src="./profile.png"></img>
          </div>
      </div>
      <div className='logout'>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};
  
export default Navbar;