import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
//import { createTransport } from "nodemailer";

//var nodemailer = require('nodemailer');

const ForgotPassword = () => {
    const [correo, setCorreo] = useState("");

    const remind = (e) => {/*
        e.preventDefault();
        let transporter = createTransport({
            service: 'gmail',
            auth: {
              user: 'fymgymtrainingcenter@gmail.com',
              pass: 'TrainNow@FYM'
            }
          });
        let mailOptions = {
        from: 'fymgymtrainingcenter@gmail.com',
        to: correo,
        subject: 'Cuenta',
        text: `Su contraseña es: `
        };
        
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });*/
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            <button onClick={remind}>Enviar</button>
            <Link to="/">
              Cancelar
            </Link>
        </div>
    );
};

export default ForgotPassword;