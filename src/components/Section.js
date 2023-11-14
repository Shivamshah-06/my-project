import React , { useRef , useState } from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'


function Section() {
  const [loginStatus,setLoginStatus] =useState(false);
  const f1=useRef();
  const f2=useRef();
  const f3=useRef();
  const f4=useRef();
  const [text1, setText1]=useState("");
  const [text2, setText2]=useState("");
  const [text3, setText3]=useState("");
  const [text4, setText4]=useState("");
  const HancleClick=()=>{
    
    if(!f1.current.value || !f2.current.value || !f3.current.value || !f4.current.value ){
      alert("fill up all the field");
    }
    else{
      setLoginStatus(true);
      setText1(f1.current.value);
      setText2(f2.current.value);
      setText3(f3.current.value);
      setText4(f4.current.value);
    }
   }
   const closepress=()=>{
    setLoginStatus(false);
  }
  
 
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
      <InputField ref={f1}   /><br />
      <Head4>
        Enter Your Vehicle Name
      </Head4>
      <InputField  ref={f2} /><br />
      <Head4>
        Enter Your Vehicle Number
      </Head4>
      <InputField ref={f3}  /><br />
      <Head4>
        Enter Your Vehicle Color
      </Head4>
      <InputField ref={f4} /><br />
      <ButtonDiv>
     <LoginButtton onClick={HancleClick} >Submit</LoginButtton>
     </ButtonDiv>
     <PassWindow show={loginStatus}>
          <CloseWrapper onClick={closepress}>
        <img src="./Images/close.png" id="mapimg" />
        </CloseWrapper>
            <h2 style={{textAlign:'center'}}>Vehicle Tracked</h2>
            <h3 style={{textAlign:'center'}}>Vehicle Details</h3>
            <h4>Owner:{text1}</h4>
            <h4>Vehicle Name:{text2}</h4>
            <h4>Vehicle No.:{text3}</h4>
            <h4>Vehicle Colour:{text4}</h4>
            
            <a href="https://www.google.com/maps/place/Techno+Main+Salt+Lake/@22.5761707,88.4244544,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02751a9d9c9e85:0x7fe665c781b10383!8m2!3d22.5761707!4d88.4270293!16s%2Fg%2F11fml2v54k?entry=ttu" style={{textDecoration:'none' ,padding:'20px', backgroundColor:'green',borderRadius:'25px',margin:'20px',textAlign:'center'}} onClick={closepress}>Click to see location</a>

          </PassWindow>
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

`
const Container=styled.div`
border-radius: 50px;
background-image:url('./Images/track.jpg');
border-style:solid;
padding:40px;
width:800px;
height:600px;
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
font-size:20px;
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

const PassWindow=styled.div`
position: fixed;
color:black;
background:white;
 width:703px;
 heigth:300px;
 z-index:16;
 border-radius:25px;
 padding:100px;
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-item:center;
 transform: ${props => props.show ? "translateX(-4.5%)":"translateX(1000%)"};
 transition:transform 0s ;
 Link{
  padding:20px;
  
 } 
 
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`