import React, { useState } from "react";
import { getDatabase, ref, set, get, child } from "firebase/database"
import db from "../configDB";

function writeUserData(/*userId,*/ name, email/*, imageUrl*/) {
  const db = getDatabase();
  set(ref(db, 'otro/'+ name), {
    username: name,
    email: email/*,
    profile_picture : imageUrl*/
  });
}

function readUserData( name ) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'otro/' + name)).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

const Landing = () => {
  const [correo, setCustomerName] = useState("");
  const [cuentaPassword, setCustomerPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    writeUserData(correo,cuentaPassword);
    readUserData(correo);
    setCustomerName("");
    setCustomerPassword("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={correo}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={cuentaPassword}
        onChange={(e) => setCustomerPassword(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
};
  
export default Landing;