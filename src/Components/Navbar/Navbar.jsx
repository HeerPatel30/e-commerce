import React from 'react'
import  {styled} from 'styled-components'

import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
const Container = styled.div`
    height:60px;
    
`
const Wrapper =styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left =styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language=styled.span`
    font-size: 14px;
    cursor: pointer;
    
`
const SearchComp = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 25px;
    align-items: center;
`
const Input =styled.input`
    border: none;
    outline: none;
    padding: 5px;
`
const Center=styled.div`
    flex: 1;
`
const Logo=styled.h1`
    font-weight: bold;
    text-align: center;
`
const Right=styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const Menuitem=styled.div`
   font-size: 14px;
   margin:15px;
   cursor: pointer;
`
const Navbar = () => {
  return (
    <div>
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchComp><Input></Input><Search style={{color:"grey",fontSize:16}}/></SearchComp>
                </Left>
                <Center>
                <Logo>FashionNook</Logo>
                </Center>
                <Right>
                    <Menuitem>REGISTER</Menuitem>
                    <Menuitem>SINGUP</Menuitem>
                    <Menuitem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                    </Menuitem>

                </Right>
            </Wrapper>
        </Container>
    </div>
  )
}

export default Navbar