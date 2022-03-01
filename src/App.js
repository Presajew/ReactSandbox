import './App.css';
import ShoppingList from './components/ShoppingList'
import ConsoleLoggingButton from './components/InteractiveComponent';
import SimpleFunctionComponent from './components/SimpleFunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShoppingList name="Shannon" />
        <ConsoleLoggingButton name="Click Me!" />
        <SimpleFunctionComponent name="Someone Else" />
      </header>
    </div>
  );
}

export default App;
