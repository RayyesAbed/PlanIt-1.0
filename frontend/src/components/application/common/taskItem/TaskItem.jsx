import styles from "./TaskItem.module.css";

const TaskItem = ({ taskName, taskDueDate, taskPriority, taskDescription }) => {
  return (
    <div>
      <img />
      <div>
        <h2>{taskName}</h2>
        <h2>{taskDueDate}</h2>
        <h2>{taskPriority}</h2>
      </div>
      <h3>{taskDescription}</h3>
    </div>
  );
};

export default TaskItem;
