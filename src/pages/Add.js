import axios from 'axios'
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { uid } from 'uid'
// import List from './List'

function Add() {

    const navigate = useNavigate()
    const [todo, setTodo] = useState([])
    const [formTask, setFormTask] = useState({
        task:''
    })

    function handleChange(e){
        let data = {...formTask}
        data[e.target.name] = e.target.value
        setFormTask(data)
    }

    function handleSubmit(e){
        e.preventDefault()
        alert('Bisa')
        let data =[...todo]

        if (formTask.task === ''){
            return false
        } else {
            let newTask ={id: uid(), task: formTask.task}
            data.push(newTask)

            axios.post('https://632b01531090510116ce5636.mockapi.io/todos', newTask)
            .then (res => {
                alert('Berhasil tambah task baru')
            })
        }

        setTodo(data)
        setFormTask({task:''})
        //Add Task
        // let data = [...todo]
        // data.push({id: uid(), task: formTask.task})
        // setTodo(data)
    }

    return (
    <>
    <div className='my-4'>
        <h1 className='d-flex justify-content-center'> Add Task </h1>
    </div>

    <Form onSubmit={handleSubmit} className='AddForm mx-5 p-3 border rounded'>
        <div>
        <Form.Label>Task</Form.Label>
        <Form.Control type='text' placeholder='Add task here...' onChange={handleChange} value={formTask.task} name='task'></Form.Control>
        </div>
            <div className='my-2'>
                <Button type='submit' className='ActionButton'> Submit </Button>
                <Button className='ActionButton mx-2' variant='danger' onClick={() => navigate ('/')}> Cancel </Button>
            </div>
    </Form>

    {/* <List data={todo}/> */}
    </>
    )
}

export default Add