import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'


const App = () => {

  
  const [todoList, setTodoList] = useState([])


  return (
    <div >
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  )
}

export default App