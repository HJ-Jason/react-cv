import { useState } from "react";
import Read from "./get";
import firebase from "firebase/compat/app";

const Put = () => {
  var db = firebase.firestore();
  const [firstname, Setfirstname] = useState("");
  const [lastname, Setlastname] = useState("");
  const [age, Setage] = useState("");
  const sub = (e) => {
    e.preventDefault();

    // Add user to the store
    db.collection("user")
      .add({
        firstname: firstname,
        lastname: lastname,
        age: age,
      })
      .then((docRef) => {
        alert("Utilisateur entré en base de données");
      })
      .catch((error) => {
        console.error("AAAAAAAAAAAAAH ERREUR ", error);
      });
  };

  return (
    <div>
      <center>
        <form
          style={{ marginTop: "200px" }}
          onSubmit={(event) => {
            sub(event);
          }}
        >
          <input
            type="text"
            placeholder="Prénom"
            onChange={(e) => {
              Setfirstname(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Nom de famille"
            onChange={(e) => {
              Setlastname(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Âge"
            onChange={(e) => {
              Setage(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Envoyer !</button>
        </form>
      </center>
      <br></br>
      <Read />
    </div>
  );
};

export default Put;
