import { createRoot } from 'react-dom/client'
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ucambo6p6b8o5b5c.us.auth0.com"
    clientId="CcoZ1KAs6avBM9MMcnFiHUsHZeF0Olbc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
