// Import Firestore database

import { useState } from "react";
import firebase from "firebase/compat/app";

const Read = () => {
  var db = firebase.firestore();
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
  window.addEventListener("load", () => {
    Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("user")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        const list = [];
        querySnapshot.forEach((element) => {
          list.push({ id: element.id, ...element.data() });

          setInfo(list);
        });
        console.log(list);
      });
  };

  // Display the result on the page
  return (
    <div>
      <center>
        <h2>
          <u>Details :</u>
        </h2>
        <br></br>
      </center>

      {info.map((data) => (
        <Frame
          firstname={data.firstname}
          lastname={data.lastname}
          age={data.age}
          id={data.id}
        />
      ))}
    </div>
  );
};

// Define how each display entry will be structured
const Frame = ({ firstname, lastname, age, id }) => {
  console.log(firstname + " " + lastname + " " + age + " " + id);
  console.log("coucou : ");
  return (
    <center>
      <div classlastname="div">
        <p>Nom : {lastname}</p>

        <p>Prénom : {firstname}</p>

        <p>Âge : {age}</p>

        <p>Id : {id}</p>

        <br></br>
      </div>
    </center>
  );
};

export default Read;
