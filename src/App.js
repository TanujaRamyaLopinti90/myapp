
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';

function App() {
  return (
    <Provider store={store}>
    <div className="betterview">
      <h1>Welcome to Redux</h1>
      <Counter></Counter>
    </div>
    </Provider>
  );
}

export default App;
