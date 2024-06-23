import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://watermark.lovepik.com/photo/20211124/large/lovepik-young-womens-womens-clothes-shop-selection-of-picture_500945602.jpg');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper=styled.div`
   width: 30%;
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
     flex-wrap: wrap;

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
const Agreement=styled.span`
 padding: 10px;
`
const Button=styled.button`
    padding: 5px;
    margin: 5px;
    border:0.5px solid teal;
    background-color: teal;
    color: white;
    border-radius: 4px;

`
const Register = () => {
  return (
        <Container>
            <Wrapper>
                    <Title>
                        CREATE ACCOUNT
                    </Title>
                <Form>
                    <Input placeholder='Name'/>
                    <Input placeholder='LastName'/>
                    <Input placeholder='UserName'/>
                    <Input placeholder='Email'/>
                    <Input placeholder='Password'/>
                    <Input placeholder='Confirm Password'/>
                    <Agreement>
                     By creating this account ,I accept the Terms & Conditions For sharing the data
                    </Agreement>
                    <Button>
                        Create
                    </Button>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Register