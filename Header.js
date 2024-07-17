import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <div className="header-content">
        <h1>Welcome to the Student Report Evaluation System</h1>
        <p>Select your role to log in:</p>
        <p onClick={()=> window.location.href="./AdminLogin.js"}></p>
        <div className="login-options">
          <button className="login-btn" onClick={() => window.location.href = "AdminLogin.js"}>
            <i className="fas fa-user-shield"></i> Admin Login
          </button>
          <button className="login-btn" onClick={() => window.location.href = '/student-login'}>
            <i className="fas fa-user-graduate"></i> Student Login
          </button>
          <button className="login-btn" onClick={() => window.location.href = '/internal-login'}>
            <i className="fas fa-user-tie"></i> Internal Evaluator Login
          </button>
          <button className="login-btn" onClick={() => window.location.href = '/external-login'}>
            <i className="fas fa-user-check"></i> External Evaluator Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
