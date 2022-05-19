import React from "react";
//importing Components
import Todo from "./Todo"

const Todolist =({todos,setTodos,filteredTodos}) => {

  return(
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo=> (
          <Todo 
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
            text={todo.text} 

          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
