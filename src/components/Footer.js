import React from "react"
import PT from "prop-types"
import TaskFilter from "./TasksFilter"

export default function Footer({ removeCompeted, counter, todosFilter }) {
  const [tab, setTab] = React.useState("All")

  const setTabFunc = tab => {
    setTab(tab)
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        {counter === 0 ? "None active" : counter + " items"}
      </span>
      <TaskFilter tab={tab} todosFilter={todosFilter} setTabFunc={setTabFunc} />
      <button
        className="clear-completed"
        onClick={() => {
          setTab("All")
          removeCompeted()
        }}
      >
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  removeCompeted: () => {},
  counter: 0,
  todosFilter: () => {},
}

Footer.propsTypes = {
  removeCompeted: PT.func.isRequired,
  counter: PT.number.isRequired,
  todosFilter: ProcessingInstruction.func,
}
