import React, { useState } from "react";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, 
        signOut,  signInWithEmailAndPassword} from "firebase/auth";


const Register = () => {
    const [correo, setCustomerName] = useState("");
    const [cuentaPassword, setCustomerPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, correo, cuentaPassword).then(cred => {
            console.log('User signed up!');
        });
        setCustomerName("");
        setCustomerPassword("");
    };
    const check = (e) => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user !== null) {
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });
        }
        else{
            console.log("signed-out");
        }
        //<button onClick={check}>check</button>
    };

    const login = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, correo, cuentaPassword)
            .then(cred => {
                console.log('Logged in user!');
            })
            .catch(error => {
              console.log(error.message);
            });
        setCustomerName("");
        setCustomerPassword("");
    };

    const logout = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth);
        console.log('User signed out!');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={correo}
                onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Password"
                value={cuentaPassword}
                onChange={(e) => setCustomerPassword(e.target.value)}
            />
            
            <button onClick={signUp}>Sign Up</button>
            <button onClick={login}>Login</button>
            
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Register;