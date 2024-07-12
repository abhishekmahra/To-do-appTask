import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import CompletedTaskList from './components/CompletedTaskList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React To-Do App</h1>
      </header>
      <div className="container">
        <div className="task-input-container">
          <TaskInput />
        </div>
        <div className="task-lists-container">
          <div className="task-list">
            <h2>To-Do Tasks</h2>
            <TaskList />
          </div>
          <div className="completed-task-list">
            <h2>Completed Tasks</h2>
            <CompletedTaskList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


