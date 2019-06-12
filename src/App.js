import React from 'react';
import { Link } from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/main">
            Todo应用
        </Link>
      </header>
    </div>
  );
}

export default App;
