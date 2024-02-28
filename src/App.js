import React from 'react';
import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <center>
    <div className="App">
      <h1>App Comp</h1>
      <Link to="counter">counter</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="Todo">Todo</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="countries">Countries</Link>
      <Outlet></Outlet>
    </div>
    </center>
  );
}

export default App;
