// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import {
//   deleteIncompleteTask,
//   deleteCompletedTask,
//   editIncompleteTask,
//   toggleCompleteTask,
// } from '../redux/actions/taskActions';
// import { EditIcon, DeleteIcon, CompleteIcon, UndoIcon } from './Icons';

// const TaskItem = ({ task, index, completed }) => {
//   const dispatch = useDispatch();
//   const [isEditing, setIsEditing] = useState(false);
//   const [newTask, setNewTask] = useState(task.name);

//   const handleDelete = () => {
//     if (completed) {
//       dispatch(deleteCompletedTask(index));
//     } else {
//       dispatch(deleteIncompleteTask(index));
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     dispatch(editIncompleteTask(index, newTask));
//     setIsEditing(false);
//   };

//   const handleToggleComplete = () => {
//     dispatch(toggleCompleteTask(index, !completed));
//   };

//   return (
//     <li>
//       {isEditing ? (
//         <>
//           <input
//             type="text"
//             value={newTask}
//             onChange={(e) => setNewTask(e.target.value)}
//           />
//           <button onClick={handleSave}>Save</button>
//         </>
//       ) : (
//         <>
//           <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
//             {task.name}
//           </span>
//           {!completed && <EditIcon onClick={handleEdit} />}
//           <button onClick={handleToggleComplete}>
//             {completed ? <UndoIcon /> : <CompleteIcon />}
//           </button>
//         </>
//       )}
//       <DeleteIcon onClick={handleDelete} />
//     </li>
//   );
// };

// export default TaskItem;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteIncompleteTask,
  deleteCompletedTask,
  editIncompleteTask,
  toggleCompleteTask,
} from '../redux/actions/taskActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, index, completed }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.name);

  const handleDelete = () => {
    if (completed) {
      dispatch(deleteCompletedTask(index));
    } else {
      dispatch(deleteIncompleteTask(index));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editIncompleteTask(index, newTask));
    setIsEditing(false);
  };

  const handleToggleComplete = () => {
    dispatch(toggleCompleteTask(index, !completed));
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task.name}
          </span>
          <span>Created: {new Date(task.createdDate).toLocaleString()}</span>
          {task.completionDate && <span>Due: {new Date(task.completionDate).toLocaleString()}</span>}
          {!completed && <FontAwesomeIcon icon={faEdit} onClick={handleEdit} />}
          <button onClick={handleToggleComplete}>
            {completed ? <FontAwesomeIcon icon={faUndo} /> : <FontAwesomeIcon icon={faCheck} />}
          </button>
        </>
      )}
      <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
    </li>
  );
};

export default TaskItem;



