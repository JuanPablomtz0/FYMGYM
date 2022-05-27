import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";

const Register = () => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log(user.email + " is logged in!");
        } else {
            console.log('User is logged out!');
            window.location.href = '/';
        }
    });
    
    const retrieve = () => {
        const db = getDatabase();
        get(ref(db, 'usuario/')).then((snapshot) =>{
            if (snapshot.exists()) {
                snapshot.forEach(element => {
                    console.log(element.val())
                });
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            });

        get(ref(db, 'front')).then((snapshot) =>{
            if (snapshot.exists()) {
                snapshot.forEach(element => {
                    console.log(element.val().correo)
                });
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    };

    const user = () => {
        window.location.href = '/createUser';
    }

    const front = () => {
        window.location.href = '/createFront';
    }

    return (
        <><Navbar />
            <Sidebar></Sidebar>
            <button onClick={retrieve}>Registrar Usuario</button>
        </>
    );
};

export default Register;