import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Navbar from '../components/Navbar';
import Sidebar from "../components/Sidebar";

const ViewUser = () => {
    const auth = getAuth();
    auth.onAuthStateChanged(user => {
        retrieve();
        if (user) {
            console.log(user.email + " is logged in!");
        } else {
            console.log('User is logged out!');
            window.location.href = '/';
        }
    });

    const retrieve = () => {
        const db = getDatabase();
        get(ref(db, 'usuario/')).then((snapshot) =>{
            if (snapshot.exists()) {
                var tableHTML = "<tr>";
                tableHTML += "<th>" + "Nombre" + "</th>";
                tableHTML += "<th>" + "Correo" + "</th>";
                tableHTML += "<th>" + "Membresia" + "</th>";
                tableHTML += "<th>" + "Fecha Corte" + "</th>";
                tableHTML += "<th>" + "Telefono" + "</th>";
                document.getElementById("table").innerHTML = tableHTML;
                snapshot.forEach(element => {
                    updateTable(element.val())
                });
              } else {
                console.log("No data available");
              }
            }).catch((error) => {
              console.error(error);
            });

        get(ref(db, 'front')).then((snapshot) =>{
            if (snapshot.exists()) {
                snapshot.forEach(element => {
                    console.log("front")
                });
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
    };

    const updateTable = (jsonData) => {
        var tableHTML = "<tr>";
        tableHTML += "<td>" + jsonData.nombre + "</td>";
        tableHTML += "<td>" + jsonData.correo + "</td>";
        tableHTML += "<td>" + jsonData.membresia + "</td>";
        tableHTML += "<td>" + jsonData.fechaIngreso + "</td>";
        tableHTML += "<td>" + jsonData.telefono + "</td>";
        tableHTML += "</tr>";
        document.getElementById("table").innerHTML += tableHTML;
    }

    return (
        <><Navbar />
            <Sidebar></Sidebar>
            <div className="form">
                <table className="listUsers" id="table"/>
            </div>
        </>
    );
};

export default ViewUser;