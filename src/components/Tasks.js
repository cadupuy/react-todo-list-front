import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tasks = ({ createTask, setCreateTask }) => {
  const handleClick = (index) => {
    const newTab = [...createTask];
    newTab.splice(index, 1);
    setCreateTask(newTab);
  };
  return createTask.map((task, index) => {
    return (
      <div key={index} className="tasks-list">
        {task.isChecked === true ? (
          <input
            onClick={() => {
              if (task.isChecked) {
                const newTab = [...createTask];
                newTab[index].isChecked = false;
                setCreateTask(newTab);
              } else {
                const newTab = [...createTask];
                newTab[index].isChecked = true;
                setCreateTask(newTab);
              }
            }}
            type="checkbox"
            checked
          />
        ) : (
          <input
            onClick={() => {
              if (task.isChecked) {
                const newTab = [...createTask];
                newTab[index].isChecked = false;
                setCreateTask(newTab);
              } else {
                const newTab = [...createTask];
                newTab[index].isChecked = true;
                setCreateTask(newTab);
              }
            }}
            type="checkbox"
          />
        )}

        <p className={task.isChecked === true ? "stroke" : "task"}>
          {task.name}
        </p>

        <FontAwesomeIcon
          className="delete-task"
          onClick={() => {
            handleClick(index);
          }}
          icon="trash"
        />
      </div>
    );
  });
};

export default Tasks;
