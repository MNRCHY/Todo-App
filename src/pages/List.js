import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
import { ListGroup, Button, } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function List({data, editTask, deleteTask}) {
    const navigate = useNavigate()

  return (
    <ListGroup className='w-100'>
        {
            data.map((todo) => {
                return (
                    <ListGroup.Item className='d-flex justify-content-between'>
                        <strong> {todo.task} </strong>
                        <div>
                            <Button className='CheckTaskButt' variant='secondary' size='sm'></Button>
                            <Button className='CommandButton mx-2' variant='warning' size='sm' onClick={() => {navigate ('/edit'); editTask (todo.id)}}>Edit</Button>
                            <Button className='CommandButton' variant='danger' size='sm' onClick ={() => deleteTask (todo.id)}>Delete</Button>
                        </div>
                    </ListGroup.Item>
                )
            })
        }
        
        {/* <ListGroup.Item className='d-flex justify-content-between'>
            <strong> Task item 2 </strong>
            <div>
                <Button className='CheckTaskButt' variant='secondary' size='sm'></Button>
                <Button className='CommandButton mx-2' variant='warning' size='sm' onClick={() => navigate ('/edit')}>Edit</Button>
                <Button className='CommandButton' variant='danger' size='sm'>Delete</Button>
            </div>
        </ListGroup.Item> */}
  </ListGroup>
        

  )
}

export default List