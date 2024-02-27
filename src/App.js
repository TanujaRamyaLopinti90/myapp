
import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/counter">counter</Link>
      <br/>
      <Link to="/Todo">Todo</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
