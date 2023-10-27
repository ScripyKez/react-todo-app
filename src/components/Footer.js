import React from "react"
import TaskFilter from "./TasksFilter"

export default function Footer() {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TaskFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
