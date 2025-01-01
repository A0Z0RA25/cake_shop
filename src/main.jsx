import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-ucambo6p6b8o5b5c.us.auth0.com"
  clientId="Ubc0jPPsleypLtUReFbRqtIKdhYRQqbd"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
>
  <App />
</Auth0Provider>,
)
