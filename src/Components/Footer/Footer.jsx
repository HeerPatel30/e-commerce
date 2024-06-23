import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Footercon=styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ececec;
`
const Left=styled.div`
    flex: 1;
    margin-left: 5px;
`
const Title=styled.h1`
   margin: 15px;

`
const Desc=styled.p`
    
    font-weight:400;
    margin: 15px;
`
const Socail=styled.div`
    display: flex;
    margin: 15px;
    
`
const Icon=styled.div`
    margin: 5px;
    font-size: 20px !important;
    border-radius: 50%;
    color: white;
`

const Center=styled.div`
    flex: 1;
`
const Title2=styled.h2`
margin: 15px;
font-weight: lighter;

`
const Linkul=styled.ul`
 display: flex;
 flex-wrap: wrap;
 list-style: none;
 margin: 5px;
 padding: 10px;

`
const Item=styled.li`
 width: 50%;
 margin-bottom: 5px;
cursor: pointer;
`
const Right=styled.div`
    flex: 1;
    display: flex;
    
    margin: 15px;
    
    flex-direction: column;
`
const Title3=styled.h2`
    margin: 10px;
    font-weight: lighter;
`
const Contactc=styled.div`
    margin:10px
`
const Citem=styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 10px;
`
const Footer = () => {
  return (
    <Footercon>
        <Left>
            <Title>FashionNook</Title>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus veritatis, incidunt aspernatur impedit eligendi doloribus eaque rem vero eius quidem in fugiat, sed eveniet vel doloremque quam soluta laudantium unde. Dignissimos vel amet quae quibusdam.</Desc>
            <Socail>
                <Icon>
                        <Facebook style={{backgroundColor:"blue"}}/>
                </Icon>
                <Icon>
                        <Instagram style={{backgroundColor:"lightpink"}}/>
                </Icon>
                <Icon>
                        <Pinterest style={{backgroundColor:"lightcoral"}}/>
                </Icon>
                <Icon>
                        <Twitter style={{backgroundColor:"lightblue"}}/>
                </Icon>
            </Socail>    
        </Left>
        <Center>
            <Title2>Useful Links</Title2>
            <Linkul>
                <Item>Home</Item>
                <Item>Women Fashion</Item>
                <Item>Cart</Item>
                <Item>Accessories</Item>
                <Item>Order Tracking</Item>
                <Item>My Account</Item>
                <Item>Wishlist</Item>
                <Item>Terms</Item>
            </Linkul>
        </Center>
        <Right>
            <Title3>
                    Contact
            </Title3>
            <Contactc>
                <Citem>
                    <Room /> 622 Polo office , Mumbai 385456
                </Citem>
                <Citem>
                    <Phone/> +91 78965 56987
                </Citem>
                <Citem>
                    <Mail/> fashionnook@gmail.com
                </Citem>
            </Contactc>
        </Right>
    </Footercon>    

)
}

export default Footer