import React ,{ useState }from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useRef } from 'react'


function Login() {
  const [loginStatus,setLoginStatus] =useState(false);
  const id=useRef();
  const p1=useRef();
  const handlepress=()=>{ 
    const e1=localStorage.getItem('email');
    const p2=localStorage.getItem('pass');

  
    
    if(id.current.value===e1){
      if(JSON.stringify(p1.current.value)===JSON.stringify(p2)){
        setLoginStatus(true);
      } 
      else{
        alert("Invlid password");
      }
    }
    else{
      alert("wrong email");
    }
    
  }
  const closepress=()=>{
    setLoginStatus(false);
  }
 
  return (
    <Container >
      <h1 style={{textAlign:'center', fontSize:'50px',color:'#1a1c80'}}>vehicle Tracking System</h1>
      <LoginWindow>
        <Head1>
          LOGIN
        </Head1>
        <Head4>
          Enter Email
        </Head4>
        <InputField ref={id} /><br />
        <Head4>
          Enter Password
        </Head4>
        <InputField ref={p1}/><br />
        <a href="">forget password?</a><br />
        
        <LoginButtton onClick={handlepress} >
          Login
          </LoginButtton>
          <PassWindow show={loginStatus}>
          <CloseWrapper onClick={closepress}>
        <img src="./Images/close.png" id="mapimg" />
        </CloseWrapper>
            <h2 style={{textAlign:'center'}}>Save Password</h2>
            <Link to="/track" style={{textDecoration:'none' ,padding:'20px', backgroundColor:'blue',borderRadius:'25px',margin:'20px', textAlign:'center',fontWeight:'bolder'}} onClick={closepress}>Not Now</Link>
            <Link to="/track" style={{textDecoration:'none' ,padding:'20px', backgroundColor:'green',borderRadius:'25px',margin:'20px',textAlign:'center'}} onClick={closepress}>Save</Link>

          </PassWindow>
        <br />
        <Head4>
            <Link to="/new" style={{textDecoration:'none'}}>Create New Account</Link>
        </Head4>
      </LoginWindow>
    </Container>
  )
}

export default Login
const Container = styled.div`
height:100vh;
width:100vw;
background-color:#3dc2b2c7;
background-image:url('./Images/hand-painted-watercolor-pastel-sky-background_23-2148902771.avif');
background-repeat: no-repeat;
background-size:cover;
padding:50px;
 
display:flex;
flex-direction:column;

align-items:center;

`
const LoginWindow = styled.div`

width:700px;
height:600px;
background-color:#0f0f46;
background-image:url('./Images/login3.jpeg');
background-repeat: no-repeat;
background-size:cover;
font-size:25px;
padding:25px;
border-radius:25px;
font-size:30px;
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
const LoginButtton=styled.button`
background-color:white;
height:30px;
font-size:25px;
width:300px;
margin-right:200px;
margin-left:200px;
border-radius: 10px;

border:none;
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
