import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import TaskList from "./components/TaskList"
import NewTaskForm from "./components/NewTaskForm"
import Footer from "./components/Footer"

const App = () => {
  const todos = [
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
  ]
  return (
    <>
      <NewTaskForm />
      <section className="main">
        <TaskList todos={todos} />
        <Footer />
      </section>
    </>
  )
}

const root = createRoot(document.getElementById("root"))
root.render(<App />)
