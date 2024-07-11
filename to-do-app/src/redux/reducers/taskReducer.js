const initialState = {
    incompleteTasks: [],
    completedTasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          incompleteTasks: [...state.incompleteTasks, action.payload],
        };
      case 'DELETE_INCOMPLETE_TASK':
        return {
          ...state,
          incompleteTasks: state.incompleteTasks.filter((_, index) => index !== action.payload),
        };
      case 'DELETE_COMPLETED_TASK':
        return {
          ...state,
          completedTasks: state.completedTasks.filter((_, index) => index !== action.payload),
        };
      case 'EDIT_INCOMPLETE_TASK':
        return {
          ...state,
          incompleteTasks: state.incompleteTasks.map((task, index) =>
            index === action.payload.index ? { ...task, name: action.payload.newTask } : task
          ),
        };
      case 'TOGGLE_COMPLETE_TASK':
        const { index, completed } = action.payload;
        if (completed) {
          const completedTask = state.incompleteTasks[index];
          return {
            ...state,
            incompleteTasks: state.incompleteTasks.filter((_, i) => i !== index),
            completedTasks: [...state.completedTasks, { ...completedTask, completed: true }],
          };
        } else {
          const incompleteTask = state.completedTasks[index];
          return {
            ...state,
            completedTasks: state.completedTasks.filter((_, i) => i !== index),
            incompleteTasks: [...state.incompleteTasks, { ...incompleteTask, completed: false }],
          };
        }
      default:
        return state;
    }
  };
  
  export default taskReducer;
  
