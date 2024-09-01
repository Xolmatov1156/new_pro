import React from 'react'
import {Save, Like, Home} from '../pages'
import { Route, Routes } from 'react-router-dom'

function CustomRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default CustomRoutes
