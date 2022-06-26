import styled from "styled-components";
import img from '../assets/niftydog.jpeg'


const ChapterOne = () =>{

return(
<div>
    <Wrapper>
        <Image>
        <IMG src={img} alt="" />
        </Image>
        <Section>
            <Heading>
            01    
            </Heading>
            <DetailWrapper>
        <Details>
        1.1 The Inter-relationship between Veterans
 and Service Dogs
        </Details>
        <Details>
1.2 Benefits of a Service Dog to Service Members
        </Details>
        <Details>
1.3 Nifty Dogs Platform Overview
        </Details>
        </DetailWrapper>
        </Section>
    </Wrapper>

    <Boxes>
        <Box>
        <Title>
        The Interrelationship between Veterans and Service dogs.
        </Title>
        <Paragraph>
        A number of veterans either experience PTSD immediately after leaving the military
service or in later life. According to PTSD VA, about 11-20 out of every 100 veterans
who served in OEF or O.I. have PTSD in a year. The same study states that about 12
out of each 100 Gulf War veterans have PTSD in a year, and about 15 out of every
100 Vietnam war veterans were diagnosed with PTSD. For all veterans diagnosed
with PTSD, various clinical programs are integrated to reduce the burdens of the
symptoms. However, the post-PTSD treatment result shows a significant burden
of symptoms in veterans. As PTSD can either be acute or chronic, veterans take a
longer time to heal because they are usually diagnosed with chronic and recurring
PTSD. With the limited effect of clinically approved treatment options, the Pairing
Assistance Dogs Soldiers study showed that service dogs could significantly reduce
the symptoms of PTSD in veterans.
        </Paragraph>
        </Box>
        <Box>
        <Title>
        Benefits of a Service Dog to Service Members
        </Title>
        <Paragraph>
        Service dogs for treating PTSD are considered a form of Animal Assisted Intervention
(ASI). In a study by Yount, Ritchie, St Laurent, Chumley, and Olmert 2013, service
dogs decreased negative emotions, aided positive mood and increased welfare in
humans. In another study involving 141 Iraq and Afghanistan war veterans suffering
from depression and PTSD, seventy-five (75) of the veterans were paired with trained
service dogs, while the remaining sixty-six (66) were on the waiting list to get a dog.
For the veterans who got service dogs, their dogs were trained to wake patients from
nightmares, avert panic attacks, create personal and comfortable spaces in public
spaces, and ensure that vets take their prescribed drugs. Just like the dogs, the
veterans were trained for three weeks on how to handle and care for their service
dogs.

        </Paragraph>
        </Box>
        <Box>
<Title>
Nifty Dogs Platform Overview
</Title>
<Paragraph>
Various reports have shown the effectiveness of service dogs in helping PTSD
veterans. Yet, many veterans do not have a service dog or the resources to maintain
one. Hence, Nifty Dog platform was developed to pair trained service dogs with
veterans as a communal platform. It functions as an approach toward reducing the
increased suicide rates amongst veterans and individuals battling with PTSD while
helping every beneficiary regain their health and good quality of life. Nifty Dog partners
with K9s for Warriors to preserve the lives of veterans and help them live a life free
of trauma by training and managing service dogs. While the cost of service dogs is
immeasurable for K9s for Warriors, Nifty Dog leverages blockchain technology and
NFTs to source funds needed to train service dogs and have them paired with every
veteran in the decentralized community. Community members who also need to train
their dogs can have the community fund the training and management process.
</Paragraph>
        </Box>
    </Boxes>
</div>
)

};

const Boxes = styled.div`
max-width:1200px;
padding: 40px 0px;
margin: 0px auto;
display:flex;
justify-content:space-between;
`
const Box = styled.div`
width: 30.33%;
`
const Title = styled.h3`
`
const Paragraph = styled.p`
`

const Wrapper = styled.div`
max-width: 1200px;
margin:0px auto;
display:flex;
align-items:center;
padding:40px 0px;
justify-content:space-between;
`
const DetailWrapper = styled.div`
`
const Section = styled.div`


`
const Image = styled.div`
`
const IMG = styled.img`
width:600px;
`

const Heading = styled.h1`
font-size:48px
`
const Details = styled.p`
`
export default ChapterOne;
