import React from 'react'

export const TodoItem = ({id, completed, text, removeTodo, toggleTodoCompleted}) => {
  return (
    <li>
        <input 
              type='checkbox' 
              checked={completed} 
              onChange={() => toggleTodoCompleted(id)} 
            />
            <span>{text}</span>
            <span className='delete' onClick={() => removeTodo(id)}>&times;</span>
    </li>
  )
}
