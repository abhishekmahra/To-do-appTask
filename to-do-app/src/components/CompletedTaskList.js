import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const CompletedTaskList = () => {
  const tasks = useSelector((state) => state.tasks.completedTasks);

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} completed={true} />
      ))}
    </ul>
  );
};

export default CompletedTaskList;
