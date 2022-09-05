import './App.css';
import TodoList from './components/TodoList';
function Todo(){
  return (
    <div className="App">
      <input placeholder='Enter your tasks here ...' className='in' />
      <TodoList/>
    </div>
  );
}

export default Todo;