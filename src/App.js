import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './store/Counter';
import Todolist from './store/Todolist';

function App() {
  return (
    <Provider store={store}>
    <div className="border border-2 border-2 border-warning p-2 m-2">
     <h1>Scratch-Redux</h1>
     <Counter></Counter> 
     <Todolist></Todolist>
    </div>
    </Provider>
  );
}

export default App;
