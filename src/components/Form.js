import React, {useState} from 'react'

const Form = ({todoList, setTodoList}) => {

  const [textInput, setTextInput] = useState()

  const handleSubmit = (event) => {
      event.preventDefault()
      setTodoList([
        ...todoList,
        textInput
      ])
  }

  const onInputChange = (event) => {
    event.preventDefault()
    setTextInput(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add Item To List:
      </label><br />
        <input type="text" value={textInput} onChange={onInputChange} />
        <input type="submit" value="Add" />
    </form>
  )
}

export default Form