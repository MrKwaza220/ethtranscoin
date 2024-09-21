import React from 'react';

function Signup({ onClose, switchForm }) {
  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <button onClick={switchForm}>Login</button>
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Signup;
