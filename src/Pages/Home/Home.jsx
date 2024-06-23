import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slidebar from '../../Components/Slidebar/Slidebar'
import Category from '../../Components/Category/Category'
import Products from '../../Components/Products/Products'
import NewLetter from '../../Components/Newsletter/NewLetter'
import Footer from '../../Components/Footer/Footer'
import Announcement from '../../Components/Announcement/Announcement'
const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slidebar/>
        <Category/>
        <Products/>
        <NewLetter/>
        <Footer/> 
      </div>
  )
}

export default Home