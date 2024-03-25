import React from 'react';

import Nav from './features/Nav';
import './App.css'
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="mybox">
    
         <Nav></Nav>
        <Outlet></Outlet>
       
    </div>
  );
}

export default App;
