import React from 'react'
import './Data.css'
import { AiFillEdit } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'

const Data = ({todos, setTodos, todoEditing, setTodoEditing, editingText, setEditingText}) => {
        
  
  const deleteTodo = (id) => {
        const updatedTodos = [...todos].filter((todo) => todo.id !== id) 
        setTodos(updatedTodos)
    }
    
    function toggleCompleted(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
       setTodos(updatedTodos)
    }

    function editTodo(id) {
        const updatedTodos = [...todos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText('')
    }
    
 
  return (
      <div className='dataCard' >
         {todos.map((todo) => {
              return <div className='flexInput' key={todo.id}>
            {!todo.completed && <div className='contentFlex'  key={todo.id}>
                      {todoEditing === todo.id ?
                          (<input type='text' onChange={(e) => setEditingText(e.target.value)} value={editingText} />)
                          :
                          (   <div className='flexItem' >
                              <input onChange={() => toggleCompleted(todo.id)} type='checkbox' className='EditInput' checked={todo.completed} />
                              <div className='flexTasks'>
                              <h3 className={ todo.completed ? 'line active' : 'line'} >{ todo.text}</h3> 
                              <h3 className= 'liner' >{todo.time}</h3> 
                      </div>
                      </div>
                          )} 
                      
                      <div className='flexBtn'>
                          <div><button onClick={() => deleteTodo(todo.id)} >{ <MdDelete />}</button></div>
                          
                          {todoEditing === todo.id ? (<button onClick={() => editTodo(todo.id)} >Submit</button>) :
                              (<div><button onClick={() => setTodoEditing(todo.id)} > {<AiFillEdit />}</button></div>)
                          }
                              </div>
                  </div>}
              </div>
          })}
    </div>
  )
}

export default Data