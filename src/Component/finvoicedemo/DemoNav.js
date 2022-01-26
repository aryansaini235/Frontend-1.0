import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assests/images/logo.png' 

const Navigation = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 90px;
top: 0;
inline-height: 85px; 
font-style: normal;
background: #ECEEEB;
font-family: "Averta Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
.wrapper{
    max-width: 1300px;
    position: relative;
    padding: 0 30px;
    margin: auto;
    display: flex;
    justify-content: space-between;
   
}
.logo{
    position: absolute;
    width: 80px;
    height: 80px;
    top: 5px;
    left: 10px;
    border-radius: 40px;
    background: url(${logo}) no-repeat center;
    background-size: cover;
}
.nav-links{
    position: absolute;
    width: 45%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    top: 7px;
    right: 5px;
    align-items: center;
    color: #c4c4c4;
    font-weight: 500;
    font-size: 20px;
    .link{
        color: black;
        text-decoration: none;
    }
    .link:hover{
        color: blueviolet;
    }
    .home-btn{
        text-decoration: none;
        width: 80px;
        height: 35px;
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
    .nav-btn{
        width: 80px;
        height: 32px;
        background: #cccccc;
        border-radius: 10px;
        border: none;
        font-size: 16px;
    }
}

`
const DemoNav = () => {
    return (
        <nav>
            <Navigation>
                <div className="wrapper">
                    <div className="logo"></div>
                    <div className="nav-links">
                    <Link  className="link" to="/product">Upload</Link>
                    <Link   className="link" to="/product/dataqueue">Data Queue</Link>
                    <Link  className="link" to="/product/dashboard">Dashboard</Link>
                    <Link  className="link" to="/product/myaccount">My Account</Link>
                    <Link  className="home-btn" to="/">Home</Link>
                    
                   
                    </div>
                </div>
            </Navigation>
        </nav>
    )
}

export default DemoNav;