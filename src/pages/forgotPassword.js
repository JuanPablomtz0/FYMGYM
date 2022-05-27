import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Button } from '@chakra-ui/react';

const ForgotPassword = () => {
    const [correo, setCorreo] = useState("");

    const remind = (e) => {
        alert("Correo de recuperacion de cuenta enviado.")
        window.location.href = '/';
    };

    return (
        <div>
            <div className="banner">
                <img src='./banners/banner_15.jpg' />
            </div>
            <div className="login">
                <div className="input">
                    <br></br>
                    <h1>FYM GYM</h1>
                    <hr></hr>
                    <p>Correo de la cuenta: </p>
                    <input
                        type="text"
                        placeholder="correo electronico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <br></br>
                    <hr></hr>
                    <div className="link">
                        <Link to="/">
                            Cancelar
                        </Link>
                    </div>
                    <br>
                    </br>
                    <Button onClick={remind}>Cambiar contraseña</Button>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;