import React from 'react';

//{setInputText} here is destructuring from props
const Form = ({setInputText, inputText, setToDo, toDo, setStatus}) => {
    //when typing on the form
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitHandler = (e) =>{
        //prevent refresh page when click the button to submit
        e.preventDefault();
        setToDo([
            ...toDo, {text: inputText, completed: false , id: inputText + "is ID"}
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;