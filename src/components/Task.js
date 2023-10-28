import React from "react"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

export default function Task({ id, label, created, removeTask }) {
  const [isCompleted, setIsComplited] = React.useState(false)

  const handleChange = () => {
    setIsComplited(prev => !prev)
    console.log("change", this)
  }

  return (
    <li key={id} className={isCompleted ? "completed" : ""}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleChange} />
        <label>
          <span className="description">{label}</span>
          <span className="created">
            {formatDistanceToNow(new Date(created))}
          </span>
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
