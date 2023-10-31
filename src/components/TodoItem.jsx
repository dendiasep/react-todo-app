import React from 'react'

const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
//merubah cara dengan mendefinisikan function untuk merubah css
  const getTodoItemStyle = () => {
    return {
      textDecoration: todo.completed ? 'line-through' : 'none'
    };
  };

  


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
      {/* menambahkan tombol button delete */}
      <button 
      style = {styles.button}
      
      onClick={() => deleteTodo(todo.id)}
      >x</button>

    </div>
  );
  };

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}

export default TodoItem