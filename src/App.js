import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import CreateTask from "./components/CreateTask";
import Footer from "./components/Footer";

// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faListAlt);

function App() {
  // Task name state
  const [taskName, setTaskName] = useState("");
  // Tasks array
  const [createTask, setCreateTask] = useState([]);
  // Error message

  const [errorMessage, setErrorMessage] = useState("");
  return (
    <>
      <Header />
      <Tasks createTask={createTask} setCreateTask={setCreateTask} />
      <CreateTask
        createTask={createTask}
        setCreateTask={setCreateTask}
        taskName={taskName}
        setTaskName={setTaskName}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
      />
      <Footer />
    </>
  );
}

export default App;
