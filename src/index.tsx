import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./features/store";

import global_es from "./i18n/es/global.json";
import global_en from "./i18n/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    es: {
      global: global_es
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
   <I18nextProvider i18n={i18next} >
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pokédex React Ts</title>
        <meta
          name="description"
          content="a simple pokédex for your pokemon needs."
        />
      </Helmet>
      <Provider store={store}>
        <App />
      </Provider>
    </HelmetProvider>
   </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
