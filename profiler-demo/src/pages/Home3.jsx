import React, { Profiler, useEffect, useState, memo } from 'react';

const UserList = memo(({ users }) => {
  console.log('Rendering UserList');
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}   
        </li>
      ))}
    </ul>
  );
});

function Home3() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);


  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log(`[Profiler][${id}]`, {
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    });
  };

  return (
    <div>
      <h1>React Profiler with memo()</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>
        Re-render Home3 ({counter})
      </button>

      <Profiler id="UserList" onRender={onRenderCallback}>
        {loading ? <p>Loading...</p> : <UserList users={users} />}
      </Profiler>
    </div>
  );
}

export default Home3;
