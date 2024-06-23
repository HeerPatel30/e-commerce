import React from 'react'
import styled from 'styled-components'
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from '@material-ui/icons'
const Info =styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0,0.0);
    left: 0;
    display: flex;
    align-items: center;
    justify-content:center ;
    opacity: 0;
    
`
const Pcontainer = styled.div`
    flex: 1;
    margin: 25px;
    min-width:280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbfcfc;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
   }
   
`
const Circle =styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #bcdaf5;
    position: absolute;
    
`
const Image =styled.img`
    height: 85%;
    
    width: 70%;
    z-index: 2;
`

const Icon =styled.div`

   z-index: 3;
   margin: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: white;
   width: 30px;
   height: 30px;
   border-radius: 50%; 
   transition:all 0.5 ease;
   cursor: pointer;
   &:hover{
    transform: scale(1.1);
   }
   
`
const Product = ({items}) => {
  return (
    <Pcontainer>
        <Circle/>
        <Image src={items.img} />
        <Info>
            <Icon><ShoppingCartOutlined/></Icon>
            <Icon><SearchOutlined/></Icon>
            <Icon><FavoriteBorderOutlined/></Icon>
        </Info>
    </Pcontainer>
  )
}

export default Product