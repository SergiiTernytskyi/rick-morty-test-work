import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="868184965280-0qjhki2qkmqs1m33o270uue2fm16j93s.apps.googleusercontent.com">
      <BrowserRouter basename="/rick-morty-test-work">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
