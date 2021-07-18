import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import "./SecretPage.css";
import App from "../components/App";
import registerServiceWorker from "../registerServiceWorker";

export const SecretPage = () => {
  const { user, logout } = useAuth0();

  return (
    <>
      <h1 className="h11">Hi {user.email}!</h1>
      <h1 className="h12">Welcome to your personal Secret Manager!</h1>
      <App /> 
      <footer>
          <button className="button1"onClick={logout}>Sign Out</button>
      </footer>
      
    </>
  );
};