import React, { useState } from 'react'

export default function NewTaskForm({ onTaskAdd }) {
  const [label, setLabel] = useState('')
  const [min, setMin] = useState('')
  const [sec, setSec] = useState('')

  const CheckSpaces = (str) => str.trim() !== ''

  const inputChange = (e, name) => {
    const { value } = e.target
    if (name === 'min' || name === 'sec') {
      const parsedValue = parseInt(value)
      if (!isNaN(parsedValue)) {
        if (parsedValue >= 0) {
          switch (name) {
            case 'min':
              setMin(parsedValue)
              break
            case 'sec':
              setSec(parsedValue)
              break
            default:
          }
        }
      }
    } else {
      if (value[0] !== ' ' && CheckSpaces(value)) {
        setLabel(value)
      }
    }
  }

  const onFormSubmit = () => {
    if (label && (min || min === 0) && sec) {
      onTaskAdd(label, min, sec)
      setLabel('')
      setSec('')
      setMin('')
    }
  }

  const formSubmit = (evt) => {
    if (evt.key === 'Enter') {
      onFormSubmit()
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onFormSubmit} className="new-todo-form" noValidate={true}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={(e) => {
            inputChange(e, 'label')
          }}
          value={label}
          type="text"
          onKeyDown={formSubmit}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={min}
          onChange={(e) => {
            inputChange(e, 'min')
          }}
          type="text"
          onKeyDown={formSubmit}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
          onChange={(e) => {
            inputChange(e, 'sec')
          }}
          type="text"
          onKeyDown={formSubmit}
        />
      </form>
    </header>
  )
}
