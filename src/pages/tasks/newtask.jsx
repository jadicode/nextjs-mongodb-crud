import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const NewTask = () => {

    const { push } = useRouter();
    
    const [titleTask, setTitleTask] = useState('');
    const [descTask, setDescTask] = useState('');

    const handleSubmit = () => {
        CreateTask();
    }

    const CreateTask = () => {
        axios.post('http://localhost:3000/api/tasks',{
            title: titleTask,
            description: descTask
        }).then((response) => {
            console.log("Tarea creada");
            push('/');
        })
    }
    return (
        <div className='newtask_flex'>
            <div className="newtask">
                <label htmlFor="title">Título</label>
                <input type="text" placeholder='Título de tu tarea.' onChange={(e) => setTitleTask(e.target.value)}/>
                <label htmlFor="title">Descripción</label>
                <textarea type="text" placeholder='Descripción de tu tarea.' onChange={(e) => setDescTask(e.target.value)}/>
                <button onClick={handleSubmit}>Añadir</button>
            </div>

        </div>
    );
}

export default NewTask

