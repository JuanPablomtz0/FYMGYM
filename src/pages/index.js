import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


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
        <div>
            <div className="banner">
                <img src='./banner_1.jpg' />
            </div>
            <div className="login">
                <div className="input">
                    <h1>FYM GYM</h1>

                    <p>Hola, inicia sesion</p>
                    <input
                        type="text"
                        placeholder="correo electronico"
                        value={correo}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                    <br>
                    </br>
                    <br>
                    </br>
                    <input
                        type="password"
                        placeholder="contraseña"
                        value={cuentaPassword}
                        onChange={(e) => setCustomerPassword(e.target.value)}
                    />
                    <br>
                    </br>
                    <br>
                    </br>
                    <div className="link">
                        <Link to="/forgotPassword">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>
                    <br>
                    </br>
                    <button onClick={login}>Iniciar sesion</button>
                </div>
                    
            </div>
        </div>
    );
};

export default Index;