import React, { useState } from 'react'

import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm'
import Footer from './Footer'

let id = 100

export default function App() {
  const [todos, setTodos] = useState([
    {
      label: 'Completed task',
      created: '2023-10-27T15:00:23',
      isCompleted: false,
      id: 1,
    },
    {
      label: 'Editing task',
      created: '2023-10-26T23:00:47',
      isCompleted: false,
      id: 2,
    },
    {
      label: 'Active task',
      created: '2023-10-27T22:26:43',
      isCompleted: true,
      id: 3,
    },
  ])
  const [todosFiltred, setTodosFiltred] = useState([])

  const counterTodos = () => {
    return todos?.reduce((acc, curr) => (curr.isCompleted === false ? (acc += 1) : acc), 0)
  }

  const todosFilter = (filter) => {
    switch (filter) {
      case 'Active':
        setTodosFiltred(todos.filter((todo) => todo.isCompleted !== true))
        break
      case 'Completed':
        setTodosFiltred(todos.filter((todo) => todo.isCompleted !== false))
        break
      default:
        setTodosFiltred([])
        break
    }
  }

  const changeTask = (id, newLabel) => {
    if (newLabel.length > 0) {
      const idx = todos.findIndex((todo) => todo.id === id)
      const newArr = [...todos]
      newArr[idx].label = newLabel

      setTodos(newArr)
    }
  }

  const removeCompeted = () => {
    setTodosFiltred([])
    setTodos((prev) => prev.filter((todo) => todo.isCompleted !== true))
  }

  const addTask = (label) => {
    const newTask = {
      label: label,
      created: new Date().toISOString(),
      isCompleted: false,
      id: id++,
    }
    setTodos((prev) => [...prev, newTask])
  }

  const removeTask = (id) => {
    const idx = todos.findIndex((el) => el.id === id)
    const newArray = [...todos.slice(0, idx), ...todos.slice(idx + 1)]
    setTodos(newArray)
  }

  const toggleCompleted = (id, state, cb) => {
    setTodos((prev) => {
      const newArr = [...prev]
      newArr[prev.findIndex((todo) => todo.id === id)].isCompleted = !state
      return newArr
    })

    cb()
  }

  return (
    <>
      <NewTaskForm addTask={addTask} />
      <section className="main">
        <TaskList
          todos={todos}
          removeTask={removeTask}
          toggleCompleted={toggleCompleted}
          todosFiltred={todosFiltred}
          changeTask={changeTask}
        />
        <Footer removeCompeted={removeCompeted} counter={counterTodos()} todosFilter={todosFilter} />
      </section>
    </>
  )
}
