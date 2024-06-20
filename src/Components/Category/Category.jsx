import React from 'react'
import styled from 'styled-components'
import { category } from '../../data'
import Categoryitem from '../Categoryitem/Categoryitem'

const Categorycontainer = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    
`

const Category = () => {
  return (
    <Categorycontainer>

   {

       category.map((item)=>(
           <Categoryitem items={item}/>
    ))
}
    </Categorycontainer>
  )
}

export default Category