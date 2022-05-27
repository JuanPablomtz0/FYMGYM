import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Select, Button } from '@chakra-ui/react'

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

    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [correo, setCorrero] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [dob, setDOB] = useState("");
    const [genero, setGenero] = useState("");
    const [membresia, setMembresia] = useState("");
    const [referido, setReferido] = useState("");
    const [hora, setHora] = useState("");
    const [minuto, setMinuto] = useState("");
    const [corte, setCorte] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const cuentaPassword = "password";
        createUserWithEmailAndPassword(auth, correo, cuentaPassword).then(cred => {
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
                fechaIngreso: corte,
                genero: genero,
                membresia: membresia,
                referido: referido,
                hora: hora,
                minuto: minuto,
                tipo: "Socio"
            });
            setNombre("");
            setApellidoMaterno("");
            setApellidoPaterno("");
            setCorrero("");
            setTelefono("");
            setDireccion("");
            setDOB("");
            setGenero("");
            setMembresia("");
            setReferido("");
            setHora("");
            setMinuto("");
            setCorte("");
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
                <br></br>
                <div>
                    <div>
                        <Select placeholder='Tipo de usuario'>
                            <option onClick={user} value='socio'>Socio</option>
                            <option onClick={front} value='frontdesk'>Frontdesk</option>
                        </Select>
                    </div>
                </div>
                <div className="input">
                    <br></br>
                    <h3>
                        Nombre(s)
                    </h3>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)} />
                    <h3>
                        Apellido paterno
                    </h3>
                    <input
                        type="text"
                        placeholder="Apellido paterno"
                        value={apellidoPaterno}
                        onChange={(e) => setApellidoPaterno(e.target.value)} />
                    <h3>
                        Apellido materno
                    </h3>
                    <input
                        type="text"
                        placeholder="Apellido materno"
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="input">
                    <h3>
                        Sexo
                    </h3>
                    <select
                        type="text"
                        placeholder="Otro"
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
                        placeholder="Regular"
                        value={membresia}
                        onChange={(e) => setMembresia(e.target.value)}>
                        <option value="Regular">Regular</option>
                        <option value="Preferencial">Preferencial</option>
                        <option value="PLUS">PLUS</option>
                        <option value="VIP">VIP</option>
                    </select>
                    <h3>
                        ¿Desea contar con instructores?
                    </h3>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <h3>
                        Referido por:
                    </h3>
                    <input
                        type="text"
                        placeholder="Referido"
                        value={referido}
                        onChange={(e) => setReferido(e.target.value)} />
                    <h3>
                        Tiempo de antelación de notificaciones:
                    </h3>
                    <select
                        type="number"
                        placeholder="00"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}>
                        <option value="0">00</option>
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
                        value={minuto}
                        onChange={(e) => setMinuto(e.target.value)}>
                        <option value="00">00</option>
                        <option value="05">05</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                    </select>
                    <h3>
                        Fecha de ingreso y fecha de corte
                    </h3>
                    <input
                        type="date"
                        placeholder=""
                        value={corte}
                        onChange={(e) => setCorte(e.target.value)} />
                </div>
            </div>
            <div className="form">
                <img src="./giga.PNG"></img><br></br>
                <Button onClick={signUp}>Registrar usuario</Button>
            </div>
        </>
    );
};

export default CreateUser;