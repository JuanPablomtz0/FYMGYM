import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";

const CreateCita = () => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        if (user) {
            console.log(user.email + " is logged in!");
        } else {
            console.log('User is logged out!');
            window.location.href = '/';
        }
    });

    const [correo, setCorrero] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [minuto, setMinuto] = useState("");
    const [am, setAm] = useState("");
    const [musculo, setMusculo] = useState("");

    const signUp = (e) => { 
        e.preventDefault();
        alert("cuenta creada");
        const db = getDatabase();
        set(push(ref(db, 'citas/')), {
            correo: correo,
            fecha: fecha,
            hora: hora,
            minuto: minuto,
            musculo: musculo,
            am: am
        });

        setHora("");
        setMinuto("");
    };

    return (
        <><Navbar />
            <Sidebar></Sidebar>
            <div className="form">
                <div className="input">
                    <h3>
                        Correo de socio
                    </h3>
                    <input
                        type="text"
                        placeholder="Correo@mail.com"
                        value={correo}
                        onChange={(e) => setCorrero(e.target.value)} />
                    <h3>
                        Fecha de la cita
                    </h3>
                    <input
                        type="date"
                        placeholder=""
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)} />
                    <h3>
                        Hora
                    </h3>
                    <select
                        type="number"
                        placeholder="00"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}>
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
                    :
                    <select
                        type="text"
                        placeholder="00"
                        value={am}
                        onChange={(e) => setAm(e.target.value)}>
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                    <h3>
                        Grupo muscular
                    </h3>   
                    <select
                        type="text"
                        placeholder="pecho"
                        value={musculo}
                        onChange={(e) => setMusculo(e.target.value)}>
                        <option value="pecho">Pecho</option>
                        <option value="hombro">Hombre</option>
                        <option value="brazo">Brazo</option>
                        <option value="espalda">Espalda</option>
                    </select>

                </div>
            </div>
            <div className="form">
                    <img src="./mus.PNG"></img>
                <div className="input">
                    <button onClick={signUp}>Agendar cita</button>
                </div>
            </div>
        </>
    );
};

export default CreateCita;