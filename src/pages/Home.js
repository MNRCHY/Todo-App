import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import List from './List'


function Home() {
    const navigate = useNavigate()
    const [todo, setTodo] = useState([])

    useEffect(() => {
        axios.get('https://632b01531090510116ce5636.mockapi.io/todos')
        .then(res => {
            console.log(res);
            setTodo(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
   
  return (
    <div>
        <h1 className='AppTitle d-flex justify-content-center my-5'> Todo App </h1>

        <div>
            <Form className='SearchForm d-flex justify-content-between mx-4 p-3 border rounded'>
                <Button className='AddButt' variant='success' onClick={() => navigate ('/add')}> Add New Task </Button>
                <Form.Group className='d-flex'>
                    <Form.Control type='text' className='mx-1' placeholder='Search...'></Form.Control>
                    <Button variant='info'> Search </Button>
                </Form.Group>
            </Form>

            <div className='TaskSection m-4 p-3 border rounded'>
                <div className=' d-flex justify-content-center'>
                    <Button className='FilterButton'> All </Button>
                    <Button className='FilterButton mx-4'> Done </Button>
                    <Button className='FilterButton'> On Going </Button>
                </div>

                <div className='my-4 d-flex justify-content-center'>
                    <List data={todo}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home