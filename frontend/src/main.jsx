import { createRoot } from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Importing router components
import App from "./App.jsx";
import Dashboard from './pages/Dashboard.jsx'
// import Notification from "./components/Notification.jsx";
import "./index.css";

createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/* Main Route */}
      <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
    </Routes>
  </Router>
);


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
