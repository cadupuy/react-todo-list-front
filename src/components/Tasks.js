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
        <input
          onClick={() => {
            if (task.isChecked) {
              // const newTab = [...createTask];
              // newTab[index].isChecked = false;
              // setCreateTask(newTab);

              const newTab = [...createTask];
              console.log(newTab);
              newTab.splice(index, 1);
              newTab.unshift({ name: task.name, isChecked: false });
              setCreateTask(newTab);
            } else {
              // const newTab = [...createTask];
              // newTab[index].isChecked = true;
              // setCreateTask(newTab);
              const newTab = [...createTask];
              console.log(newTab);
              newTab.splice(index, 1);
              newTab.push({ name: task.name, isChecked: true });
              setCreateTask(newTab);
            }
          }}
          type="checkbox"
          id={task.name}
        />
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
