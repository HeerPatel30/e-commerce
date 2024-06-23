import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div`
    
`
const Wrapper =styled.div`
  
`
const Top=styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
`
const Title=styled.h1`
    text-align: center;
    font-weight: 100;
    margin-bottom: 20px;
    margin: 10px;
`

const Button=styled.button`
    padding: 10px;
    background-color: whitesmoke;
    border-radius: 5px;
    border:0.5px solid teal;
    outline: none;
    margin: 20px;
    cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
    }
`
const Toptexts=styled.div`
   
    padding: 10px;
`
const Text=styled.span`
    margin: 20px ;
    cursor: pointer;
    text-decoration: underline;
`
const Bottom=styled.div`
    display:flex ;
    justify-content: space-between;
    /* align-items: center; */

`
const Info=styled.div`
    flex:3 ;
`
const Product=styled.div`
    display: flex;
    margin-bottom: 50px;
`
const Image=styled.img`
    margin-left: 20px;
    
`
const ProductDetail=styled.div`
    /* flex-direction: column; */
    flex:2;
    width: 250px;
    height: 250px;
    display: flex;
    `
const Detail=styled.div`
        display: flex;
        padding:10px;
        margin-left:10px;
        justify-content: space-around;
        flex-direction: column;
`
const  ProductName=styled.span`
    
`
const Productc=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`
const ProductId=styled.span`
    
`
const ProductSize=styled.span`

`
const Price=styled.div`
    flex:1;
    display: flex;
    /* justify-content: center; */

`
const Summary=styled.div`
    flex: 1;
    background-color: whitesmoke;
    border: 0.5px solid  black;
    border-radius: 10px;
    height: 60vh;
    `

const Addc=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `
const Add1=styled.div`
 display: flex;
 /* flex-direction: column; */
 justify-content: center;
 align-items: center;
 margin:5px;
 `
const Addno=styled.span`
    margin-left:10px ;
    font-size: 25px;
    margin-right: 10px;
    `
const Pr=styled.span`
        margin-top:15px ;
        font-size: 35px;
        `
const Hr=styled.hr`
    margin-top: 10px;
    margin-bottom:35px ;
    border: 0cap.5px solid black ;
    `
const Sdetail=styled.div`
    display: flex;
    margin: 10px;
    padding: 10px;
    
    flex-direction: column;
`
const Subt=styled.span`
    display: flex;
    justify-content: space-between;
    margin: 25px;
`
const Estimated=styled.span`
    margin: 25px;
    display: flex;
    justify-content: space-between;
`
const Shipd=styled.span`
    margin: 25px;
    display: flex;
    justify-content: space-between;
`
const Total=styled.span`
    margin: 25px;
    font-size: 25px;
    font-weight:100;
    display: flex;
    justify-content: space-between;
`
const Sbutton=styled.button`
   margin: 25px;
   padding: 10px;
   border: none;
   border-radius: 5px;
   outline: none;
   width:100px ;
   border: 0.5px solid teal;
    cursor: pointer;
   &:hover{
    background-color: yellowgreen
   }
`
const Cart = () => {
  return (
        <Container>
            <Navbar></Navbar>
            <Announcement/>
                <Wrapper>
                            <Title>
                                    MY BAG
                            </Title>
                       <Top>
                            
                                <Button>CONTINUE SHOPPING</Button>
                                <Toptexts>
                                    <Text>Shopping Bag(2)</Text>
                                    <Text>Your Wishlist(0)</Text>
                                </Toptexts>
                                <Button>ADD TO CART</Button>
                            
                       </Top>
                        <Bottom>
                            <Info>

                            <Product>
                                <ProductDetail>
                                 <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtpwA4VplDRLpPsKw0XZD9H2do24OdhG_8Q&s'/>
                                    <Detail>

                                    <ProductName><b>Name : </b>Tshirt</ProductName>
                                    <ProductId><b>Id : </b>225556688475</ProductId>
                                    <Productc color='Pink'></Productc>
                                    <ProductSize><b>Size : </b>L</ProductSize>
                                    </Detail>
                                </ProductDetail>
                                <Price>
                                <Addc>
                                        <Add1>
                                            <Remove/>
                                             <Addno>1</Addno>
                                            <Add/>
                                         </Add1>     
                                            <Pr>$10.00</Pr>
                                 </Addc>
                                </Price>
                            </Product>
                            <Hr />
                            <Product>
                                <ProductDetail>
                                 <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtpwA4VplDRLpPsKw0XZD9H2do24OdhG_8Q&s'/>
                                    <Detail>

                                    <ProductName><b>Name : </b>Tshirt</ProductName>
                                    <ProductId><b>Id : </b>225556688475</ProductId>
                                    <Productc color='Pink'></Productc>
                                    <ProductSize><b>Size : </b>L</ProductSize>
                                    </Detail>
                                </ProductDetail>
                                <Price>
                                <Addc>
                                        <Add1>
                                            <Remove/>
                                             <Addno>1</Addno>
                                            <Add/>
                                         </Add1>     
                                            <Pr>$10.00</Pr>
                                 </Addc>
                                </Price>
                            </Product>
                            </Info>
                            <Summary>
                                    <Title>ORDER SUMMARY</Title>
                                    <Sdetail>
                                        <Subt><b>SUBTOTAL : </b>$100</Subt>
                                        <Estimated><b>ESTIMATED SHIPPING : </b>$40</Estimated>
                                        <Shipd><b>SHIPPING DISCOUNT : </b>$40</Shipd>
                                        <Total><b>TOTAL :</b>$100 </Total>
                                        <Sbutton>CHECKOUT</Sbutton>
                                    </Sdetail>
                            </Summary>
                        </Bottom>
                </Wrapper>
                <Footer/>
        </Container>
  )
}

export default Cart