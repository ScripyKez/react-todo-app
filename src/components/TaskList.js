import React from "react"
import Task from "./Task"

export default function TaskList({ todos, removeTask }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        const { id, ...items } = todo
        return <Task {...items} id={id} removeTask={removeTask} />
      })}
    </ul>
  )
}
