import React, { useState } from 'react'

export default function TaskFilter(props) {
  const [All, setAll] = useState(true)
  const [Active, setActive] = useState(false)
  const [Completed, setCompleted] = useState(false)

  const setFilter = (e) => {
    const { textContent } = e.target
    props.todosFilter(textContent)
    try {
      setActive(false)
      setAll(false)
      setCompleted(false)
      switch (textContent) {
        case 'All':
          setAll(true)
          break
        case 'Active':
          setActive(true)
          break
        case 'Completed':
          setCompleted(true)
          break
        default:
          break
      }
    } catch (error) {
      // eslint-disable-next-line
      console.log(error)
    }
  }

  const highlightElement = (element) => {
    const obj = { Active, Completed, All }
    if (obj[element]) return 'selected'
  }

  return (
    <ul className="filters" onClick={setFilter}>
      <li>
        <button className={highlightElement('All')}>All</button>
      </li>
      <li>
        <button className={highlightElement('Active')}>Active</button>
      </li>
      <li>
        <button className={highlightElement('Completed')}>Completed</button>
      </li>
    </ul>
  )
}
