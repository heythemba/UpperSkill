import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './normalize.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './UserProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
    <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
