import { useEffect, useState, useLayoutEffect, createContext } from 'react'
import Home from "./pages/home/Home"
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/login/login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify'

const MyContext = createContext()
export { MyContext }

function App() {
  const [islogin, setLogin] = useState(false)
  const navigate = useNavigate()
  useLayoutEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('user login')
        navigate('/')
        // setLogin(true)
      } else {
        console.log('logout ')
        navigate('/login')
        // setLogin(false)

      }
    })
  }, [])
  console.log(islogin)
  return (
    <div>

      <MyContext.Provider value={{ loginAuth: islogin }} >
        <ToastContainer theme='dark' />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App
