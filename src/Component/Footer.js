import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

const Wrapper = styled.div`
font-style: normal;
font-family: Averta Web, Helvetica Neue, Helvetica, Arial, sans-serif;
background: #000000;
width: 100%;
.social-div{
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;
    .icon-wrapper{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        height: 50px;
        .icon{
            width: 40px;
            height: 40px;

        }
    }
}
.copyright-div{
    display: flex;
    width: 100%;
    margin-top: 10px;
    padding-bottom: 10px;
    justify-content: center;
    .text{
       font-size: 16px;
       color: #C4C4C4;
       span{
           color: white;
           font-size: 18px;
       }
    }
}
@media(max-width: 500px){
   .copyright-div .text{
       font-size: 15px;
   }
`

const Footer = () => {
    return (
       <footer>
        <Wrapper>
        <div className="social-div">
        <div className="icon-wrapper">
        <div className="icon">
        <SocialIcon url="https://twitter.com/finvoiced" style={{height: "40px", width: "40px"}}  />
        </div>
        <div className="icon">
        <SocialIcon url="https://www.facebook.com/finvoiced" style={{height: "40px", width: "40px"}}/>
        </div>
        <div className="icon">
        <SocialIcon url="https://www.instagram.com/finvoiced/" style={{height: "40px", width: "40px"}}/>
        </div>
        </div>
        </div>
        <div className="copyright-div">
        <div className="text">© Copyright 2021 <span>Freezon Labs</span> - All Rights Reserved</div>
        </div>
        </Wrapper>
       </footer>
    )
}

export default Footer;