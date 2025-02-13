import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from './redux/store.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <Provider store={store} >
    <App />

      </Provider>
    </Theme>
  </StrictMode>,
)
