import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Products from '../../Components/Products/Products'
import Newsletter from '../../Components/Newsletter/NewLetter'
import Footer from '../../Components/Footer/Footer'
const  Pcontainer = styled.div`
    
`

const Title =styled.h1`
    margin: 15px;
`
const Filterc=styled.div`
display: flex;
justify-content: space-between;
    
`
const Filter=styled.div`
    margin: 15px;
`
const Filtertext=styled.span`
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select`
    margin: 10px;
    margin-right: 15px;
    width:100px;
    height: 30px;
    border: 1px solid grey;
`
const Productlist = () => {
  return (
    <Pcontainer>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <Filterc>
            <Filter><Filtertext>
                
                Filter Products :
                </Filtertext>
                 <Select>
                    <option disabled selected>Color</option>
                    <option>White</option>
                    <option>Red</option>
                    <option>Yellow</option>
                    <option>Blue</option>
                    <option>Black</option>
                 </Select>
                 <Select>
                    <option disabled selected>size</option>
                    <option>xs</option>
                    <option>xl</option>
                    <option>l</option>
                    <option>m</option>
                    <option>s</option>
                 </Select>
                </Filter>
            <Filter><Filtertext>
                Sort Product :
                </Filtertext>
                <Select>
                    <option disabled selected>Newest</option>
                    <option >Asc Price</option>
                    <option >Des Price</option>
                </Select>
                </Filter>
        </Filterc>
        <Products/>  
        <Newsletter/>      
        <Footer/>
    </Pcontainer>
  )
}

export default Productlist