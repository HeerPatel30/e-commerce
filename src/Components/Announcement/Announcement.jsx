import React from 'react'
import styled from 'styled-components'

const Salecontainer=styled.div`
    height: 30px;

    color:white;
    text-align: center;
    font-size:16px;
    font-weight:500;
    background-color: teal;
`
const Announcement = () => {
  return (
    <Salecontainer>
        Super Deal! Free Shipping on Orders Over $50
    </Salecontainer>
  )
}

export default Announcement