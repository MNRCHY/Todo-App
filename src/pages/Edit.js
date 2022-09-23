import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Edit() {
    const navigate = useNavigate()
  return (
    <>
    <div className='my-4'>
        <h1 className='d-flex justify-content-center'> Edit Task </h1>
    </div>

    <Form className='AddForm mx-5 p-3 border rounded'>
        <Form.Label>Task</Form.Label>
        <Form.Control type='text' placeholder='Add task here...'></Form.Control>
            <div className='my-2'>
                <Button className='ActionButton'> Edit Task </Button>
                <Button className='ActionButton mx-2' variant='danger' onClick={() => navigate ('/')}> Cancel </Button>
            </div>
    </Form>
    </>
  )
}

export default Edit