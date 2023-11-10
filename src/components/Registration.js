import React ,{useRef}from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Registration() {
  const name=useRef();
  const vehi=useRef();
  const email=useRef();
  const pwd=useRef();
  
  const handleClick=()=>{
    localStorage.setItem("name",name.current.value);
    localStorage.setItem("vehi",vehi.current.value);
    localStorage.setItem("email",email.current.value);
    localStorage.setItem("pass",pwd.current.value);
    
  }
  
  return (
    <Container>
       <h1 style={{textAlign:'center', fontSize:'50px',color:'#1a1c80'}}>vehicle Tracking System</h1>
     
    <LoginWindow>
      <Head1>
        REGISTER YOURSELF
      </Head1>
      <Head4>Enter Name</Head4>
      <InputField ref={name}/><br />
      <Head4>Enter Vehicle No.</Head4>
      <InputField ref={vehi}/><br />
      <Head4>
        Enter Email
      </Head4>
      <InputField ref={email} /><br />
      <Head4>
        Enter Password
      </Head4>
      <InputField ref={pwd}/><br />
     <ButtonDiv>
     <LoginButtton onClick={handleClick}>Register</LoginButtton>
     </ButtonDiv>
      
      <Head4>
          <Link to="/log">Already Have an Account</Link>
      </Head4>
    </LoginWindow>
  </Container>
  )
}

export default Registration
const Container = styled.div`
height:100vh;
width:100vw;
background-color:#3dc2b2c7;
background-image:url('./Images/hand-painted-watercolor-pastel-sky-background_23-2148902771.avif');
background-repeat: no-repeat;
background-size:cover;
padding:50px;
display:flex;

justify-content:center;
align-items:center;
`
const LoginWindow = styled.div`

width:700px;
height:600px;
background-color:#0f0f46;
background-image:url('./Images/login2.jpeg');
background-repeat: no-repeat;
background-size:cover;
font-size:25px;

padding:25px;
border-radius:25px;
font-size:20px;
display:flex;
flex-direction:column;
justify-content:center;

color:white;
`
const Head1=styled.h1`
text-align:center;
padding:25px;

`
const Head4=styled.div`
padding:5px;
font-size:30px;
`
const InputField=styled.input`
type: text;
border-radius: 5px;
background-color:#a7e0ca;
background-color:white;
height:30px;
border:none;
font-size:25px;

`
const ButtonDiv=styled.div`
display:flex;

justify-content:center;
align-items:center;`
const LoginButtton=styled.button`
background-color:white;
height:30px;
font-size:22px;
margin-bottom:15px;
border-radius: 10px;
width:300px;
align-items: center;  
text:bold;
border:none;
background-color:#61dafb;
`
