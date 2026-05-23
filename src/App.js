import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addTask } from './taskSlice';

function App() {
  const [taskText, setTaskText] = useState('');
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = taskText.trim();
    if (!trimmedText) return;
    dispatch(addTask(trimmedText));
    setTaskText('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task List</h1>
        <form onSubmit={handleSubmit} className="task-form">
          <input
            type="text"
            value={taskText}
            onChange={(event) => setTaskText(event.target.value)}
            placeholder="Enter a task"
          />
          <button type="submit">Add Task</button>
        </form>
        {tasks.length === 0 ? (
          <p>No tasks yet. Add your first task.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
