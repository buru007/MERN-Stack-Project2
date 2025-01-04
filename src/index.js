import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import './index.css'; // Optional: for global styles
import App from './App'; // Importing the Navbar component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS


// Get the root element from the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the Navbar component to the root div
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);