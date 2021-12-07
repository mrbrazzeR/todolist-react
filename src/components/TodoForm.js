import React, { useState,useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("")

  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  })

  const handleChange= e=>{
    setInput(e.target.value);
  }
  
  const handleSubmit= e=>{
    e.preventDefault();
    
    props.onSubmit({
      id:Math.floor(Math.random()*10000),
      text:input
    })
    setInput('')
  }
  return(
    <div>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Them vao list todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
      </form>
      <button className="todo-button" onClick={handleSubmit}>Them</button>
    </div>
  );
}
export default TodoForm;
