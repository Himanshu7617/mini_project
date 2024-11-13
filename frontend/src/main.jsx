import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import Notification from "./components/Notification.jsx";
import "./index.css";


createRoot(document.getElementById('root')).render(
  <App></App>
)



//leave the commented part as it is sir!!!


// const rootElement = document.getElementById('root');
// const popupElement = document.getElementById('popup-root');

// if (rootElement ) {

//   createRoot(rootElement).render(<App />);
// }else {
//   createRoot(popupElement).render(<Notification />);

// }


// import React from 'react';
// import ReactDOM from 'react-dom';
// import Notification from './Notification';
// import Dashboard from './Dashboard';

// const rootElement = document.getElementById('root');
// const popupElement = document.getElementById('popup-root');

// if (rootElement) {
//     ReactDOM.render(<Dashboard />, rootElement);
// } else if (popupElement) {
//     ReactDOM.render(<Notification />, popupElement);
// }
