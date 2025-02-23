import { useEffect, useState ,useLayoutEffect} from 'react'
import Home from "./pages/home/Home"
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import {ToastContainer} from 'react-toastify'
function App() {
  const navigate=useNavigate()
  useLayoutEffect(() => {
      onAuthStateChanged(auth,async (user)=>{
        if(user){
          console.log('user login')
          navigate('/')
        }else{
          console.log('logout ')
          navigate('/login')
        }
      })
  }, [])

  return (
    <div>
    <ToastContainer theme='dark'/>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  )
}

export default App
