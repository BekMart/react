import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalGreetingWithProps greeting="nice to meet you!" name="Becki" age="35" />
      </header>
    </div>
  );
}

export default App;
