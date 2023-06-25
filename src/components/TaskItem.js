import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  const formattedDate = task.date.toLocaleDateString('en-US');
  const formattedTime = task.date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
  });

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      onDelete(task.id);
    }
  };

  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <div>
        <span className="task-title" onClick={() => onToggle(task.id)}>
          {task.title}
        </span>
        
        <span className="task-activity">{task.activity}</span>
        <span className="task-duration">{task.duration}</span>
        <span className="task-date">{formattedDate}</span>
        <span className="task-time">{formattedTime}</span>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );    
};

export default TaskItem;
