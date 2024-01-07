import React, { useState } from 'react'

export default function TaskFilter({ todosFilter }) {
  const [filterName, setFilterName] = useState('All')

  const setFilter = (e) => {
    const { textContent } = e.target
    todosFilter(textContent)
    switch (textContent) {
      case 'All':
        setFilterName('All')
        break
      case 'Active':
        setFilterName('Active')
        break
      case 'Completed':
        setFilterName('Completed')
        break
      default:
        break
    }
  }

  return (
    <ul className="filters" onClick={setFilter}>
      <li>
        <button className={filterName === 'All' ? 'selected' : ''}>All</button>
      </li>
      <li>
        <button className={filterName === 'Active' ? 'selected' : ''}>Active</button>
      </li>
      <li>
        <button className={filterName === 'Completed' ? 'selected' : ''}>Completed</button>
      </li>
    </ul>
  )
}
