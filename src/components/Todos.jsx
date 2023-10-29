import React from 'react'
import TodoItem from '../components/TodoItem'

const Todos = ({ todos, toggleCompleted }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return <TodoItem 
        key={todo.id} 
        todo={todo}
        // Teruskan function toggleCompleted ke component TodoItem
        toggleCompleted={toggleCompleted}
        />
      })}
    </div>
  )
}

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
}

export default Todos;