import React from "react"
import Task from "./Task"

export default function TaskList({
  todos,
  removeTask,
  toggleCompleted,
  todosFiltred,
}) {
  return (
    <ul className="todo-list">
      {todosFiltred.length > 0
        ? todosFiltred.map(todo => {
            const { id, ...items } = todo
            return (
              <Task
                {...items}
                key={id}
                id={id}
                removeTask={removeTask}
                toggleCompleted={toggleCompleted}
              />
            )
          })
        : todos.map(todo => {
            const { id, ...items } = todo
            return (
              <Task
                {...items}
                key={id}
                id={id}
                removeTask={removeTask}
                toggleCompleted={toggleCompleted}
              />
            )
          })}
    </ul>
  )
}
