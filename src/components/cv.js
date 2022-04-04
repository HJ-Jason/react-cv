import React from "react";
import CV from "react-cv";

const MyResume = () => {
  return (
    <main>
      <div></div>
      <body>
        <CV
          personalData={{
            name: "",
            title: "Développeur Web",
            image: "https://bulma.io/images/placeholders/128x128.png",
            contacts: [
              { type: "email", value: "" },
              { type: "phone", value: "" },
              { type: "website", value: "" },
              { type: "github", value: "https://github.com/HJ-Jason" },
            ],
          }}
          sections={[
            {
              type: "text",
              title: "Télécharger mon CV",
              content: (
                <a
                  href="www.google.com"
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
