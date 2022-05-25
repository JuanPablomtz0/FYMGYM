import React, { useState } from "react";
import { getDatabase, ref, set, get, child, push } from "firebase/database"

import Banner from '../components/Banner';



function writeUserData(/*userId,*/ name, email/*, imageUrl*/) {
  const db = getDatabase();
  set(push(ref(db, 'usuario/')),{
    username: name,
    email: email
  });
}

function readUserData( name ) {
  
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'usuario/')).then((snapshot) => {
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

const Login = () => {
  const [correo, setCustomerName] = useState("");
  const [cuentaPassword, setCustomerPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    writeUserData(correo,cuentaPassword);
    setCustomerName("");
    setCustomerPassword("");
  };

  return (
    <div>
      <Banner></Banner>
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
  
export default Login;