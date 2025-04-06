import { useState, useEffect } from 'react'
import Home from './Pages/Home/Home'
import Sell from './Pages/Sell/sell'
import { Routes, Route } from 'react-router-dom'
import ProductProvider from './context/productContext'
import Detail from './Pages/Detail/Detail'
import Login from './Pages/Login/login'
import { onAuthStateChanged } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from './Service/firebase'
function App() {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {

        navigate('/')
      } else {

        // navigate('/login')
      }
    })
  }, [])

  return (
    <>
      <ProductProvider>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Sell' element={<Sell />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products/details/:productId' element={<Detail />} />
        </Routes>
      </ProductProvider>


    </>
  )
}

export default App
