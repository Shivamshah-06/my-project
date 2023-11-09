import React ,{useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


function NavigationBar() {
    const [burgerStatus, setBurgerStatus]= useState(false);
  return (
    <Navigation>
        <Map>
           
            <a href="https://www.google.com/maps/@22.6230272,88.3851264,13z?entry=ttu" style={{textDecoration:'none'}}>
            <img src="./Images/map.png" id="mapimg" />
            </a>
            
        </Map>
        <Tracker>
           <Link to="/track" style={{textDecoration:'none'}}>Track Your Vehicle</Link>
        </Tracker>
        <Fleet>
        <Link to="/fleet" style={{textDecoration:'none'}}>Fleet Management</Link>
            
        </Fleet>
        <Maintain>
        <Link to="/maintain" style={{textDecoration:'none'}}>Check Maintance </Link>
            
        </Maintain>
        <Profile  onClick={()=>setBurgerStatus(true)}>
        <img src="./Images/profile.png" id="mapimg" />
       
        </Profile>
        
        <BurgerNav show={burgerStatus}>
        <CloseWrapper onClick={()=>setBurgerStatus(false)}>
        <img src="./Images/close.png" id="mapimg" />
        
        </CloseWrapper>
        <li><h1>Name</h1></li>
        <li><h4>{(localStorage.getItem('name'))}</h4></li>
        <hr />
        <li><h1>Vehicle Number</h1></li>
        <li><h4>{(localStorage.getItem('vehi'))}</h4></li>
        <hr />
        
        
        <li><h1>
            Mobile Number
        </h1></li>
        <li><h4>9835494843</h4></li>
        <li><h2><Link to="/log" style={{textDecoration:'none' , color:'black',fontWeight:'bolder' ,}}>LOGOUT</Link></h2></li>
        </BurgerNav>
     
    </Navigation>
  )
}

export default NavigationBar
const Navigation=styled.div`
color:white;
padding:20px;
font-size:20px;
display:flex;
justify-content: space-between;
cursor:pointer;
`
const Map=styled.div`
display:flex;
justify-content: space-between;
`
const Tracker=styled.div``
const Fleet=styled.div``
const Maintain=styled.div``
const Profile=styled.div``

const BurgerNav=styled.div`
position: fixed;
top:0;
bottom:0;
right:0;
background:white;
 width:400px;
 z-index:16;
list-style:none;
 padding:20px;
 display:flex;
 flex-direction: column;
 text-align:start;
 transform: ${props => props.show ? "translateX(0)":"translateX(100%)"};
  transition:transform 1s ;
 li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0, .2);
  color:black;
}
`

const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
color:black;
`
