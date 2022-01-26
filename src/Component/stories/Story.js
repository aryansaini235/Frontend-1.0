import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MdArrowBack, MdArrowForward} from "react-icons/md";
import newbg from '../../assests/images/newbg.png'
import logo from '../../assests/images/logo.png'
import demoone from '../../assests/images/demoone.png'
import demotwo from '../../assests/images/demotwo.png'
import demothree from '../../assests/images/demothree.png'
import demofour from '../../assests/images/demofour.png'
import Navbar from '../Navbar';

const Stories = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
position: relative;
text-align: left;
z-index: 0;
background: #ffffff;
.nav_back{
    background: #ffffff;
}
.nav{
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  height: 60px;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  .nav_logo{
    position: fixed;
    left: 20px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: contain;
    transition-timing-function: ease-in;
    transition: all 0.5s;
  }
  .new_logo{
    width: 80px;
    height: 80px;
    top:10px;
    border-radius: 40px;
  }
  .back{
    display: flex;
    font-size: 20px;
    margin-right:45px;
    margin-top: 25px;
    a{
        text-decoration: none;
        color: #111111;
        font-weight: 600;
    }
  }
}
.banner{
    color: #111111;
    object-fit: contain;
    height: 448px;
    padding-top: 150px;
    width: 100%;
    background: url(${newbg}) no-repeat center;
    background-size: cover;
}
.banner_contents {
    margin-left: 30px;
    padding-top: 140px;
    height: 190px;
    .banner_title {
        font-size: 3rem;
        font-weight: 800;
        color: #111111;
        padding-bottom: 0.3rem;
      }
      .banner_description {
        width: 45rem;
        line-height: 1.3;
        padding-top: 1rem;
        font-size: 2rem;
        max-width: 500px;
        height: 80px;
      }
      .banner_button {
        cursor: pointer;
        color: #111111;
        outline: none;
        border: none;
        font-weight: 700;
        border-radius: 0.2vw;
        padding-left: 4rem;
        padding-right: 4rem;
        margin-right: 1rem;
        padding-top: 0.8rem;
        background-color: rgba(51, 51, 51, 0.5);
        padding-bottom: 0.8rem;
      }
      .banner_button:hover {
        color: #ffffff;
        background-color: #111111;
        transition: all 0.2s;
      }
  }
 
  .banner--fadeBottom {
    height: 7.4rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0),
      #ffffff
    );
  }
  .row {
    margin-left: 20px;
    color: #111111;
    h1{
        padding-left: 35px;
    }
  }
  .row_posters {
    display: flex;
    width: 92%;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 30px;
  }
  .row_posters::-webkit-scrollbar {
    display: none;
  }
  .row_poster {
    object-fit: contain;
    width: 100%;
    max-height: 700px;
    background-color: #f6f0c4;
    background-image: linear-gradient(315deg, #f6f0c4 0%, #d99ec9 74%);
    margin-right: 40px;
    transition: transform 450ms;
    .img{
        width: 100%;
        height: 200px;
    }
    .text_title{
        font-size: 18px;
        padding-left: 30px;
        font-weight: 600;
        padding-top: 20px;
    }
    .text_body{
      font-size: 14px;
      font-weight: 400;
      color: #111111;
      width: 280px;
      padding: 10px;
      padding-bottom: 30px;
      margin-left: 20px;
    }
  }
  .row_poster:hover {
    transform: scale(1.05);
  }
  @media(max-width: 700px){
    .banner_contents {
      .banner_title {
      font-size: 2.3rem;
      font-weight: 600;
    }
  }
  .back{
    margin-right:150px;
  }
  }
 
`

const Story = () => {
    const [show, handleShow] = useState(false)



    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false)
        });
        return () => {
          window.removeEventListener("scroll", () => {handleShow(false)});
        }
    }, [])
    return (
        <Stories>
            <div className={`nav ${show && "nav_back"}`}>
            <img
            className={`nav_logo ${show && "new_logo"}`} src={logo}></img>
           <div className="back"><MdArrowBack size="25px"/><a href="/"> Go Back Home</a></div>
            </div>
            <header className="banner">
            <div className="banner_contents">
             <h1 className="banner_title">
              We are good at processing documents...
             <div className="banner_buttons">
                 <button className="banner_button">text1</button> 
                <button className="banner_button">text2</button>
                <button className="banner_button">text3</button>
                <button className="banner_button">text4</button>
                <button className="banner_button">text5</button>  
             </div>
             </h1>
         </div>
         <div className="banner--fadeBottom"/>
         </header>
         <div className="row">
         <h1>Title</h1> 
         <div className="row_posters">
         <div className="row_poster">
         <img
            className="img" src={demoone}></img>
            <div className="text_title">Card Title</div>
         <div className="text_body">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
         </div>
         <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
         </div>
         <div className="row_poster">
         <img
            className="img" src={demotwo}></img>
           <div className="text_title">Card Title</div>
         <div className="text_body">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.
         </div>
         <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
         </div>
         <div className="row_poster">
         <img
            className="img" src={demothree}></img>
            <div className="text_title">Card Title</div>
         <div className="text_body">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
         </div>
         <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
         </div>
         <div className="row_poster">
         <img
            className="img" src={demofour}></img>
            <div className="text_title">Card Title</div>
         <div className="text_body">
         Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
         </div>
         <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
         </div>
         </div>
         <div>
         </div>
         
        </div>
        <div className="row">
        <h1>Title</h1> 
        <div className="row_posters">
        <div className="row_poster">
        <img
           className="img" src={demoone}></img>
           <div className="text_title">Card Title</div>
        <div className="text_body">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        </div>
        <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
        </div>
        <div className="row_poster">
        <img
           className="img" src={demotwo}></img>
           <div className="text_title">Card Title</div>
        <div className="text_body">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        </div>
        <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
        </div>
        <div className="row_poster">
        <img
           className="img" src={demothree}></img>
           <div className="text_title">Card Title</div>
        <div className="text_body">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        </div>
        <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
        </div>
        <div className="row_poster">
        <img
           className="img" src={demofour}></img>
           <div className="text_title">Card Title</div>
        <div className="text_body">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
        </div>
        <MdArrowForward size="30px" style={{paddingLeft:"25px", paddingBottom:"20px"}}/>
        </div>
        </div>
        <div>
        </div>
        
       </div>
        </Stories>
    )
}

export default Story
