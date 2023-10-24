import React from 'react'
import TodoItem from '../components/TodoItem'

const Todos = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>
      })}
    </div>
  )
}

export default Todos