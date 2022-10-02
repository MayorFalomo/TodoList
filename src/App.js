import { createContext, useEffect, useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
export const ThemeContext = createContext(null);


function App() {
  const temperate = localStorage.getItem('todos')
  const loadedTodos = JSON.parse(temperate)
  const [todos, setTodos] = useState(loadedTodos || [])
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [completed, setCompleted] = useState(false);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [active, setActive] = useState(0)
    const [clicked, setClicked] = useState(false)

  const getThemeInStorage = () => {
  return JSON.parse(localStorage.getItem('theme'))
  }

  const [theme, setTheme] = useState(getThemeInStorage());

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="App" id={theme}>
      <TodoList
        todos={todos}
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
        click={clicked}
          setClick={setClicked}
          theme={theme}
          setTheme={setTheme}
      />
      </div>
      </ThemeContext.Provider>
  );
}

export default App;
