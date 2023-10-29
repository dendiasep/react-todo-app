import React from 'react'

const TodoItem = ({ todo, toggleCompleted }) => {
  // const TodoItemStyle = {
  //   if (todo.completed === true) {
  //     textDecoration: 'line-through';
  //   } else {
  //     textDecoration: 'none'
  //   };
  // };
//merubah cara dengan mendefinisikan function untuk merubah css
  const getTodoItemStyle = () => {
    if (todo.completed === true) {
      return {textDecoration: 'line-through'}
    } else {
      return {textDecoration: 'none'}
    }
  };

  // Definisikan function toggleCompleted di sini
  // const toggleCompleted = () => {
  //   console.log('toggleCompleted function is called')
  // }


  return (
    <div style={styles.todoItem}>
      {/* menambahkan checkbox */}
      <input 
      type= "checkbox" 
      style={styles.checkbox}
      onChange={() => toggleCompleted(todo.id)}
      />
      {/* memanggil function getTodoItemStyle */}
      <p style = {getTodoItemStyle()}>{todo.title}</p>
    </div>
  )
}

const styles = {
  todoItem: {
    border: '2px solid grey',
    fontSize: '24px',
    // Tambahkan styles di bawah ini
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Tambahkan styles di bawah ini
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
}

export default TodoItem