import logo from './logo.svg';
import './App.css';
import ShoppingList from './components/ShoppingList'
import ConsoleLoggingButton from './components/InteractiveComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ShoppingList name="Shannon" />
        <ConsoleLoggingButton name="Click Me!" />
      </header>
    </div>
  );
}

export default App;
