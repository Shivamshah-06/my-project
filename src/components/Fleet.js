import React from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'

function Fleet() {
  return (
    <BigDiv>
<NavigationBar/>
    <Wrap>

    
    <Container>
            <Head>
            FLEET MANAGEMENT 
            <br />
            Enter details
            </Head>
            
            <SubDiv>
        <SupDiv>
      <Head4>
        Enter Your  Name
      </Head4>
      <InputField  />
      </SupDiv>
      <SupDiv>
        <Head4>
        Enter Your Contact  Number(for sending alert)
      </Head4>
      <InputField  />
      </SupDiv>
      </SubDiv>
      <SubDiv>
        <SupDiv>
      <Head4>
        Enter Driver's  Name
      </Head4>
      <InputField  />
      </SupDiv>
      <SupDiv>
        <Head4>
        Enter Driver's Contact  Number(for sending warning)
      </Head4>
      <InputField  />
      </SupDiv>
      </SubDiv>
      <Head4>
        Enter Your Vehicle Number
      </Head4>
      <InputField  /><br />
      <Head4>
        Enter Central Location
      </Head4>
      <InputField  /><br />
      <Head4>
        Enter Area Radius (for setting Boundary in Kms)
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

export default Fleet
const BigDiv = styled.div`
height:100vh;
width:100vw;
background-color:#010a4bc7;
background-image:url('/Images/home7.jpg');
background-repeat: no-repeat;
background-size:cover;


`
const Wrap=styled.div`

display:flex;
justify-content: center;
padding:10px;
`
const Container=styled.div`
border-radius: 50px;
background-image:url('/Images/track.jpg');
border-style:solid;
padding:30px;
width:1000px;
display:flex;
flex-direction:column;
justify-content: center;
margin:20px;


font-size:30px;
color:white;`

const Head=styled.div`
font-weight:bolder;
text-align:center;
padding:30px`
const Head4=styled.div`
padding:5px;
`
const InputField=styled.input`
type: text;
width:400px;
font-size:30px;
height:30px;
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

const SubDiv=styled.div`
display:flex;
justify-content:space-between;

`
const SupDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding:10px;
`