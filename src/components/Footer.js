import styled from "styled-components";
import logo from "../assets/logo.png"


const Footer = () =>{

    return(
        <div>
            <Wrapper>
                <Section>
                    <Image>
                    <IMG src={logo}/>
                    </Image>

                    <Content>
                    <Heading>
                        Contact Us
                    </Heading>

                    <Details>
                    utopia.metaverso@gmail.com
                    </Details>
                    </Content>
                </Section>
            </Wrapper>
        </div>
    )

};

const Wrapper = styled.div`

padding:40px 0px 0px 0px;
background: #000;
`

const Heading = styled.h3`
color:#fff
`

const Details = styled.p`
color:#fff
`

const IMG = styled.img`
width:300px;
`

const Section = styled.div`
display: flex;
justify-content: space-between;
align-items:center; 
max-width:1200px;
margin:0px auto;

`

const Image = styled.div`

`

const Content = styled.div`

`

export default Footer;