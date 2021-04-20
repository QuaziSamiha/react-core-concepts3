import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter> </Counter>

        <Counter2></Counter2>

        <Counter3></Counter3>

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => console.log('clicked');
  // an arrow function without parameter
  return (
    <div style={{ border: '2px solid gray', margin: '10px', padding: '10px' }}>
      <h1>Count: {count}</h1>
      <button style={{ color: 'green' }} onClick={handleIncrease}>Increase </button>
      {/* adding event handler */}
    </div>
  )
}

function Counter2() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    // setCount(count + 1);
  };
  return (
    <div style={{ border: '2px solid gray', margin: '10px', padding: '10px' }}>
      <h1>Count: {count}</h1>
      <button style={{ color: 'red' }} onClick={handleIncrease}>Increase </button>
      {/* adding event handler */}
    </div>
  )
}

function Counter3() {
  const [count, setCount] = useState(5);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div style={{ border: '2px solid gray', margin: '10px', padding: '10px' }}>
      <h1>Count: {count}</h1>
      <button style={{ color: 'red' }} onClick={handleIncrease}>Increase </button>
      {/* <button style={{ color: 'red' }} onClick={() => setCount(count + 1)}>Increase </button> */}
      <button style={{ color: 'red' }} onClick={() => setCount(count - 1)}>Decrease</button>
      {/* adding event handler */}
    </div>
  )
}

export default App;
