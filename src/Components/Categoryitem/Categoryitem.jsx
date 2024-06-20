import React from 'react'
import styled from 'styled-components'
const Itemcontainer =styled.div`
    margin:5px ;
    height: 70vh;
    flex:1;
    position: relative;
`
const Title = styled.h1`
    margin-bottom: 10px;
    color: #ca445a;
`
const Info =styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top:0px;
    right:100px;
`
const Img =styled.img`
    height: 100%;
    object-fit: cover;
    width: 100%;
`
const Button =styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
    /* background-color: gray; */
    color: gray;
    cursor: pointer;
`
const Categoryitem = ({items}) => {
  return (
    <Itemcontainer>
        <Img src={items.img}/>
        <Info>
           
            <Title>
                {items.title}
            </Title>
            <Button>
                SHOP NOW
            </Button>       
        </Info>      
    </Itemcontainer>
  )
}

export default Categoryitem