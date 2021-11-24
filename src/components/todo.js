import React from 'react';

const ToDo = ({text, item, toDo, setToDo}) => {

    const deleteHandler = () => {
        setToDo(toDo.filter(el=> el.id !== item.id))
    }

    const completeHandler = () => {
        setToDo(toDo.map(el=> {
            if (el.id === item.id){
                return {
                    ...el, completed: !el.completed,
                }
            }
            return el;
        }));  
    }

    return (
        <div className="todo">
            <li className={`todo-item ${item.completed ? "completed": ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default ToDo;