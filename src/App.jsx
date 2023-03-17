import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from './Store/todoSlice'
import './App.css';
import { InputField } from './Components/InputField';
import { TodoList } from './Components/TodoList';

function App() {

  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}));
    setText('');
  }

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
      <TodoList />
    </div>
  );
}


export default App;
