import React from 'react'
import styled from 'styled-components'

import { Send} from '@material-ui/icons'
const Newcontainer =styled.div`
    display: flex;
    height: 60vh;
    background-color: antiquewhite;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

`
const Title=styled.h1`
    font-size: 60px;
    font-weight: 500;
    margin: 15px;
`
const Desc=styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;

`
const Inputc=styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    
    justify-content: space-between;
`
const Button=styled.button`
    border: none;
    background-color: teal;
    cursor: pointer;
    flex: 1;
`
const Input=styled.input`
    border: none;
    background-color: transparent;
    text-align: center;
    flex:8;
    outline: none;
`
const NewLetter = () => {
  return (
   <Newcontainer>
     <Title>
        Newsletter
     </Title>
        <Desc>
            Get timely update for your favourite product
        </Desc>
        <Inputc> 
        <Input placeholder='Enter your email'/>
        <Button>
                <Send/>
        </Button>
        </Inputc>
   </Newcontainer>
  )
}

export default NewLetter