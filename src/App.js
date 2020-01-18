import React, {useState} from 'react';
import './App.css';

import TodoCreator from "./components/TodoCreator";
import TodoList from "./components/TodoList";

const descOrder = (a, b) => {
    const at = a.title.toLowerCase();
    const bt = b.title.toLowerCase();
    if (bt < at) {
      return -1;
    }
    if (at > bt) {
      return 1;
    }
    return 0;
}

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  window.addEventListener("beforeunload", localStorage.setItem('tasks', JSON.stringify(tasks)));

  const createTask = (title) => {
    const newTask = {title: title, completed: false, id: Date.now()};
    const newTasks = [newTask, ...tasks];
    newTasks.sort(descOrder);
    setTasks(newTasks);
  }
  
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id!==id));
  }

  const updateTaskTitle = (id, title) => {
    const newTasks = [...tasks];
    newTasks.forEach(task => task.id === id && (task.title = title));
    newTasks.sort(descOrder);
    setTasks(newTasks);
  }

  const toggleCompleteTask = (id, completed) => {
    const newTasks = [...tasks];
    newTasks.forEach(task => task.id === id && (task.completed = completed));
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <TodoCreator onTaskCreateHandler={createTask} />
      <TodoList
        tasks={tasks}
        onTitleChange={updateTaskTitle}
        onCompleteChange={toggleCompleteTask}
        onRemove={removeTask}
      />
    </div>
  );
}

export default App;
