import React from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'
function Maintain() {
  return (
    <BigDiv>
<NavigationBar/>
    <Container>
      
        <Wrap>
        <Head>
            <h1>Vehicle Maintainance</h1>
            </Head>
            
            <SubDiv>
              <Head>
              Mileage Metre
              </Head>
              Your Average Mileage is: 40KM/Litre <br />
              <a href="./Images/Mileage.png" style={{FontWeight:'bold',color:'#9c0d0d'}}>View Details</a>
            </SubDiv>
            <SubDiv>
            <Head>
              Average Speed
              </Head>
              Your Average Speed is: 60KM/Hour <br />
              <a href="./Images/speed.png" style={{FontWeight:'bold',color:'#9c0d0d'}}>View Details</a>
            </SubDiv>
            <SubDiv>
            <Head>
              Distance Metre
              </Head>
              Total Distance Travel:52666.55KM <br />
              Average Per Day Distance Travel: 26KM <br/>
              <a href="./Images/distance.jpg" style={{FontWeight:'bold',color:'#9c0d0d'}}>View Details</a>
            </SubDiv>
            
        </Wrap>
    </Container>
    </BigDiv>
  )
}

export default Maintain
const BigDiv = styled.div`
height:100vh;
width:100vw;
background-color:#010a4bc7;
background-image:url('./Images/home7.jpg');
background-repeat: no-repeat;
background-size:cover;


`
const Container=styled.div`
display:flex;

justify-content: center;
padding:20px;
`
const Wrap=styled.div`
border-style:solid;
width:600px;
height:700px;
background-image:url('./Images/Main.jpg');
background-repeat: no-repeat;
background-size:cover;
padding:50px;
border-radius:25px;
font-size:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:white;`

const Head=styled.div`
font-weight:bolder;
text-align:center;
padding:5px;
font-size:25px;
`
const SubDiv=styled.div`
padding:20px;
color:green;

width: 500px;
height:150px;
border-radius:20px;
margin:20px;
background-image:url('./Images/Sub2.jpeg');
background-repeat: no-repeat;
background-size:cover;`