import React from 'react'
import TodoItem from '../components/TodoItem'

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        if (!todo.deleted) { // Hanya render tugas yang belum dihapus
          return (
          <TodoItem 
          key={todo.id} 
          todo={todo}
          // Teruskan function toggleCompleted ke component TodoItem
          toggleCompleted={toggleCompleted}
          deleteTodo = {deleteTodo}
          />
          );
        }
        return null; //jangan render tugas yang sudah dihapus
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