import React, { useState } from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

export default function Task({
  id,
  label,
  created,
  removeTask,
  isCompleted,
  toggleCompleted,
}) {
  const [isCompletedTask, setIsComplitedTask] = useState(isCompleted)
  const [timeAgo] = useState(
    formatDistanceToNow(new Date(created), { includeSeconds: true })
  )

  const handleChange = () => {
    setIsComplitedTask(prev => !prev)
  }

  return (
    <li className={isCompletedTask ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => toggleCompleted(id, isCompletedTask, handleChange)}
          checked={isCompletedTask}
        />
        <label>
          <span className="description">{label}</span>
          <span className="created">{timeAgo}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => removeTask(id)}
        ></button>
      </div>
    </li>
  )
}
// {/* <li className="completed">
//   <div className="view">
//     <input className="toggle" type="checkbox" />
//     <label>
//       <span className="description">Completed task{/*label*/}</span>
//       <span className="created">created 17 seconds ago</span>
//     </label>
//     <button className="icon icon-edit"></button>
//     <button className="icon icon-destroy"></button>
//   </div>
// </li>
// <li className="editing">
//   <div className="view">
//     <input className="toggle" type="checkbox" />
//     <label>
//       <span className="description">Editing task</span>
//       <span className="created">created 5 minutes ago</span>
//     </label>
//     <button className="icon icon-edit"></button>
//     <button className="icon icon-destroy"></button>
//   </div>
//   <input type="text" className="edit" value="Editing task" />
// </li> */}
