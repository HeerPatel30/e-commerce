import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { data } from '../../data';

const SlideContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: aliceblue;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideindex * -100}vw); /* Use vw instead of vh */

    transition: transform 0.5s ease; /* Add transition for smooth slide */
`;

const Slide = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
`;

const Imgcon = styled.div`
    flex: 1;
    margin: 10px 20px;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
    margin-left: 60px;
`;

const Info = styled.div`
    flex: 1;
    padding: 40px;
`;

const Title = styled.h2`
    font-size: 80px;
    margin: 10px;
`;

const Desc = styled.p`
    font-size: 20px;
    margin: 20px;
    letter-spacing: 3px; /* Added 'px' */
`;

const Btn = styled.button`
    margin: 30px;
    padding: 5px;
    background-color: transparent;
    cursor: pointer;
`;

const Slidebar = () => {
    const [slideindex, setSlideIndex] = useState(0); // Initialize state properly

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex((slideindex - 1 + 3) % 3); // Modulo operation to cycle through slides
        } else {
            setSlideIndex((slideindex + 1) % 3); // Modulo operation to cycle through slides
        }
    };

    return (
        <SlideContainer>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideindex={slideindex}>
               
              {
                data.map((item)=>(

                    <Slide>
                    <Imgcon>
                        <Image src={item.img} />
                    </Imgcon>
                    <Info>
                        <Title>{item.title}</Title> {/* Corrected typo 'SAL' to 'SALE' */}
                        <Desc>{item.desc}</Desc> {/* Corrected typo 'SHOW NOW' to 'SHOP NOW' */}
                        <Btn>SHOP NOW</Btn>
                    </Info>
                </Slide>
            
                )
            )
              } 
               
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </SlideContainer>
    );
};

export default Slidebar;
