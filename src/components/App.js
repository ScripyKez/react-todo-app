import React, { useState } from 'react'

import TaskList from './TaskList'
import NewTaskForm from './NewTaskForm'
import Footer from './Footer'

export default function App() {
  const initialArray = (val) => {
    if (localStorage.getItem('Tasks')) {
      switch (val) {
        case 'dataArray':
          return JSON.parse(localStorage.getItem('Tasks')).dataArray

        case 'filteredArray':
          return JSON.parse(localStorage.getItem('Tasks')).filteredArray

        default:
          return []
      }
    } else {
      return []
    }
  }
  let initialDataArray = initialArray('dataArray')
  let initialFilteredArray = initialArray('filteredArray')

  const [dataArray, setDataArray] = useState(initialDataArray)
  const [filteredArray, setFilteredArray] = useState(initialFilteredArray)

  const createTask = (label, active = true, min = 2, sec = 0) => {
    return {
      label,
      timer: {
        min,
        sec,
      },
      time: new Date(),
      active,
      id: `${new Date().getTime()}`,
    }
  }

  const onToggleComplete = (id) => {
    const idx = dataArray.findIndex((el) => el.id === id)
    const newArr = [...dataArray]
    newArr[idx].active = !newArr[idx].active
    setDataArray(newArr)
    setFilteredArray(newArr)
  }

  const removeTask = (id) => {
    const idx = dataArray.findIndex((el) => el.id === id)
    const newArr = [...dataArray.slice(0, idx), ...dataArray.slice(idx + 1)]
    localStorage.setItem('Tasks', JSON.stringify(newArr))
    setDataArray(newArr)
    setFilteredArray(newArr)
  }

  const addTask = (value, min, sec) => {
    const newItem = createTask(value, true, min, sec)
    const newArr = [...dataArray, newItem]
    localStorage.setItem('Tasks', JSON.stringify(newArr))
    setDataArray(newArr)
    setFilteredArray(newArr)
  }

  const todosFilter = (filterName = 'All') => {
    let newArr = [...dataArray]
    switch (filterName) {
      case 'Active':
        newArr = dataArray.filter((el) => el.active)
        setFilteredArray(newArr)
        break
      case 'Completed':
        newArr = dataArray.filter((el) => !el.active)
        setFilteredArray(newArr)
        break
      default:
        setFilteredArray(newArr)
        break
    }
  }

  const removeCompleted = () => {
    const newArr = dataArray.filter((el) => el.active)
    setDataArray(newArr)
    setFilteredArray(newArr)
  }

  const editItem = (id, newText) => {
    const newArr = []
    for (let i = 0; i < dataArray.length; i++) {
      const el = dataArray[i]
      if (el.id === id) el.label = newText
      newArr.push(el)
    }
    setDataArray(newArr)
    setFilteredArray(newArr)
  }

  const taskCounter = dataArray.filter((el) => el.active).length

  localStorage.setItem('Tasks', JSON.stringify({ filteredArray, dataArray }))

  return (
    <section className="todoapp">
      <NewTaskForm onTaskAdd={addTask} />
      <section className="main">
        <TaskList
          dataArray={filteredArray}
          onDeleted={removeTask}
          onToggleComplete={onToggleComplete}
          todosFilter={todosFilter}
          onEdit={editItem}
        />
        <Footer taskCounter={taskCounter} todosFilter={todosFilter} removeCompleted={removeCompleted} />
      </section>
    </section>
  )
}
