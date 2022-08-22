import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './index2.css';
import AppAdm from './AppAdmin';
//import App from './App';
import { RecoilRoot } from "recoil";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <AppAdm />
    </RecoilRoot>
 {/* <App/> */}
  </React.StrictMode>
);

