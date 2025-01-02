import { createRoot } from 'react-dom/client'
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-7smbydghn55vazmj.us.auth0.com"
    clientId="RxvWrc6Y0fwuwLzwo29wjdBhqtj6MTfo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
