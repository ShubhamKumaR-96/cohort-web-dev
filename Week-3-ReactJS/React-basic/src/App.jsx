import { useState } from "react";
import "./App.css";
import AddTodo from "./components/Todos/AddTodo";
import TodoList from "./components/Todos/TodoList";

function App() {
  const [todoList,setTodoList] = useState([
    { id: 1, text: "Complete React tutorial", isFinished: true },
    { id: 2, text: "Build a todo app", isFinished: false },
    { id: 3, text: "Learn useState hook", isFinished: true },
    { id: 4, text: "Practice useEffect", isFinished: false },
    { id: 5, text: "Create a portfolio project", isFinished: false },
  ]);

  function addTodo(todoText) {
    const newId = todoList.length + 1;
    setTodoList([...todoList,{id:newId,text:todoText,isFinished:false}])
  }

  return (
    <>
      <div>
        <AddTodo addTodo={addTodo} setTodoList={setTodoList} />
        <TodoList todos={todoList} setTodoList={setTodoList}/>
      </div>
    </>
  );
}

export default App;
