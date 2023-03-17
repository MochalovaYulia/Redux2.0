import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComleted } from '../Store/todoSlice'

export const TodoItem = ({id, completed, text }) => {

  const dispatch = useDispatch();

  return (
    <li>
        <input 
              type='checkbox' 
              checked={completed} 
              onChange={() => dispatch(toggleTodoComleted({id}))} 
            />
            <span>{text}</span>
            <span className='delete' onClick={() => dispatch(removeTodo({id}))}>
              &times;
            </span>
    </li>
  )
}
