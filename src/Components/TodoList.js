import React, { useEffect, useState } from 'react'
import './TodoList.css'
import Data from './Data'
import Completed from './Completed'
import All from './All'

const TodoList = ({ todos, setTodos, taskName, setTaskName,taskTime, setTaskTime, completed,setCompleted, todoEditing, setTodoEditing, editingText, setEditingText, selectedCategory, setSelectedCategory, active, setActive, theme, setTheme }) => {

    const handleSubmit = (e) => {
         e.preventDefault()
        const newTodo = {
        id: new Date().getTime(),
        text: taskName,
        time: taskTime,
        completed: false,
        }      
        setTodos([...todos].concat(newTodo))
        setTaskName('')
        setTaskTime('')
    }

          useEffect(() => {
        const temperate = localStorage.getItem('todos')
        const loadedTodos = JSON.parse(temperate)
        setTodos(loadedTodos)
        if (loadedTodos) {
            setTodos(loadedTodos)
        }
    }, [setTodos]) 
    
        useEffect(() => {
          const temperate = JSON.stringify(todos)        
        localStorage.setItem('todos', temperate)
        }, [todos]) 
    
        useEffect(() => {
          const temperate = JSON.stringify(todos)        
        localStorage.setItem('todos', temperate)
    }, []) 


    function handleFilterCheck(param) {
        setSelectedCategory(param)
        setActive(!active)
    }

          const [clicked, setClicked] = useState(false)

      const handleChange = () => {
    setClicked(!clicked);
     setTheme((curr) => (curr === "light" ? "dark" : "light"))
    }

  return (
      <div className='todoContainer' >
          <div className='todoHeader'>
              <div className='heading'>
                  <h1>Todo List </h1>
                  <div className='toggleContain'>
                      <div id='ball' onClick={handleChange} className={clicked ? "ball active" : "ball"}></div>
                  </div>
                  </div>
              <form onSubmit={handleSubmit} className='form' >
              <div className='inputCard'>
                      <input id='tasking' className='inputText' onChange={(e) => setTaskName(e.target.value)} value={taskName} typeof='text' placeholder='Enter Task Name...' required />
                      <input id='taskings' className='inputText' onChange={(e) => setTaskTime(e.target.value)} value={taskTime} typeof='text' placeholder='Enter Time of Task...' required />
                  </div>
              <div> <button typeof='submit' className='outLineBtn'> Create New Task </button></div>
              </form>
              <ul className='navBar'>
                  <li><button className={selectedCategory === 0 ? "link active" : "link"}  onClick={() => handleFilterCheck(0)}>All</button></li>
                  <li ><button className={selectedCategory === 1 ? "link active" : "link"} onClick={() => handleFilterCheck(1)} >Completed</button> </li>
                  <li><button className={selectedCategory === 2 ? "link active" : "link"} onClick={() => handleFilterCheck(2)} >Pending</button></li>
              </ul>

            {selectedCategory === 0 && <All todos={todos}
        setTodos={setTodos}
        taskName={taskName}
        setTaskName={setTaskName}
        taskTime = {taskTime}
        setTaskTime = {setTaskTime}
        completed={completed}
        setCompleted={setCompleted}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        editingText={editingText}
        setEditingText={setEditingText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        active={active}
                  setActive={setActive}
              />}

        {selectedCategory === 1 && <Completed todos={todos}
        setTodos={setTodos}
        taskName={taskName}
        setTaskName={setTaskName}
        taskTime = {taskTime}
      setTaskTime = {setTaskTime}
        completed={completed}
        setCompleted={setCompleted}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        editingText={editingText}
        setEditingText={setEditingText}

              />}
              
        {selectedCategory === 2 && <Data   todos={todos}
        setTodos={setTodos}
        taskName={taskName}
        setTaskName={setTaskName}
        taskTime={taskTime}
        setTaskTime = {setTaskTime}
        completed={completed}
        setCompleted={setCompleted}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
        editingText={editingText}
        setEditingText={setEditingText}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        active={active}
                  setActive={setActive}/> }
              </div>
    </div>
  )
}

export default TodoList