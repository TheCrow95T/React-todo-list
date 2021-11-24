import React from 'react';
import ToDo from './todo';

const ToDoList = ({toDo, setToDo, filter}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filter.map(item => (
                    <ToDo 
                    toDo={toDo} 
                    setToDo={setToDo} 
                    key={item.id}
                    item = {item}
                    text={item.text}
                    />
                ))}
            </ul>
        </div>
    )
};


export default ToDoList;