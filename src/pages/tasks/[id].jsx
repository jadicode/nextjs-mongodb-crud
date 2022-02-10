import React, { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function TaskDetail({task}){

    const { query, push } = useRouter();

    const [tasktitle, setTasktitle] = useState('');
    const [taskdesc, setTaskdesc] = useState('');

    const Update = async () => {
        axios.put('http://localhost:3000/api/tasks/' + query.id , {
            title: tasktitle,
            description: taskdesc
        }).then((response) => {
            console.log("Actualizado");
            push("/")
        })
    }

    const Delete = async () => {
        axios.delete('http://localhost:3000/api/tasks/' + query.id)
        .then((response) => {
            push("/")
        })
        
      }

    return (
    <div className='action_grid'>
        <div className="task_details">
            <p>Edita tu tarea</p>
            <input type="text" placeholder={task.title} onChange={(e) => setTasktitle(e.target.value)}/>
            <textarea type="text" placeholder={task.description} onChange={(e) => setTaskdesc(e.target.value)}/>
            <div className="action_buttons">
                <button onClick={Update}>Actualizar</button>
                <button onClick={Delete}>Borrar</button>
            </div>
        </div>
    </div>
    )
}

export async function getServerSideProps({query: {id}}) {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`);
    const data = await res.json();
    return{
        props:{
            task: data
        }
    }
}