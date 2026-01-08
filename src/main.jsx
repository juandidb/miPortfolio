import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { I18nProvider } from './i18n/index.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
      <ThemeProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);