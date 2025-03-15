import React from "react";
import { Link } from "react-router-dom";
import '../pages/WelcomePage.css';


function WelcomePage() {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Toll Management System!</h1>
      <p>Use the app to view statistics, maps, and manage toll information.</p>
      <Link to="/stats" className="welcome-button">Go to the App</Link>
    </div>
  );
}

export default WelcomePage;
