import React from "react"
import TaskFilter from "./TasksFilter"

export default function Footer({ removeCompeted, counter, todosFilter }) {
  return (
    <footer className="footer">
      <span className="todo-count">{counter} items</span>
      <TaskFilter todosFilter={todosFilter} />
      <button className="clear-completed" onClick={removeCompeted}>
        Clear completed
      </button>
    </footer>
  )
}
