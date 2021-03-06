import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth";
import UnAuth from "./components/unAuth";
import AuthCheck from "./components/authCheck";
import Put from "./components/put";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact="true" element={<SignIn />}></Route>
        <Route path="/signedIn" exact="true" element={<AuthCheck />}></Route>
        <Route path="/unAuth" exact="true" element={<UnAuth />}></Route>
        <Route path="/firestore" exact="true" element={<Put />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
