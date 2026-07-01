import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/Home.tsx'
import Nav from './Components/Nav.tsx'
import Login from './pages/Login.tsx'
import SignUp from './pages/SignUp.tsx';
import AboutUs from './pages/AboutUs.tsx';
import Welcome from './pages/LoggedIn.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Nav />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element ={<Login />} /> 
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/welcome' element= {<Welcome />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
