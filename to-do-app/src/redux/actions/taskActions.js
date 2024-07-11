export const addTask = (task) => {
    return {
      type: 'ADD_TASK',
      payload: { name: task, completed: false },
    };
  };
  
  export const deleteIncompleteTask = (index) => {
    return {
      type: 'DELETE_INCOMPLETE_TASK',
      payload: index,
    };
  };
  
  export const deleteCompletedTask = (index) => {
    return {
      type: 'DELETE_COMPLETED_TASK',
      payload: index,
    };
  };
  
  export const editIncompleteTask = (index, newTask) => {
    return {
      type: 'EDIT_INCOMPLETE_TASK',
      payload: { index, newTask },
    };
  };
  
  export const toggleCompleteTask = (index, completed) => {
    return {
      type: 'TOGGLE_COMPLETE_TASK',
      payload: { index, completed },
    };
  };
  

