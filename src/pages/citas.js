import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

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
        else{
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
        today = today.getFullYear() +"-"+(today.getMonth()+1)+"-"+today.getDate();
        createUserWithEmailAndPassword(auth, correo, cuentaPassword).then(cred => {
            alert("cuenta creada");
            const db = getDatabase();
            set(push(ref(db, 'usuario/')),{
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

    return (
        <><Navbar />
        <Sidebar></Sidebar>
        <div>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} />
            <input
                type="text"
                placeholder="Apellido Paterno"
                value={apellidoPaterno}
                onChange={(e) => setApellidoPaterno(e.target.value)} />
            <input
                type="text"
                placeholder="Apellido Materno"
                value={apellidoMaterno}
                onChange={(e) => setApellidoMaterno(e.target.value)} />
            <input
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorrero(e.target.value)} />
            <input
                type="tel"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)} />
            <input
                type="text"
                placeholder="Direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)} />
            <input
                type="date"
                placeholder="Fecha de Nacimiento"
                value={dob}
                onChange={(e) => setDOB(e.target.value)} />
            <input
                type="text"
                placeholder="Genero"
                value={genero}
                onChange={(e) => setGenero(e.target.value)} />

            <button onClick={signUp}>Sign Up</button>
            <button onClick={check}>check</button>
        </div></>
    );
};

export default CreateUser;