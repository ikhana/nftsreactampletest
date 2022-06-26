import styled from "styled-components";
import img from '../assets/image1.jpg';


const Team = () =>{

    return (
        <div>
            <Wrapper>
            <Heading>
                        Team
                    </Heading>
                <TeamWrapper>

                    <Member>
                    <Img src={img}></Img>
                    <Title>
                    Inaam Ullah
                    </Title>
                    <Paragraph>
                        CEO / Founder
                    </Paragraph>
                    </Member>
                    <Member>
                    <Img src={img}></Img>
                    <Title>
                    Inaam Ullah
                    </Title>
                    <Paragraph>
                        CEO / Founder
                    </Paragraph>
                    </Member>
                    <Member>
                    <Img src={img}></Img>
                    <Title>
                    Inaam Ullah
                    </Title>
                    <Paragraph>
                        CEO / Founder
                    </Paragraph>
                    </Member>
                    <Member>
                    <Img src={img}></Img>
                    <Title>
                    Inaam Ullah
                    </Title>
                    <Paragraph>
                        CEO / Founder
                    </Paragraph>
                    </Member>
                </TeamWrapper>
            </Wrapper>
        </div>
    )
};

const Wrapper = styled.div`
padding:40px 0px;
background: #343333
`

const Heading = styled.h1`
text-align:center;
color:#fff;
`

const TeamWrapper = styled.div`
padding:40px 0px;
max-width: 1200px;
margin:0px auto;
display:flex;
justify-content:space-between;

`

const Title = styled.h3`
text-align: center;
color: #fff
`

const Paragraph = styled.p`
text-align: center;
color: #fff
`

const Member = styled.div`

`

const Img = styled.img`
width:200px;
height:200px;
border-radius:100%

`




export default Team;