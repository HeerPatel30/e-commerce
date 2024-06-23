import React from 'react'
import styled from 'styled-components'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import NewLetter from '../../Components/Newsletter/NewLetter'
import Footer from '../../Components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container= styled.div`
    
`
const Productc =styled.div`
    display: flex;
    margin:15px
    
`
const Imagec=styled.div`
    flex: 1;
`
const Image=styled.img`
    /* width: 100%; */
    height: 90vh;
    margin-left: 50px;
`
const Infoc=styled.div`
    flex: 1;
    `
const Title=styled.h1`
    margin: 10px;
    margin-bottom:35px;
    font-size: 35px;
    font-weight: 200;
    
`
const Desc=styled.p`
    font-size: 18px;
    margin:10px;
    margin-bottom: 35px;
    
`
const Price=styled.span`
    font-size:25px;
    margin: 10px;

    
`
const Filterc=styled.div`
 display: flex;
 justify-content: space-between;
 width: 50%;
 margin: 15px;
`
const Filter=styled.div`
display:flex ;
`
const Filtertitle=styled.h3`
margin: 5px;
font-size: 20px;
font-weight:lighter;
`
const Filtercolor=styled.div`
 width: 20px;
 margin: 5px;
 height: 20px;
 border-radius: 50%;
 cursor: pointer;
 background-color: ${props=>props.color};
`
const Filtersize=styled.select`
margin-left: 10px;
padding:5px;
color: grey;
border:0.5 solid grey;
outline: none;

`
const Filteroption=styled.option`
    color: grey;
    padding: 5px;
`
const Addc=styled.div`
    margin: 15px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    width: 30%;
`
const Add1=styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
`
const Addno=styled.span`
    /* margin: 5px; */
    width: 25px;
    padding: 5px;
    height: 25px;
    border-radius: 15px;
  
    border: 0.5px solid teal;
`
const Button=styled.button`
    width:100px;
    border: 2px solid teal;
    border-radius: 5px;
    background-color: white;
    cursor:pointer;

    &:hover{
        background-color: aliceblue;
    }
`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
            <Productc>
                <Imagec>
                    <Image src='https://images.bewakoof.com/utter/content/4065/content_Rompers.jpg'/>

                </Imagec>
                <Infoc>
                    <Title>
                        Summer Wear
                    </Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis sunt magnam adipisci, ex earum aliquam voluptatibus sapiente, provident, velit aperiam. Vitae nostrum vero sit quisquam explicabo, quod reiciendis aperiam!lorem
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa eveniet placeat consequatur tenetur, nihil facilis amet cum voluptates, sed delectus debitis quod veritatis eum architecto dolores, obcaecati ipsam nulla.
                    </Desc>
                    <Price>
                        $50.00
                    </Price>
                    <Filterc>
                        <Filter>
                        <Filtertitle>
                            Color :
                        </Filtertitle>
                        
                            <Filtercolor color='Black'> </Filtercolor>
                            <Filtercolor color='Red'> </Filtercolor>
                            <Filtercolor color='Pink'> </Filtercolor>
                        </Filter>
                        <Filter>
                        <Filtertitle>
                            Size :
                        </Filtertitle>
                            <Filtersize>
                                <Filteroption>
                                    Xs
                                </Filteroption>
                                <Filteroption>
                                    L
                                </Filteroption>
                                <Filteroption>
                                    M
                                </Filteroption>
                                <Filteroption>
                                    S
                                </Filteroption>
                                <Filteroption>
                                    Xl
                                </Filteroption>
                            </Filtersize>
                        </Filter>
                    </Filterc>
                    <Addc>
                        <Add1>
                            <Remove/>
                              <Addno>1</Addno>
                            <Add/>
                        </Add1>
                        <Button>
                            Add to Cart
                        </Button>
                    </Addc>
                </Infoc>
            </Productc>
        <NewLetter/>
        <Footer/>
    </Container>
  )
}

export default Product