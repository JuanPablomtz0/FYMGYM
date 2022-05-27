import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";

const CreateUser = () => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log(user.email + " is logged in!");
        } else {
            console.log('User is logged out!');
            window.location.href = '/';
        }
    });

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
        else {
            console.log("signed-out");
        }
    };

    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [correo, setCorrero] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [dob, setDOB] = useState("");
    const [genero, setGenero] = useState("");
    

    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const cuentaPassword = "password";
        let today = new Date();
        today = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        createUserWithEmailAndPassword(auth, correo, cuentaPassword).then(cred => {
            alert("cuenta creada");
            const db = getDatabase();
            set(push(ref(db, 'usuario/')), {
                nombre: nombre,
                apellidoPaterno: apellidoPaterno,
                apellidoMaterno: apellidoMaterno,
                correo: correo,
                password: cuentaPassword,
                telefono: telefono,
                direccion: direccion,
                dob: dob,
                fechaIngreso: today,
                genero: genero
            });
            setNombre("");
            setApellidoMaterno("");
            setApellidoPaterno("");
            setCorrero("");
            setTelefono("");
            setDireccion("");
            setDOB("");
            setGenero("");
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
            <div className="form">
                <div className="dropup">
                    <div>
                        <h1>
                            Tipo de usuario ◄
                        </h1>
                        <div className="droptype-content">
                            <h4 onClick={user}>Socio</h4>
                            <h4 onClick={front}>Frontdesk</h4>
                        </div>
                    </div>
                </div>
                <div className="input">
                    <h3>
                        Nombre (s)
                    </h3>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    <h3>
                        Apellido Paterno
                    </h3>
                    <input
                        type="text"
                        placeholder="Apellido Paterno"
                        value={apellidoPaterno}
                        onChange={(e) => setApellidoPaterno(e.target.value)} />
                    <h3>
                        Apellido maternoa
                    </h3>
                    <input
                        type="text"
                        placeholder="Apellido Materno"
                        value={apellidoMaterno}
                        onChange={(e) => setApellidoMaterno(e.target.value)} />
                    <h3>
                        Fecha de nacimiento
                    </h3>
                    <input
                        type="date"
                        placeholder="Fecha de Nacimiento"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)} />
                    <h3>
                        Telefono
                    </h3>
                    <input
                        type="tel"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)} />
                    <h3>
                        Correo
                    </h3>
                    <input
                        type="email"
                        placeholder="Correo"
                        value={correo}
                        onChange={(e) => setCorrero(e.target.value)} />
                    <h3>
                        Direccion
                    </h3>
                    <input
                        type="text"
                        placeholder="Direccion"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)} />
                </div>
            </div>
            <div className="form">

                <div className="input">
                    <h3>
                        Sexo
                    </h3>
                    <select
                        type="text"
                        placeholder="Genero"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <h3>
                        Membresia
                    </h3>
                    <select
                        type="text"
                        placeholder="Premium"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}>
                        <option value="Premium">Premium</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Double Platinum">Double Platinum</option>
                        <option value="Black Gold">Black Gold</option>
                        <option value="Double Black Gold">Double Black Gold</option>
                    </select>
                    <h3>
                        Interes (instructor)
                    </h3>
                    <label class="switch">
                        <input type="checkbox"/>
                        <span class="slider round"></span>
                    </label>
                    <h3>
                        Referido por
                    </h3>
                    <input
                        type="text"
                        placeholder="Referido"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)} />
                    <h3>
                        Tiempo de antelacion
                    </h3>
                    <select
                        type="number"
                        placeholder="00"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}>
                        <option value="1">00</option>
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                    : 
                    <select
                        type="text"
                        placeholder="00"
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}>
                        <option value="1">00</option>
                        <option value="1">05</option>
                        <option value="2">10</option>
                        <option value="3">15</option>
                        <option value="4">20</option>
                        <option value="5">25</option>
                        <option value="6">30</option>
                        <option value="7">35</option>
                        <option value="8">40</option>
                        <option value="9">45</option>
                        <option value="10">50</option>
                        <option value="11">55</option>
                    </select>
                    <h3>
                        Fecha de ingreso y fecha de corte
                    </h3>
                    <input
                        type="date"
                        placeholder=""
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)} />
                </div>
            </div>
            <div className="form">
                <img src="./giga.PNG"></img>
                <button onClick={signUp}>Registrar Usuario</button>
            </div>

        </>
    );
};

export default CreateUser;