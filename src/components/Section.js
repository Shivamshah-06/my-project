import React from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'

function Section() {
  return (
    <BigDiv>
<NavigationBar/>
    <Wrap>

    
    <Container>
            <Head>
            ENTER  DETAILS OF YOUR VEHICLE 
            </Head>
            <Head4>
        Enter Your Name
      </Head4>
      <InputField  /><br />
      <Head4>
        Enter Your Vehicle Name
      </Head4>
      <InputField  /><br />
      <Head4>
        Enter Your Vehicle Number
      </Head4>
      <InputField  /><br />
      <Head4>
        Enter Your Vehicle Color
      </Head4>
      <InputField  /><br />
      <ButtonDiv>
     <LoginButtton >Submit</LoginButtton>
     </ButtonDiv>
    </Container>
    </Wrap>
    </BigDiv>
  )
}

export default Section
const BigDiv = styled.div`
height:100vh;
width:100vw;
background-color:#010a4bc7;
background-image:url('./Images/home7.jpg');
background-repeat: no-repeat;
background-size:cover;


`
const Wrap=styled.div`

display:flex;

justify-content: center;
padding:20px;
`
const Container=styled.div`
border-radius: 50px;
background-image:url('./Images/track.jpg');
border-style:solid;
padding:50px;
width:800px;
display:flex;
flex-direction:column;
justify-content: center;
margin:20px;


font-size:30px;
color:white;`

const Head=styled.div`
font-weight:bolder;
text-align:center;
padding:50px`
const Head4=styled.div`
padding:5px;
`
const InputField=styled.input`
type: text;

font-size:30px;
height:40px;
border-radius: 5px;
background-color:#a7e0ca;

border:none;

`
const ButtonDiv=styled.div`
display:flex;

justify-content:center;
align-items:center;`
const LoginButtton=styled.button`
background-color:white;
font-size:30px;
color:white;
font-weight:bolder;
border-radius: 10px;
width:300px;
height:40px;
align-items: center;  

border:none;
background-color:#39ba5f;
`

