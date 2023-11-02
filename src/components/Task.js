import React, { useState } from 'react'
import PT from 'prop-types'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function Task({ id, label, created, removeTask, isCompleted, toggleCompleted, changeTask }) {
  const [isCompletedTask, setIsComplitedTask] = useState(isCompleted)
  const [timeAgo] = useState(formatDistanceToNow(new Date(created), { includeSeconds: true }))
  const [isEditing, setIsEditing] = useState(false)
  const [edit, setEdit] = useState('')

  const handleChange = () => {
    setIsComplitedTask((prev) => !prev)
  }

  return (
    <li className={isEditing ? 'editing' : isCompletedTask ? 'completed' : ''}>
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
        <button className="icon icon-edit" onClick={() => setIsEditing((prev) => !prev)}></button>
        <button className="icon icon-destroy" onClick={() => removeTask(id)}></button>
      </div>
      {isEditing ? (
        <input
          type="text"
          className="edit"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              changeTask(id, edit)
              setIsEditing(false)
            }
          }}
        />
      ) : (
        ''
      )}
    </li>
  )
}

Task.propsTypes = {
  id: PT.number.isRequired,
  label: PT.string.isRequired,
  created: PT.string.isRequired,
  removeTask: PT.func,
  isCompleted: PT.bool,
  toggleCompleted: PT.func,
  changeTask: PT.func,
}

Task.defaultProps = {
  id: 0,
  label: 'TODO-0',
  created: '2023-10-10T23:22',
  removeTask: () => {},
  isCompleted: false,
  toggleCompleted: () => {},
  changeTask: () => {},
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
