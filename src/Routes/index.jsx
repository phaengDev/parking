import React from 'react'
import { Routes, Route, Navigate,useParams } from 'react-router-dom';
import HomePage from '../screens/Home';
import Deposit from '../screens/Motorcycle/deposit';
import Deposit2 from '../screens/Motorcycle/deposit2';
import Deposit3 from '../screens/Motorcycle/deposit3';
export default function Content() {
  return (
    <Routes>
    <Route path='/' element={<Navigate replace to="home" />} />
    <Route path='/home' element={<HomePage/>} />
    <Route path='/dps' element={<Deposit/>} />
    <Route path='/dps2' element={<Deposit2/>} />
    <Route path='/dps3' element={<Deposit3/>} />
    </Routes>
  )
}
