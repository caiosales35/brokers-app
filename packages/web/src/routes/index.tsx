import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/broker" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
