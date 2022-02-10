import { Button, Fab } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {

  const router = useRouter();

  return (
    <div className='navbar'>
      <div className="nav-grid">
        <div className="nav-logo">
          <h1>Next.js & MongoDB CRUD</h1>
        </div>
        <div className="nav-links"> 
          <Button onClick={() => router.push('/')}>
            <HomeIcon></HomeIcon>
          </Button>
          <Button onClick={() => router.push('/tasks/newtask')}>
            <AddIcon/>
          </Button>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
