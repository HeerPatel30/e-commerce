import React from 'react'
import { propularproduct } from '../../data'
import styled from 'styled-components'
import Product from '../Product/Product'

const Procontainer = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    margin: 15px;
    justify-content: space-between;
`
const Products = () => {
  return (
    <Procontainer>
     
    {
        propularproduct.map((item)=>(
              <Product items={item} key={item.id}/>
        ))
    }
    </Procontainer>
  )
}

export default Products