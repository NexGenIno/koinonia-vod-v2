import './App.css'
import { Container } from '@mui/material'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Test } from './pages/Test'
import { Route, Routes } from 'react-router-dom'
import Programas from './pages/Programas'
import TemporadaComponent from './pages/TemporadaComponent'

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
              <Route element={<Programas />} path='/programa/:id' />
              <Route element={<TemporadaComponent />} path='/temporada/:id' />
              <Route element={<Test />} path='/capitulo/:id' />
              
            
          </Routes>
    
      
      </Container>
    </>
  )
}

export default App
