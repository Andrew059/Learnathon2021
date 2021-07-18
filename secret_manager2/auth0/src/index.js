import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from "./router";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-f1vj50uz.us.auth0.com"
      clientId="U1T4m7mxEmOJSHEiQFqNqt6y0ijJSERJ"
      redirectUri={window.location.origin}
    >
      <RouterProvider />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);