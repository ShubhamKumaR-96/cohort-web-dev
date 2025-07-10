import TodoApp from "./TodoApp";
import "./TodoList.css"; // Import the CSS file

const TodoList = ({ todos, setTodoList }) => {

    function onDeleteTodo(id){
        const newTodos=todos.filter((todo)=>todo.id !==id)
        setTodoList(newTodos)
    }

     const onEditTodo = (id, newText) => {
        setTodoList(todos.map(todo => 
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    const toggleFinished=(id)=>{
        setTodoList(todos.map(todo =>
            todo.id === id ? { ...todo, isFinished: !todo.isFinished } : todo
        ));
    }

  return (
    <div className="todo-container">
      {todos && todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <TodoApp
                key={todo.id}
                text={todo.text}
                isFinished={todo.isFinished}
                editTodo={(newText) => onEditTodo(todo.id, newText)}
                deleteTodo={()=>onDeleteTodo(todo.id)}
                toggleComplete={()=>toggleFinished(todo.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">No todos found. Add some tasks!</p>
      )}
    </div>
  );
};

export default TodoList;