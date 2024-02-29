
import './App.css';
import Counter from './counter';
import Todolist from './todolist';

function App() {
  return (
    <div className="mybox">
      <h1>Welcome to redux</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      
    </div>
  );
}

export default App;
