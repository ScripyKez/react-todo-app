import React, { useState, useEffect } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export default function Task(props) {
  const [editing, setEditing] = useState(false)
  const [newTaskText, setNewTaskText] = useState('')
  const [timer, setTimer] = useState(props.timer)
  const [timerLink, setTimerLink] = useState(null)

  const stopTimer = () => {
    if (timerLink) {
      clearInterval(timerLink)
    }
  }

  useEffect(() => {
    if (timer.sec <= 0 && timer.min <= 0) clearInterval(timerLink)
  })

  useEffect(() => {
    return () => clearInterval(timerLink)
  }, [])

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      setTimer((timer) => {
        const newTimer = { ...timer }
        if (newTimer.sec === 0) {
          newTimer.min = newTimer.min - 1
          newTimer.sec = 60
        }
        newTimer.sec = newTimer.sec - 1
        return newTimer
      })
    }, 1000)
    setTimerLink(timerInterval)
  }

  const onEditClick = () => {
    clearInterval(timerLink)
    setEditing((editing) => !editing)
    setNewTaskText(props.label)
  }

  const spaceCheck = (s) => {
    if (s.trim() !== '') return true
    return false
  }

  const editTask = (e) => {
    e.preventDefault()
    const { onEdit, label } = props
    if (spaceCheck(newTaskText)) onEdit(newTaskText)
    setNewTaskText(label)
    setEditing((editing) => !editing)
  }

  const editTaskText = (e) => {
    const { value } = e.target
    if (value) {
      setNewTaskText(value)
    }
  }

  const { label, time, active, onDeleted, onToggleComplete } = props

  let className = ''
  if (!active) className += ' completed'
  if (editing) className += ' editing'

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleComplete} checked={!active} />
        <label>
          <span className="title" onClick={onToggleComplete}>
            {label}
          </span>
          <span className="description">
            <button className="icon icon-play" onClick={startTimer} />
            <button className="icon icon-pause" onClick={stopTimer} />
            {timer.min}:{timer.sec}
          </span>
          <span className="description">{formatDistanceToNow(new Date(time)) + ' ago'}</span>
        </label>
        <button className="icon icon-edit" onClick={onEditClick} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
      <form onSubmit={editTask}>
        <input className="edit" type="text" onChange={editTaskText} value={newTaskText} />
      </form>
    </li>
  )
}
