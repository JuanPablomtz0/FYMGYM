import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom"; 
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";


const Index = () => {
    const [correo, setCustomerName] = useState("");
    const [cuentaPassword, setCustomerPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, correo, cuentaPassword)
            .then(cred => {
                console.log('Logged in user!');

                window.location.href = '/createUser';
            })
            .catch(error => {
              console.log(error.message);
            });
        
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
            <button onClick={login}>Login</button>
            <Link to="/forgotPassword">
              Recordar Contraseña
            </Link>
        </div>
    );
};

export default Index;