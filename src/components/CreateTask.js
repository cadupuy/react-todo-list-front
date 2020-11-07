import React from "react";
import axios from "axios";

const TaskName = ({
  setTaskName,
  taskName,
  createTask,
  setCreateTask,
  errorMessage,
  setErrorMessage,
}) => {
  const handleSubmit = async (e) => {
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

      const data = {
        name: taskName,
        isChecked: false,
      };

      try {
        const response = await axios.post("http://localhost:3000/create", data);
        console.log(response.data);
        if (response.status === 200) {
          alert("Task has been created");
        } else {
          alert("Bad request");
        }
      } catch (error) {
        console.error(error.message);
      }
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
