import "./newtodoform.css";

const NewTodoForm = ({ text, createTask, handleChange }) => {
  return (
    <div className="NewTodoForm">
      <form className="NewTodoForm-Form" onSubmit={createTask}>
        <label htmlFor="text">Task Title: </label>
        <input
          id="text"
          name="text"
          type="text"
          placeholder="Buy Film"
          value={text}
          onChange={handleChange}
        ></input>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
