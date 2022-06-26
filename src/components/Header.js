import styled from 'styled-components';
import logoimage from "../assets/logo.png"

const Header = () =>{

    return(
        <div>
            
            <Wrapper>
            <div>
            <IMG src={logoimage} alt="nn"  />
            </div>


            <Nav>
            <UL>
                <LI>Menu1</LI>
                <LI>Menu1</LI>
                <LI>Menu1</LI>
                <LI>Menu1</LI>
                <LI>Menu1</LI>

            </UL>
            </Nav>
            </Wrapper>
        </div>
    )
};

const Wrapper = styled.div`
display:flex;
flex-direction:row;
margin: 0px auto;
align-items:center;
background:#000;
border-bottom: 1px solid #fff;
`
const IMG = styled.img`
width:120px;
margin:10px 30px 0px 30px;
`

const Nav = styled.nav`
width:80%;
` 
const UL = styled.ul`
display:flex;
justify-content:end;
list-style-type:none;
`
const LI = styled.li `
padding:10px 20px;
color: #fff;
`

export default Header;

