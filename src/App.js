import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form'
import ToDoList from './components/todolist'

function App() {
  //useState
  const [inputText, setInputText] = useState("");
  const [toDo, setToDo] = useState([]);
  const [status,setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  //useEffect, run once since 2,d arg is empty arr
  useEffect(()=>{
    getLocalStorage();
  },[]);

  //useEffect, everytime when 2nd arg is changed
  useEffect(()=>{
    filterHandler();
    saveLocalStorage();
  },[toDo, status]);

  //data present for filter
  const filterHandler = () => {
    switch (status){
      case 'completed':
        setFilter(toDo.filter(s => s.completed === true));
        break;
      case 'uncompleted':
        setFilter(toDo.filter(s => s.completed === false));
        break;
      default:
        setFilter(toDo)
        break;
    }
  }

  //save to local storage
  const saveLocalStorage = () => {
    localStorage.setItem('toDo', JSON.stringify(toDo));
  }

  const getLocalStorage = () => {
    if (localStorage.getItem('toDo')===null){
      localStorage.setItem('toDo', JSON.stringify([]));
    }else{
      setToDo(JSON.parse(localStorage.getItem('toDo')));
    }
  }

  return (
    <div className="App">
      <header>
      <h1>To do List App</h1>
      </header>
      <Form 
      toDo={toDo} 
      setToDo={setToDo} 
      inputText={inputText} 
      setInputText={setInputText}
      setStatus={setStatus}
      />
      <ToDoList 
      toDo={toDo} 
      setToDo={setToDo}
      filter={filter}
      />
    </div>
  );
}

export default App;
