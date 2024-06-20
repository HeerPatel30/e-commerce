import React from 'react'
import Home from './Pages/Home/Home'
import Announcement from './Components/Announcement/Announcement'
import './App.css'
import Slidebar from './Components/Slidebar/Slidebar'
import Category from './Components/Category/Category'
const App = () => {
  return (
    <div>
        <Announcement/>
        <Home/>
        <Slidebar/>
        <Category/>
    </div>
  )
}

export default App