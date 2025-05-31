
import React, { useState } from 'react'
import './../styles/App.css';

const App = () => {
 const [ todo, setTodo] = useState("");
  const[list , setList] = useState([])
  const addTodoHandler = () =>{
    setList([...list,todo])
    setTodo("");
  }
  const deleteTodoHandler = (td) =>{
    setList(list.filter(t => td!==t));
  }
  
  return (
    <div>
        <h1>To-Do List </h1>
        <input type='text' value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        ></input>
        <button onClick={addTodoHandler}>Add Todo</button>
     <ul>
      {
        list.length>0 && 
        list.map(td => {
          return <li key={td}> {td} 
            <button onClick={()=>deleteTodoHandler(td)}>Delete</button>
          </li>
        })
        
      }
     </ul>

    </div>
  )
}

export default App
