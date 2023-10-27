import React from "react"
import Task from "./Task"

export default function TaskList({ todos }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        const { id, ...items } = todo
        return (
          <li key={id}>
            <Task {...items} />
          </li>
        )
      })}
    </ul>
  )
}
