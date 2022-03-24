import logo from './logo.svg';
import './App.css';
import TestButton from './components/TestButton';
import Clock from './components/Clock';
import { useState } from 'react';

function App() {
  const [showClock, setShowClock] = useState(true);

  let maybeClock = null;
  if (showClock) {
    maybeClock = <Clock />
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Effects demo </h1>
      </header>
      <TestButton />

      <button onClick={() => setShowClock(!showClock)}>Toggle clock</button>
      {maybeClock}
    </div>
  );
}

export default App;
