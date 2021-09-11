import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./newtodoform";
import Todo from "./todo";
import "./todolist.css";

const TodoList = () => {
  const INITIALSTATE = [
    {
      name: "Create Your First Task",
      id: 1,
    },
  ];

  const [tasks, setTask] = useState(INITIALSTATE);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const createTask = (e) => {
    e.preventDefault();
    setTask((data) => [...data, { name: newTask, id: uuidv4() }]);
    setNewTask("");
  };

  const removeTask = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.parentNode.parentNode.id;
    setTask((data) => data.filter((t) => t.id !== targetId));
  };

  return (
    <div className="TodoList">
      {tasks.map((t) => (
        <Todo task={t.name} removeTask={removeTask} key={t.id} id={t.id} />
      ))}
      <NewTodoForm
        createTask={createTask}
        handleChange={handleChange}
        text={newTask}
      />
    </div>
  );
};

export default TodoList;
