import React , { useRef , useState } from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'

function Fleet() {
  const [loginStatus,setLoginStatus] =useState(false);
  const f1=useRef();
  const f2=useRef();
  const f3=useRef();
  const f4=useRef();
  const f5=useRef();
  const f6=useRef();
  const f7=useRef();
  const [text1, setText1]=useState("");
  const [text2, setText2]=useState("");
  const [text3, setText3]=useState("");
  const [text4, setText4]=useState("");
  const [text5, setText5]=useState("");
  const [text6, setText6]=useState("");  
  const [text7, setText7]=useState("");

  

  const HancleClick=()=>{
    if(!f1.current.value || !f2.current.value || !f3.current.value || !f4.current.value || !f5.current.value || !f6.current.value || !f7.current.value ){
      alert("fill up all the field");
    }
    else{
      setLoginStatus(true);
      setText1(f1.current.value);
      setText2(f2.current.value);
      setText3(f3.current.value);
      setText4(f4.current.value);
      setText5(f5.current.value);
      setText6(f6.current.value);
      setText7(f7.current.value);
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
            FLEET MANAGEMENT 
            <br />
            Enter details
            </Head>
            
            <SubDiv>
        <SupDiv>
      <Head4>
        Enter Your  Name
      </Head4>
      <InputField ref={f1} />
      </SupDiv>
      <SupDiv>
        <Head4>
        Enter Your Contact  Number
      </Head4>
      <InputField ref={f2} />
      </SupDiv>
      </SubDiv>
      <SubDiv>
        <SupDiv>
      <Head4>
        Enter Driver's  Name
      </Head4>
      <InputField ref={f3}  />
      </SupDiv>
      <SupDiv>
        <Head4>
        Enter Driver's Contact  Number
      </Head4>
      <InputField ref={f4} />
      </SupDiv>
      </SubDiv>
      <Head4>
        Enter Your Vehicle Number
      </Head4>
      <InputField ref={f5} /><br />
      <Head4>
        Enter Central Location
      </Head4>
      <InputField  ref={f6}/><br />
      <Head4>
        Enter Area Radius 
      </Head4>
      <InputField  ref={f7}/><br />
      <ButtonDiv>
     <LoginButtton onClick={HancleClick} >Submit</LoginButtton>

     </ButtonDiv>
     <PassWindow show={loginStatus}>
          <CloseWrapper onClick={closepress}>
        <img src="./Images/close.png" id="mapimg" />
        </CloseWrapper>
            <h2 style={{textAlign:'center'}}>Target set successfully</h2>
            <h3 style={{textAlign:'center'}}>Vehicle Details</h3>
          <ul>
          <li>Owner:{text1}</li>
            <li>Driver Name:{text3}</li>
            <li>Vehicle owner will recieve alert if any irregularaties happens at :{text2}</li>
            <li>driver will recieve warning if any irregularaties happens at:{text4}</li>
            <li>Vehicle Radius:{text7}</li>
            <li>Vehicle No.:{text5}</li>
            <li>Central Location:{text6}</li>
          </ul>

            <a href="https://www.google.com/maps/place/Techno+Main+Salt+Lake/@22.5761707,88.4244544,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02751a9d9c9e85:0x7fe665c781b10383!8m2!3d22.5761707!4d88.4270293!16s%2Fg%2F11fml2v54k?entry=ttu" style={{textDecoration:'none' ,padding:'20px', backgroundColor:'green',borderRadius:'25px',margin:'20px',textAlign:'center'}} onClick={closepress}>Click to see live location</a>

          </PassWindow>
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
background-image:url('./Images/home7.jpg');
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
background-image:url('./Images/track.jpg');
border-style:solid;
padding:20px;
width:765px;
height:642px;
display:flex;
flex-direction:column;
justify-content: center;

font-size:30px;
color:white;`

const Head=styled.div`
font-weight:bolder;
text-align:center;
padding:20px`
const Head4=styled.div`

`
const InputField=styled.input`
type: text;
width:300px;
font-size:30px;
height:25px;
border-radius:5px;
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

`
const SupDiv=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding:10px;
`
const PassWindow=styled.div`
position: fixed;

color:black;

background:white;
 width:800px;
 heigth:300px;
 z-index:16;
 border-radius:25px;
 padding:50px;
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-item:center;
 transform: ${props => props.show ? "translateX(-3%)":"translateX(1000%)"};
 transition:transform 0s ;
 Link{
  padding:20px;
  
 } 
 
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`