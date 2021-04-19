import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter> </Counter>

        <Counter2></Counter2>

        <Counter3></Counter3>

        <Users></Users>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => console.log('clicked');
  // an arrow function without parameter
  return (
    <div>
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
    <div>
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
    <div>
      <h1>Count: {count}</h1>
      <button style={{ color: 'red' }} onClick={handleIncrease}>Increase </button>
      {/* <button style={{ color: 'red' }} onClick={() => setCount(count + 1)}>Increase </button> */}
      <button style={{ color: 'red' }} onClick={() => setCount(count - 1)}>Decrease</button>
      {/* adding event handler */}
    </div>
  )
}

//  load dynamic data, api call

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log('Calling Effect');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
    // .then(data => console.log(data))
  }, []);
  return (
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      {/* { console.log(users)} */}
    </div>
  );
}

export default App;
