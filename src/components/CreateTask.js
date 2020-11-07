import React from "react";

const TaskName = ({
  setTaskName,
  taskName,
  createTask,
  setCreateTask,
  errorMessage,
  setErrorMessage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      setErrorMessage("");
      // Push new task on the array creatTask
      const newTask = [...createTask];
      newTask.unshift({
        name: taskName,
        isChecked: false,
      });
      setCreateTask(newTask);
      setTaskName("");
    } else {
      setErrorMessage("Please, be sure that the input isnt empty");
    }
  };

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          // If error message, input border red
          className={errorMessage !== "" && "input-error"}
          onChange={handleTaskName}
          type="text"
          value={taskName}
          placeholder="new task"
        />
        <input type="submit" value="Add task" />
      </form>

      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default TaskName;
