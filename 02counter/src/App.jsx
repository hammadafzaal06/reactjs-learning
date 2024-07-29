import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div className="todolist">
      <h1>Todo List With React</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Add Your Task"
      />
      <button type="submit" onClick={addTask}>
        Add Task
      </button>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <h4>{task}</h4>
              <button onClick={() => handleDeleteTask(index)}></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
