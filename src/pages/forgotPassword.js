import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const ForgotPassword = () => {
    const [correo, setCorreo] = useState("");

    const remind = (e) => {
        alert("Correo de recuperacion de cuenta enviado.")
        window.location.href = '/';
    };

    return (
        <div>
            <div className="banner">
                <img src='./banner_1.jpg' />
            </div>
            <div className="login">
                <div className="input">
                    <h1>FYM GYM</h1>

                    <p>Ingresa el correo electronico</p>
                    <input
                        type="text"
                        placeholder="correo electronico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <br>
                    </br>
                    <br>
                    </br>
                    <div className="link">
                        <Link to="/">
                            Cancelar
                        </Link>
                    </div>
                    <br>
                    </br>
                    <button onClick={remind}>Enviar</button>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;