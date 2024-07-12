// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../redux/actions/taskActions';

// const TaskInput = () => {
//   const [task, setTask] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       dispatch(addTask(task));
//       setTask('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="✍️Add a new task"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default TaskInput;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const createdDate = new Date().toISOString();
      dispatch(addTask(task, createdDate, completionDate));
      setTask('');
      setCompletionDate('');
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>
            Task:
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="✍️Add a new task"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Start Date:
            <input
              type="datetime-local"
              value={new Date().toISOString().slice(0, 16)}
              readOnly
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            Completion Date:
            <input
              type="datetime-local"
              value={completionDate}
              onChange={(e) => setCompletionDate(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Add Task</button>
      </form>
   
  );
};

export default TaskInput;
