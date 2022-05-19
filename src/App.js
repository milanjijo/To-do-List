import React, { useState,useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import Todolist from "./components/Todolist";


function App() {
  
  //State stuff
  const [inputText,setInputText]= useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);
  //Functions
  const filterHandler=()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed=== true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo)=> todo.completed=== false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //USE EFFECT
  useEffect(()=>{
    filterHandler();
    },[todos,status]);
  
  
  /*const saveLocalStorage=()=> {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      localStorage.setItem('todos',JSON.stringify(todos));
    }
  };*/

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        
        />
      <Todolist setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
      <div></div>
    </div>
  );
}

export default App;
