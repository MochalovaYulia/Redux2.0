import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addNewTodo , fetchTodos} from './Store/todoSlice'
import './App.css';
import { InputField } from './Components/InputField';
import { TodoList } from './Components/TodoList';

function App() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const {status, error} = useSelector(state => state.todos)

  const addTask = () => {
    dispatch(addNewTodo(text));
    setText('');
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      <TodoList />
    </div>
  );
}


export default App;
