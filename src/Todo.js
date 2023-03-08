import React from 'react';
import './Todo.css';
import {ACTIONS} from './App.js';
const Todo = ({todo,dispatch}) => {
    return( <div>
<span className={todo.complete?'done':null}>{todo.name}</span>
<button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id:todo.id}})}
 >toggle</button>
<button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO,payload:{id:todo.id}})}>delete</button>
    </div>)
}



export default Todo;


