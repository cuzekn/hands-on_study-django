import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UdemyApiFetch = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tasks/', {
      headers: {
        'Authorization': 'Token 348c33a73b1ea526e03ff993aa1b330b02922fa7'
      }
    })
    .then(res => {setTasks(res.data)})
  }, [])

  return (
    <div>
      <ul>
        {
          tasks.map(task => <li key={task.id}> {task.title} {task.id}</li>)
        }
      </ul>
    </div>
  )
}
