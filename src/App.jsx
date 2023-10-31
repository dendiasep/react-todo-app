// import './App.css'
import React, { useState, createContext } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm';
//membuat sebuah context
export const TodoContext = createContext()
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);
  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  };
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos)
  };
  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }


  return (
    // Bungkus app dengan provider dari context
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style = {styles.title}>My Todo List</h1>
        {/* menampilkan component TodoFOrm & teruskan function addTodo sebaai props */}
        <TodoForm addTodo = {addTodo}/>
        <Todos todos = {todos} toggleCompleted={toggleCompleted} deleteTodo = {deleteTodo} />
      </div>
    </TodoContext.Provider>
    
  )
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App;