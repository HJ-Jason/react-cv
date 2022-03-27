import React from "react";
import CV from "react-cv";
import { getDatabase, ref, set, get, child } from "firebase/database";

function writeUserData(userId, name, email, phonenumber) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    name: name,
    email: email,
    phonenumber: phonenumber,
  });
}

writeUserData("1", "Test", "jason.heldebaume03@gmail.com", "07 86 70 08 92");

const dbRef = ref(getDatabase());
get(child(dbRef, `users/1/phonenumber`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

const MyResume = () => {
  return (
    <main>
      <div></div>
      <body>
        <CV
          personalData={{
            name: "Heldebaume Jason",
            title: "Développeur Web",
            image: "https://bulma.io/images/placeholders/128x128.png",
            contacts: [
              { type: "email", value: "jason.heldebaume03@gmail.com" },
              { type: "phone", value: "07 86 70 08 92" },
              { type: "website", value: "https://react-cv-8faa1.web.app/" },
              { type: "github", value: "https://github.com/HJ-Jason" },
            ],
          }}
          sections={[
            {
              type: "text",
              title: "Télécharger mon CV",
              content: (
                <a
                  href="https://firebasestorage.googleapis.com/v0/b/react-cv-8faa1.appspot.com/o/CV_V2.pdf?alt=media&token=2a3a538e-aa6f-4b63-b32e-1eb101947260"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger
                </a>
              ),
              icon: "usertie",
            },
          ]}
          branding={false}
        />
      </body>
    </main>
  );
};
export default MyResume;
