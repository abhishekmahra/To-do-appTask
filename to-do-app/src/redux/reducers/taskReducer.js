// const initialState = {
//     incompleteTasks: [],
//     completedTasks: [],
//   };
  
//   const taskReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TASK':
//         return {
//           ...state,
//           incompleteTasks: [...state.incompleteTasks, action.payload],
//         };
//       case 'DELETE_INCOMPLETE_TASK':
//         return {
//           ...state,
//           incompleteTasks: state.incompleteTasks.filter((_, index) => index !== action.payload),
//         };
//       case 'DELETE_COMPLETED_TASK':
//         return {
//           ...state,
//           completedTasks: state.completedTasks.filter((_, index) => index !== action.payload),
//         };
//       case 'EDIT_INCOMPLETE_TASK':
//         return {
//           ...state,
//           incompleteTasks: state.incompleteTasks.map((task, index) =>
//             index === action.payload.index ? { ...task, name: action.payload.newTask } : task
//           ),
//         };
//       case 'TOGGLE_COMPLETE_TASK':
//         const { index, completed } = action.payload;
//         if (completed) {
//           const completedTask = state.incompleteTasks[index];
//           return {
//             ...state,
//             incompleteTasks: state.incompleteTasks.filter((_, i) => i !== index),
//             completedTasks: [...state.completedTasks, { ...completedTask, completed: true }],
//           };
//         } else {
//           const incompleteTask = state.completedTasks[index];
//           return {
//             ...state,
//             completedTasks: state.completedTasks.filter((_, i) => i !== index),
//             incompleteTasks: [...state.incompleteTasks, { ...incompleteTask, completed: false }],
//           };
//         }
//       default:
//         return state;
//     }
//   };
  
//   export default taskReducer;
  
import {
  ADD_TASK,
  DELETE_INCOMPLETE_TASK,
  DELETE_COMPLETED_TASK,
  EDIT_INCOMPLETE_TASK,
  TOGGLE_COMPLETE_TASK,
} from '../actions/taskActions';

const initialState = {
  incompleteTasks: [],
  completedTasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        incompleteTasks: [
          ...state.incompleteTasks,
          { 
            name: action.payload.task,
            createdDate: action.payload.createdDate,
            completionDate: action.payload.completionDate 
          }
        ],
      };
    case DELETE_INCOMPLETE_TASK:
      return {
        ...state,
        incompleteTasks: state.incompleteTasks.filter((_, i) => i !== action.payload),
      };
    case DELETE_COMPLETED_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter((_, i) => i !== action.payload),
      };
    case EDIT_INCOMPLETE_TASK:
      return {
        ...state,
        incompleteTasks: state.incompleteTasks.map((task, i) =>
          i === action.payload.index ? { ...task, name: action.payload.newTask } : task
        ),
      };
    case TOGGLE_COMPLETE_TASK:
      if (action.payload.isCompleted) {
        const completedTask = state.incompleteTasks[action.payload.index];
        return {
          ...state,
          incompleteTasks: state.incompleteTasks.filter((_, i) => i !== action.payload.index),
          completedTasks: [...state.completedTasks, completedTask],
        };
      } else {
        const incompleteTask = state.completedTasks[action.payload.index];
        return {
          ...state,
          completedTasks: state.completedTasks.filter((_, i) => i !== action.payload.index),
          incompleteTasks: [...state.incompleteTasks, incompleteTask],
        };
      }
    default:
      return state;
  }
};

export default taskReducer;
