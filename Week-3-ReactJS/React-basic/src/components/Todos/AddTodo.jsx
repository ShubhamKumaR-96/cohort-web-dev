import React, { useState } from "react";
import "./TodoApp.css";


const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <input
        text="add yout todo here ..."  className="todo-edit-input" 
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button style={{padding:"10px", fontSize:"15px", fontWeight:"bold", borderRadius:"10px"}}
        onClick={() => {
          addTodo(newTodo), setNewTodo("");
        }}
      >
        submit
      </button>
    </>
  );
};

export default AddTodo;
