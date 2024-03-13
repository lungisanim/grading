import React, { useState } from 'react';
import './App.css';
import JobGradingTable from './JobGradingTable';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Grading System</h1>
      </header>
      <main>
        <JobGradingTable />
      </main>
    </div>
  );
};

export default App;