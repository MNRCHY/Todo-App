import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()
    const [todo, setTodo] = useState([])
    const [formTask, setFormTask] = useState({
      task:''
  })
  const [updateTask, setUpdateTask] = useState ({id: null, status: false})

  function handleChange(e){
    let data = {...formTask}
    data[e.target.name] = e.target.value
    setFormTask(data)
  }

  function handleSubmit(e){
    e.preventDefault()
    alert('Roso')
    let data =[...todo]

    // if (updateTask.status){
    //   data.forEach((todo) => {
    //     if (task.id === updateTask.id){

    //     }
    //   })
    // }
  }
    
  return (
    <>
    <div className='my-4'>
        <h1 className='d-flex justify-content-center'> Edit Task </h1>
    </div>

    <Form onSubmit={handleSubmit} className='AddForm mx-5 p-3 border rounded'>
        <Form.Label>Task</Form.Label>
        <Form.Control type='text' placeholder='Add task here...' onChange={handleChange} value={formTask.task} name='task'></Form.Control>
            <div className='my-2'>
                <Button type='submit' className='ActionButton'> Edit Task </Button>
                <Button className='ActionButton mx-2' variant='danger' onClick={() => navigate ('/')}> Cancel </Button>
            </div>
    </Form>
    </>
  )
}

export default Edit