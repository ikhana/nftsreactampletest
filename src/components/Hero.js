import styled from "styled-components";
import cover from '../assets/cover.jpg';





const Hero = () =>{

    return(
        <div>
            <Wrapper>
                <Section>
                    <Cover></Cover>
                <Heading>NIFTY DOGS</Heading>
                </Section>
            </Wrapper>
        </div>
    )
};



const Wrapper = styled.div`

`


const Section = styled.div`

background-image: url(${cover});
background-size: cover;
background-repeat: no-repeat;
min-height:650px;
position:relative;
display: flex;
justify-content: center;
align-items: center;
`

const Cover = styled.div`
position:absolute;
width:100%;
height:100%;
background-color:#000;
opacity:0.7;
`

const Heading = styled.h1`

font-family: 'Blaka Hollow', cursive;
color:#fff;
font-size:72px;
font-style: Attack Graffiti;
z-index:1;
`
export default Hero;