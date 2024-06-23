import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://www.jessilynnwongphotography.com/wp-content/uploads/2019/04/Toronto-personal-brand-photographer-Ever-New-Store-Square-One-27.jpg');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
  
    justify-content: center;
    align-items: center;
`
const Wrapper=styled.div`
   width: 20%;
   padding: 20px;
   border-radius: 10px;
   background-color: whitesmoke;
`
const Title=styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: 400;
`
const Form=styled.form`
     display: flex;
     flex-direction: column;

`
const Input=styled.input`
    flex: 1;
    min-height: 40%;
    padding: 5px;
    border: none;
    outline: none;
    border-radius: 10px;
    margin: 20px 10px 0px 0px ;
`

const Button=styled.button`
    padding: 5px;
    margin-top: 5px;
    border:0.5px solid teal;
    background-color: teal;
    color: white;
    border-radius: 4px;

`
const Signin = () => {
  return (
        <Container>
            <Wrapper>
                    <Title>
                        SIGN IN
                    </Title>
                <Form>
                 
                    <Input placeholder='UserName'/>
    
                    <Input placeholder='Password'/>
        
                    <Button>
                        Sign In
                    </Button>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Signin