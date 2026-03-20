import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>KRK Monitoring System</h1>
        <p>Smart Campus + AI Analytics Platform</p>
        <div className="dashboard-grid">
          <div className="card">
            <h2>Teachers</h2>
            <p>Manage teacher profiles and metrics</p>
          </div>
          <div className="card">
            <h2>Evaluations</h2>
            <p>Track КРК evaluations and scores</p>
          </div>
          <div className="card">
            <h2>Analytics</h2>
            <p>View AI-powered insights and KPI</p>
          </div>
          <div className="card">
            <h2>Reports</h2>
            <p>Generate and export reports</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
