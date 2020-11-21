import React from 'react'
import './Button.css'

const TodoList = ({todoList, setTodoList}) => {

let compOnClick = (index) => {
    const list = [...todoList]
    list[index] = list[index]
                  .split('')
                  .map(char => char + '\u0336')
                  .join('')

    setTodoList(list)
  }

  const removeOnClick = (index) => {
    const list = [...todoList]
    list.splice(index, 1)
    setTodoList(list)
  }

  const fullList = todoList.map((toDo, index) => 
    <div key={index}>
      {toDo}
      <span className='button'>
      <button onClick={() => compOnClick(index)} >Completed</button>
      <button onClick={() => removeOnClick(index)} >Remove</button>
      </span>
    </div>
  );

  return (
    <div>
      <h2>To Do List</h2>
      <div>{fullList}</div>
    </div>
  )
}

export default TodoList