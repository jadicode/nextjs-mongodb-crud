import { Alert, AlertTitle, Button } from '@mui/material'
import axios from 'axios';

import { useRouter } from 'next/router'

export default function Home({tasks}) {

  const router = useRouter();

  if (tasks.length === 0) {
    return(
      <div className='info_grid'>
        <Alert severity="info">
          <AlertTitle><strong>No se encontró ninguna tarea.</strong></AlertTitle>
          <p>Añade una tarea para visualizarla.</p>
        </Alert>
      </div>
    )
  }
  return (
      <div className="tasks_grid">
        {
          tasks.map(task => (
            <div className='task' key={task._id}>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <Button variant="contained" onClick={() => router.push(`/tasks/${task._id}`)}>Ver detalles</Button>
            </div>
          ))
        }
      </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const data = await res.json();
  return {
    props:{
      tasks: data,
    }
  }
}
