import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

//translation
import i18n from '../i18n/i18n';
import { I18nextProvider } from "react-i18next";

const subdomain =window.location.hastname.split('.')[0];
const getLanguageFromSubdomain = () => {
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    return subdomain === 'ar' ? 'ar' : 'en'; // Default to English if no matching subdomain
  };
  
  const language = getLanguageFromSubdomain();
  i18n.changeLanguage(language);

root.render(
  <I18nextProvider i18n={i18n}>
  <App subdomain={subdomain} />
</I18nextProvider>
);




