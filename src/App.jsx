import './App.css'
import { Container } from '@mui/material'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Test } from './pages/Test'
import { Route, Routes } from 'react-router-dom'

function App() {




  return (
    <>

    <NavBar/>
    
      <Container 
      sx={{ pt: 10 }}
      maxWidth="xl"
      >

    
          <Routes>
            
              <Route index element={<Home />} />
              <Route element={<Test />} path='/video' />
              
            
          </Routes>
    
      
      </Container>
    </>
  )
}

export default App
