import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import TaskList from "./components/TaskList"
import NewTaskForm from "./components/NewTaskForm"
import Footer from "./components/Footer"

const App = () => {
  const [todos, setTodos] = React.useState([
    {
      label: "Completed task",
      created: "2023-10-27T15:00:23",
      id: 1,
    },
    {
      label: "Editing task",
      created: "2023-10-26T23:00:47",
      id: 2,
    },
    {
      label: "Active task",
      created: "2023-10-27T22:26:43",
      id: 3,
    },
  ])

  const removeTask = id => {
    const idx = todos.findIndex(el => el.id === id)
    const newArray = [...todos.slice(0, idx), ...todos.slice(idx + 1)]

    setTodos(newArray)
    return
  }

  return (
    <>
      <NewTaskForm />
      <section className="main">
        <TaskList todos={todos} removeTask={removeTask} />
        <Footer />
      </section>
    </>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)
