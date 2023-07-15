'use client'
import { useEffect, useState } from 'react'

export default function Home() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(Array)

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, todo])
    setTodo('')
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        onChange={handleChange}
        value={todo}
        className="border border-black mx-2"
      />
      <input type="submit" />
      {todos.map((todo) => {
        return (
          <p key={todo} className="px-5">
            {todo}
          </p>
        )
      })}
    </form>
  )
}
