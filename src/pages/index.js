import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Button } from '@chakra-ui/react'

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
                alert("Correo o contraseña incorrecta");
                setCustomerPassword("");

            });

    };

    return (
        <div class="container" >
            <div className="banner">
                <img src='./banners/banner_13.jpg' />
            </div>
            <div className="login">
                <div className="input">
                    <br></br>
                    <h1>FYM GYM</h1>
                    <hr></hr>
                    <p>Hola, inicia sesión:</p>
                    <input
                        type="text"
                        placeholder="correo electronico"
                        value={correo}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <br></br>
                    <input
                        type="password"
                        placeholder="contraseña"
                        value={cuentaPassword}
                        onChange={(e) => setCustomerPassword(e.target.value)}
                    />
                    <br></br><hr></hr>
                    <div className="link">
                        <Link to="/forgotPassword">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <br>
                    </br>
                    <Button onClick={login}>Iniciar sesión </Button>
                </div>
                    
            </div>
        </div>
    );
};

export default Index;