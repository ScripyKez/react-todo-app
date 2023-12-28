import React from 'react'

import TaskFilter from './TasksFilter'

export default function Footer({ taskCounter, todosFilter, removeCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{taskCounter} items left</span>
      <TaskFilter todosFilter={todosFilter} />
      <button className="clear-completed" onClick={removeCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
