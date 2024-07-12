// export const addTask = (task) => {
//     return {
//       type: 'ADD_TASK',
//       payload: { name: task, completed: false },
//     };
//   };
  
//   export const deleteIncompleteTask = (index) => {
//     return {
//       type: 'DELETE_INCOMPLETE_TASK',
//       payload: index,
//     };
//   };
  
//   export const deleteCompletedTask = (index) => {
//     return {
//       type: 'DELETE_COMPLETED_TASK',
//       payload: index,
//     };
//   };
  
//   export const editIncompleteTask = (index, newTask) => {
//     return {
//       type: 'EDIT_INCOMPLETE_TASK',
//       payload: { index, newTask },
//     };
//   };
  
//   export const toggleCompleteTask = (index, completed) => {
//     return {
//       type: 'TOGGLE_COMPLETE_TASK',
//       payload: { index, completed },
//     };
//   };
  

export const ADD_TASK = 'ADD_TASK';
export const DELETE_INCOMPLETE_TASK = 'DELETE_INCOMPLETE_TASK';
export const DELETE_COMPLETED_TASK = 'DELETE_COMPLETED_TASK';
export const EDIT_INCOMPLETE_TASK = 'EDIT_INCOMPLETE_TASK';
export const TOGGLE_COMPLETE_TASK = 'TOGGLE_COMPLETE_TASK';

export const addTask = (task, createdDate, completionDate) => ({
  type: ADD_TASK,
  payload: { task, createdDate, completionDate },
});

export const deleteIncompleteTask = (index) => ({
  type: DELETE_INCOMPLETE_TASK,
  payload: index,
});

export const deleteCompletedTask = (index) => ({
  type: DELETE_COMPLETED_TASK,
  payload: index,
});

export const editIncompleteTask = (index, newTask) => ({
  type: EDIT_INCOMPLETE_TASK,
  payload: { index, newTask },
});

export const toggleCompleteTask = (index, isCompleted) => ({
  type: TOGGLE_COMPLETE_TASK,
  payload: { index, isCompleted },
});




