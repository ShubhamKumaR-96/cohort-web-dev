import { useState } from "react";
import "./TodoApp.css";

const TodoApp = ({ text, isFinished, deleteTodo, editTodo ,toggleComplete}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoText, setTodoText] = useState(text);

  return (
    <div className="todo-app">
      <input type="checkbox" className="todo-checkbox" checked={isFinished} onChange={toggleComplete} />
      {isEditing ? (
        <input value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      ) : (
        <span className={`todo-text ${isFinished ? "completed" : ""}`}>
          {text}
        </span>
      )}
      <button
        className="todo-edit-btn"
        onClick={() => {
          setIsEditing(!isEditing);
          editTodo(todoText)
        }}
      >
       {isEditing ?  "Save" : "Edit"}
      </button>
      <button className="todo-delete-btn" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
};

export default TodoApp;
