import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react";

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Auth0Provider>,
  document.getElementById('root')
);
