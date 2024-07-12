import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.incompleteTasks);

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} completed={false} />
      ))}
    </ul>
  );
};

export default TaskList;



