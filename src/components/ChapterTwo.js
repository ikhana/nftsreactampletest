import styled from "styled-components";
import img from '../assets/niftydogscap.jpeg'


const ChapterTwo = () =>{

    return(
        <div>
            <Wrapper>
    <Section>
      
      <TitleWrapper>

        <Heading>
            02
        </Heading>
      <Title>
      2.1 Non-Fungible Tokens in the Nifty Platform
      
      </Title>
      <Title>
      2.2 NFT Phases
      </Title>
      <Title>
      2.3 Nifty Dog Traits

      </Title>
      <Title>
      2.4 Usability Importance of the NFT Ownership

      </Title>
      </TitleWrapper>
      <Image>
    <Img src= {img}></Img>
      </Image>
    </Section>
</Wrapper>
        </div>
    )

};

const Wrapper = styled.div`
background: #f8f8f8

`
const Heading = styled.h1`
font-size:48px
`
const TitleWrapper = styled.div`
`

const Section = styled.div`
max-width:1200px;
margin:0px auto;
display:flex;
justify-content: space-evenly;
align-items: center;
`

const Image = styled.div`
`
const Img = styled.img`
width:500px;
`

const Title = styled.div`

`

export default ChapterTwo;