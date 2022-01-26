import React, { useContext, useEffect, useState } from 'react'
import firebase from 'firebase';

import styled from 'styled-components'
import logo from '../assests/images/logo.png'
import history from './history'
import {AuthContext} from "../Auth"
import demopic from '../assests/images/demopic.png'

import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { MdArrowForward } from 'react-icons/md'




const Nav = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 85px;
inline-height: 85px; 
font-style: normal;
background: #ffffff;
font-family: "Averta Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
.wrapper{
    max-width: 1300px;
    position: relative;
    padding: 0 30px;
    margin: auto;
    display: flex;
    justify-content: flex-end;
}
.wrapper .nav-links .inner-nav{
    display: none;
}
.wrapper .btn{
    color: #7849D5;
    font-size: 30px;
    cursor: pointer;
    display: none;
}

.wrapper .logo{
    position: absolute;
    width: 70px;
    height: 70px;
    top: 7px;
    left: 10px;
    border-radius: 35px;
    background: url(${logo}) no-repeat center;
    background-size: cover;
   
}
.wrapper .nav-links{
    display: inline-flex;
    justify-content: space-between;
    margin-right: 180px;
    padding-top: 10px;

}

.nav-links li{
     display: inline-flex;
     justify-content: space-between;
    list-style: none;
    cursor: pointer; 
}
.nav-links li a{
    color: black;
    text-decoration: none;
    text-size: 16px;
    font-weight: 600;
    padding: 9px 15px;
    .drop-down-one, .drop-down-two{
        font-size: 15px;
        transition: all 0.5s ease;
      }
      .rotate {
        transform: rotate(180deg);
      }
}
.nav-links li a:hover{
    color:  #7849D5;
    transition: all 0.3s ease;
}
.nav-links li .loginbtn{
    position: absolute;
    width: 90px;
    height: 35px;
    margin-left: 15px;
    font-size: 16px;
    font-weight: 600; 
    background: #111111;
    color: white;
    text-align: center;
    line-height: 35px;
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}
.nav-links li .loginbtn:hover{
    border: 3px solid #202020;
}
.nav-links li .signupbtn{
    position: absolute;
    width: 80px;
    height: 35px;
    font-weight: 500; 
    line-height: 35px;
    text-align: center;
    font-size: 16px; 
    margin-left: 120px;
    color: white;
    background: #000000;
    border: 2px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}
