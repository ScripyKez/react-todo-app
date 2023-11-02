import React from 'react'
import PT from 'prop-types'

export default function NewTaskForm({ addTask }) {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            addTask(inputValue)
            setInputValue('')
          }
        }}
      />
    </header>
  )
}

NewTaskForm.defaultProps = {
  addTask: () => {},
}

NewTaskForm.propTypes = {
  addTask: PT.func,
}
