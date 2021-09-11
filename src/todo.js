import "./todo.css";

const Todo = ({ task, removeTask, id }) => {
  return (
    <div className="Todo" id={id}>
      <div className="Todo-Task">
        <h3 className="Todo-title">{task}</h3>
      </div>

      <div className="Todo-Options">
        <button onClick={removeTask}>Complete</button>
        <button onClick={removeTask}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