.nav-links li .signupbtn:hover{
    border: 3px solid #ffffff;
    background: #202020;
    color: #ffffff;
}
.mega-box-one{
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    height: 400px;
    background: #000000;
    opacity: ${props => (props.clickedone ? '1' : '0')};
    visibility: ${props => (props.clickedone ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
}
.mega-box-two{
    position: absolute;
    top: 85px;
    left: 0;
    width: 100%;
    height: 400px;
    background: #000000;
    opacity: ${props => (props.clickedtwo ? '1' : '0')};
    visibility: ${props => (props.clickedtwo ? 'visible' : 'hidden')};
    transition: all 0.3s ease;
}
.mega-box-one .content{
    padding-top: 20px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}
.content .row{
 width: calc(30% - 20px);
 inline-height: 45px;
 text-align: left;
}
.content .row header{
    color: white;
    display: block;
    font-size: 20px;
    font-weight: 600;
    line-height: 35px;
    margin-top: 30px;
    
}
.content .row h4{
    color: #7849D5;
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-top: 35px;
    line-height: 20px;  
}
.content .row p{
    color: #CCCCCC;
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;    
}
.content .row img{
    width: 100%;
    height: 230px; /*354*/
   margin-top: 50px;
   background: #333;
}
.mega-box-two .content{
    display: flex;
    width: 100%;
    justify-content: space-around;
}
.content .rowtwo{
    width: calc(30% - 20px);
    inline-height: 45px;
    text-align: left;
}
.content .rowthree{
    width: calc(35% - 20px);
    inline-height: 45px;
    text-align: left;
}
.content .row{
 width: calc(48% - 10px);
 display: flex;
 inline-height: 45px;
 text-align: left;
 justify-content: space-between;
}
.content .row .innerrow{
    width: calc(50% - 40px);
    inline-height: 45px;
    margin-left: 50px;
    text-align: left;
}
.content .row header{
    color: white;
    display: block;
    font-size: 20px;
    font-weight: 600;
    line-height: 35px;
    margin-top: 20px;
    
}
.content .row h4{
    color: #7849D5;
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-top: 30px;
    line-height: 20px;  
}
.content .row p{
    color: ##CCCCCC;
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;    
}
.content .row img{
   width: 85%;
   display: block;
   margin-left: auto;
   margin-right: auto;
   height: 270px; 
   margin-top: 50px;
   background: #333;
}
.content .rowtwo .flow-line{
    border-left: 2px solid #CCCCCC;
}
.content .rowtwo header,.content .rowthree header {
color: white;
display: block;
font-size: 20px;
font-weight: 600;
line-height: 35px;
margin-top: 20px;
}
.content .rowtwo h4, .content .rowthree h4{
color: #7849D5;
display: block;
font-size: 16px;
font-weight: 600;
margin-top: 15px;
line-height: 20px;  
}
.content .rowtwo h3, .content .rowthree h3{
    color: #7849D5;
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-top: 15px;
    line-height: 10px;  
    }
.content .rowtwo p, .content .rowthree p{
color: #CCCCCC;
display: flex;
font-size: 12px;
font-weight: 400;
line-height: 20px;    
}
@media all and (max-width: 1024px){
    .wrapper{
        max-width: 100%;
        display: block;
    }  
    .wrapper .logo{
     margin-left: 30px;
     top: 10px;
    }  
    .wrapper .nav-links{
       position: fixed;
       height: 72vh;
       width: 100%;
       max-width: 350px;
       background: #000000;
       text-align: left;
       display: block;
       margin-top: 0;
       z-index: 999;
       left: -100%;
       overflow-y: auto;
       line-height: 50px;
       padding: 100px 10px;
       box-shadow: 0 15px 15px rgba(0,0,0,0, 0.25);
       transition: all 0.5s ease;
       .inner-nav{
        display: flex;
        position: fixed;
        z-index: 9999;
        height: 100px;
        background: #000000;
        top: 0;
        .logo{
            position: absoulte;
            width: 80px;
            height: 80px;
            left: 0;
            border-radius: 40px;
            background: url(${logo}) no-repeat center;
            background-size: cover;
        
        }
        .cancel-btn{
            position: absoulte;
            display: block;
            margin-left: 310px;
            margin-top: 10px;
         }
    }
    }
    .wrapper .nav-links.active{
        transition: all 0.5s ease;
        left: 0%;
    }
     .wrapper .btn{
         display: block;
     }
    .wrapper .menu-btn{
        position: relative;
        padding-top: 30px;
        display: flex;
        justify-content: flex-end;
    }
   
    .wrapper .nav-links::-webkit-scrollbar {
        display: none;
      }
    .nav-links li{
      position: relative;
      margin: 15px 20px !important;
      display: block;

    }
    .nav-links li a{
        padding: 0 20px !important;
        font-size: 20px;
        color: #ffffff;
    }
    .nav-links li .loginbtn{
        font-size: 20px;
        font-weight: 600;
        margin-left: 10px;
        margin-top: 10px;
        display: block;
        border: 0;
        background: none;
        color: #ffffff;
    }
    .nav-links li .loginbtn:hover{
        color:  #7849D5;
        background: none;
        border: none;
        transition: all 0.3s ease;
    }
    .nav-links li .signupbtn{
        display: block;
        margin-left: 15px;
        margin-top: 75px;
        font-size: 20px;
        font-weight: 600;
        display: block;
        border: 0;
        background: none;
    }
    .nav-links li .signupbtn:hover{
        color:  #7849D5;
        background: none;
        border: none;
        transition: all 0.3s ease;
    }
    .mega-box-one, .mega-box-two{
        position: static;
        width: 100%;
        height: 135vh;
        padding: 0 20px !important;
        margin-bottom: 40px !important;
    }
    .mega-box-one .content, .mega-box-two .content{
        position: static;
        flex-direction: column;
        margin: 20px !important;
        height: 135vh;
    
    }
     .mega-box-two .content .row,.mega-box-two .content .rowtwo,.mega-box-two .content .rowthree{
       width: 90%;
       margin-left: 0;
       margin-bottom: 15px !important;
       border-top: 1px solid rgba(225, 225, 225,0.08);
     }
     .mega-box-one .content .row{
        position: static;
        width: 100%;
        flex-direction: column;
        margin-bottom: 15px !important;
     }
     .mega-box-one .content .row .innerrow{
        width: 90%;
        margin-left: 0;
        display: visible;
        padding-bottom: 15px !important;
        border-top: 1px solid rgba(225, 225, 225,0.08);
     }
     .mega-box-one .content .row img{
        width: 90%;
        margin-left: 0;
        margin-bottom: 100px;
     }
}
@media all and (max-width: 320px){
    .wrapper{
        max-width: 100%;
        display: block;
    }  
}
`

const MegaBoxOne = () => {
    return (
        <div className="mega-box-one" >
            <div className="content">
                <div className="row">
                    <div className="innerrow">
                        <header>For usecases</header>
                        <h4>Invoice Processing</h4>
                        <p>Eliminate painful invoice-intensive process</p>
                        <h4>Forms Processing</h4>
                        <p>Extract insightful information from any documents like a humans</p>
                    </div>
                    <div className="innerrow">
                        <header>For businesses</header>
                        <h4>Cloud Feasible</h4>
                        <h4>Enterprise inclination</h4>
                        <h4>All set solution for SMB</h4>
                        <h4>Technology primacy</h4>
                    </div>

                </div>
                <div className="row">
                    <img src={demopic}></img>
                </div>
            </div>
        </div>
    )
}
const MegaBoxTwo = () => {
    return (
        <div className="mega-box-two" >
            <div className="content">
                <div className="rowtwo">
                    <header>Solutions</header>
                    <h4>Document-agonistic data extraction</h4>
                    <p>dummy text is used by many web-developers to test how their HTML templates will look with real data</p>
                    <h4>Handwritten form extraction</h4>
                    <p>dummy text is used by many web-developers to test how their HTML templates will look with real data</p>

                </div>
                <div className="rowthree">
                    <header>Features</header>
                    <h3>Data Kollect</h3>
                    <p>dummy text is used by many web-developers to test how their HTML templates will look with real data</p>
                    <h3>Data Kapture</h3>
                    <p>dummy text is used by many web-developers to test how their HTML templates will look with real data</p>
                    <h3>Data Xport</h3>
                    <p>dummy text is used by many web-developers to test how their HTML templates will look with real data</p>
                    <h3>Data Konnect</h3>
                    <p>dummy text is used by many web-developers to test how their HTML templates will look with real data</p>

                </div>
                <div className="rowtwo">
                    <header>Integrations</header>
                    <h4>Partner Integration</h4>
                    <div className="flow-line">
                        <p><MdArrowForward size="18px" /><div>RPA</div></p>
                        <p><MdArrowForward size="18px" /><div>DMS</div></p>
                        <p><MdArrowForward size="18px" /><div>ERP</div></p>
                    </div>
                    <h4>API Integration built a custom integration</h4>
                </div>
            </div>
        </div>
    )
}

const Navbar = () => {
    const [megaboxone, Setmegaboxone] = useState(false)
    const [megaboxtwo, Setmegaboxtwo] = useState(false)
    const [isActive, SetisActive] = useState(false)
    const [dropdownone, SetdropdownOne] = useState(false)
    const [dropdowntwo, SetdropdownTwo] = useState(false)
    const {currentUser} = useContext(AuthContext)

  const logout = () => {
    try {
        firebase.auth().signOut().then(() => {
        alert('Now login or register here!')
      })
    } catch {
      alert('logout is not possible')
    }
  }

    return (
        <Nav clickedone={megaboxone} clickedtwo={megaboxtwo}>
            <nav className="wrapper">
                <div className="logo" />
                <ul className={`nav-links ${isActive && "active"}`}>
                    <div className="inner-nav">
                        <label className="btn cancel-btn" onClick={() => { SetisActive(!isActive);}}><FaTimes /></label>
                        <div className="logo" />
                    </div>
                    <li><a
                        onClick={() => {
                            { (megaboxtwo) && Setmegaboxtwo(false); }
                            Setmegaboxone(!megaboxone);
                            { (dropdowntwo) && SetdropdownTwo(false); }
                            SetdropdownOne(!dropdownone);
                        }}
                    >Why Finvoiced? <FaChevronDown className={`drop-down-one ${dropdownone && "rotate"}`} />
                    </a>
                        {megaboxone && <MegaBoxOne></MegaBoxOne>}
                    </li>

                    <li><a
                        onClick={() => {
                            { (megaboxone) && Setmegaboxone(false); }
                            Setmegaboxtwo(!megaboxtwo);
                            { (dropdownone) && SetdropdownOne(false); }
                            SetdropdownTwo(!dropdowntwo);
                            ;
                        }}
                    >Product <FaChevronDown className={`drop-down-two ${dropdowntwo && "rotate"}`} />
                    </a>
                        {megaboxtwo && <MegaBoxTwo></MegaBoxTwo>}
                    </li>
                    <li><a href="/stories">Stories</a></li>
                    {!currentUser &&   <li><div className="loginbtn" onClick={() => history.push('/signin')}>Login</div></li>}
                    {currentUser &&   <li><div className="loginbtn" onClick={() => {
                        history.push('/product');
                    }}>Product</div></li>}
                    {!currentUser &&   <li><div className="signupbtn" onClick={() => history.push('/signup')}>Signup</div></li>} 
                   
                </ul>
                <label className="btn menu-btn" onClick={() => { SetisActive(!isActive); }}><FaBars /></label>
            </nav>
        </Nav>
    )
}

export default Navbar;
