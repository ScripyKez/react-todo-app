import React from 'react'
import PT from 'prop-types'

import Task from './Task'

export default function TaskList({ todos, removeTask, toggleCompleted, todosFiltred, changeTask }) {
  console.log('test lint')
  return (
    <ul className="todo-list">
      {todosFiltred.length > 0
        ? todosFiltred.map((todo) => {
            const { id, ...items } = todo
          return (
              <Task
                {...items}
                key={id}
                id={id}
                removeTask={removeTask}
                toggleCompleted={toggleCompleted}
                changeTask={changeTask}
              />
            )
          })
        : todos.map((todo) => {
            const { id, ...items } = todo
          return (
              <Task
                {...items}
                key={id}
                id={id}
                removeTask={removeTask}
                toggleCompleted={toggleCompleted}
                changeTask={changeTask}
              />
            )
          })}
    </ul>
  )
}

TaskList.propTypes = {
  todos: PT.array.isRequired,
  removeTask: PT.func.isRequired,
  toggleCompleted: PT.func.isRequired,
  todosFiltred: PT.array,
  changeTask: PT.func,
}

TaskList.defaultProps = {
  todos: [
    {
      label: 'TODO1',
      created: '2023-10-27T15:00:23',
      isCompleted: false,
      id: 1,
    },
    {
      label: 'TODO2',
      created: '2023-10-26T23:00:47',
      isCompleted: false,
      id: 2,
    },
    {
      label: 'TODO3',
      created: '2023-10-27T22:26:43',
      isCompleted: true,
      id: 3,
    },
  ],
  removeTask: () => {},
  toggleCompleted: () => {},
  todosFiltred: [],
  changeTask: () => {},
}
