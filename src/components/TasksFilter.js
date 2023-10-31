import React, { useState } from "react"

export default function TaskFilter({ todosFilter }) {
  const [active, setActive] = useState("All")

  const handleActive = e => {
    if (e.target.tagName === "BUTTON" && e.target.className !== active) {
      setActive(() => e.target.innerHTML)
      todosFilter(e.target.innerHTML)
    }
  }

  return (
    <ul className="filters" onClick={e => handleActive(e)}>
      <li>
        <button className={active === "All" ? "selected" : ""}>All</button>
      </li>
      <li>
        <button className={active === "Active" ? "selected" : ""}>
          Active
        </button>
      </li>
      <li>
        <button className={active === "Completed" ? "selected" : ""}>
          Completed
        </button>
      </li>
    </ul>
  )
}
