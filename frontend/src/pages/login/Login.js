import React from 'react';
import './Login.css';

function Login({ onClose, switchForm }) {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <button onClick={switchForm}>Signup</button>
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Login;
