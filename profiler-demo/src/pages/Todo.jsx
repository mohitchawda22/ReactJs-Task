import React, { useEffect, useState, Profiler } from "react";

const ToDoList = ({ todos }) => {
  console.log("Rendering ToDoList");
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

const ToDoListMemo = React.memo(({ todos }) => {
  console.log("Rendering ToDoListMemo");
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" defaultChecked={todo.completed} />
          {todo.title}
        </li>
      ))}
    </ul>
  );
});

export default function App() {
  const [allTodos, setAllTodos] = useState([]); 
  const [visibleTodos, setVisibleTodos] = useState([]); 
  const [index, setIndex] = useState(0);
  const [useMemoized, setUseMemoized] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        setAllTodos(data);
        console.log("hello");
      });
  }, []);

  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration
  ) => {
    console.log(`[Profiler][${id}]`, {
      phase,
      actualDuration: `${actualDuration.toFixed(2)}ms`,
      baseDuration: `${baseDuration.toFixed(2)}ms`,
    });
  };

  const handleAddTodo = () => {
    if (index < allTodos.length) {
      setVisibleTodos(prev => [...prev, allTodos[index]]);
      setIndex(prev => prev + 1);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>React ToDo Profiler Test</h1>
      <button onClick={handleAddTodo}>Add ToDo</button>{" "}
      <button onClick={() => setUseMemoized(p => !p)}>
        Toggle Memo ({useMemoized ? "ON" : "OFF"})
      </button>

      <Profiler id="ToDoList" onRender={onRenderCallback}>
        {useMemoized ? (
          <ToDoListMemo todos={visibleTodos} />
        ) : (
          <ToDoList todos={visibleTodos} />
        )}
      </Profiler>
    </div>
  );
}
