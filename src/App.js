import './App.css';
import Todo from './Todo.js' ;
import { useReducer,useState } from 'react';
export const ACTIONS = {
  ADD_TODO:'add-todo',
  DELETE_TODO:'delete-todo',
  TOGGLE_TODO:'TOGGLE-TODO'

}

function App() {
  const [name,setname]=useState('');
  function reducer(todos,action){
    switch(action.type){
      case ACTIONS.ADD_TODO:return[...todos,newtodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:return todos.map(todo=>{
        if(todo.id == action.payload.id){
        return {...todo,complete:!todo.complete}}
        return todo;
      })
      case ACTIONS.DELETE_TODO:return todos.filter(todo=>
       todo.id !== action.payload.id
      )
      default:
        return todos;
    }
    } 
    function newtodo(name){
return {id:new Date(),name:name,complete:false};
    }
  
  const [todos,dispatch]=useReducer(reducer,[]);
  function handlesubmit(e){

    e.preventDefault();
    console.log(name);
    dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}});
    setname('');



  }
  console.log(todos);
  return (
    <div className="App">
      <form onSubmit={(e)=>handlesubmit(e)}>
    <input placeholder='add new todo....' type="text"  name="name" value={name} onChange={(e)=>{setname(e.target.value)}} /></form>
 
  {todos.map(todo=>{return<Todo key={todo.id} todo={todo} dispatch={dispatch} />})}
    </div>
  );
}

export default App;
