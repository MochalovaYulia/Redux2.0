import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, removeTodo, toggleTodoCompleted}) => {
  return (
    <ul>
        {
            todos.map(todo => <TodoItem key={todo.id} {...todo} toggleTodoCompleted={toggleTodoCompleted} removeTodo={removeTodo}/>)
        }
    </ul>
  )
}
