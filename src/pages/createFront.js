import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";

const CreateFront = () => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log(user.email + " is logged in!");
        } else {
            console.log('User is logged out!');
            window.location.href = '/';
        }
    });

    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [correo, setCorrero] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [dob, setDOB] = useState("");
    const [genero, setGenero] = useState("");
    

    const signUp = (e) => {
        if(genero==="")
            setGenero("Hombre");
        e.preventDefault();
        const auth = getAuth();
        const cuentaPassword = "password";
        let today = new Date();
        today = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
        createUserWithEmailAndPassword(auth, correo, cuentaPassword).then(cred => {
            const db = getDatabase();
            set(push(ref(db, 'front/')), {
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
            alert("cuenta creada");
        }).catch((error) => {
            alert("cuenta no creada");
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
                </div>
            </div>
            <div className="form">
                <img src="./giga.PNG"></img>
                <button onClick={signUp}>Registrar Usuario</button>
            </div>

        </>
    );
};

export default CreateFront;