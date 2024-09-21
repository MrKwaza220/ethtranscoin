import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Optional: Create a CSS file for styling

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
     <div className="container">
    <div className="home-container">

    <div className="welcome-container">
      <h1>Welcome to Transcoin Solutions</h1>
      <p>
        We are delighted to have you here. Our platform allows you to easily purchase tickets for your favorite bus operators.
      </p>
      <p>
        Select your operator, choose the number of tickets, and enjoy your journey!
      </p>
      <div className="welcome-actions">
        <button onClick={() => navigate('/operatordashboard')}>Purchase Ticket</button>
        <button onClick={() => alert('Learn more about us')}>Learn More</button>
      </div>
    </div>
    <div className="home-picture">
      <img src="home-page.png"></img>
    </div>
    </div>
     </div>
    </div>
  );
}

export default Home;
