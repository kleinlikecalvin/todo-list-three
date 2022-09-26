import "./App.scss";
import TaskForm from "./components/TaskForm";
import React from "react";

function App() {
  const [tasks, setTasks] = React.useState([]);
  return (
    <div className="App">
      <TaskForm tasks={(task) => setTasks([task, ...tasks])} />
      <ul>
        {tasks.map((task) => {
          return (
            <li className="task" key={task}>
              <input
                type={"checkbox"}
                onClick={(event) => {
                  if (event.target.checked) {
                    event.target.parentElement.classList.add("done");
                  } else {
                    event.target.parentElement.classList.remove("done");
                  }
                }}
              />
              {task}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
