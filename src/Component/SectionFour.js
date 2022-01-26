import React, { useState } from 'react'
import styled from 'styled-components'
import { FaTimes} from "react-icons/fa";
import newbg from '../assests/images/newbg.png'
import securityimg from '../assests/images/securityimg.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Dialog, DialogContent, DialogTitle, Link} from '@material-ui/core'


const Wrapper = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
margin: auto;
.main-wrapper{
background: url(${newbg}) no-repeat center;
background-size: cover;
text-align: center;
.fade-up{
    height: 6rem;
    background-image: linear-gradient(
      0deg,
      transparent,
      rgba(37, 37, 37, 0),
      #ffffff
    );
}
.carrer{
    width: 100%;
    margin-bottom: 0;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 1),
      #000000
    );
    .carrer-bottom{
        height: 5rem;
        width: 100%;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 0),
            #ffffff
          );
    }
    .carrer-section{
        display: flex;
        justify-content: space-between;
    }
    .carrer-section .carrer-text-box{
        flex-basis: 65%;
        padding: 10px;
        h1{
            color: white;
            font-size: 40px;
            padding-left: 80px;
            text-align: left;
        }
        h3{
            color: white;
            text-align: left;
            font-size: 26px;
            padding-left: 80px;
            font-weight: 400;
        }
    }
    .carrer-section .carrer-button{
       flex-basis: 35%;
       align-items: center;
       button{
           width: 250px;
           height: 40px;
           margin-top: 22%;
           font-weight: 600;
           border-radius: 20px;
           font-size: 18px;
           color: white;
           background: #7849D5;
           border: none;

       }
    }
    }

.container{
    max-width: 100%; 
    padding: 0 80px;
    padding-bottom: 100px;
   
}
.main{
 position: relative;
 display: flex;
 width: 100%;
padding-bottom: 10px;
 margin-top:0;

}
.content{
    flex-basis: 60%;
    padding: 2em 2em;
    text-align: center;
    .heading{
        display: flex;
        width: 100%;
        justify-content: center;
        h1{
            font-weight: 600;
            font-size: 42px;
            padding: 15px;
            line-height: 70px;
          
         }
         h2{
             border-bottom: 2px solid #000000;
             display: flex;
             font-size: 28px;
             padding: 10px;
             line-height: 30px;
         }
    }
    .text-box{
        display: flex;
        width: 100%;
        justify-content: center;
        p{
            font-weight: 400;
            width: 90%;
            padding: 0 10px 0 10px;
            font-size: 18px;
            line-height: 28px; 
        }
    }
    .btn{
        display: flex;
        width: 100%;
        margin-top: 50px;
        justify-content: center;
        button{
            width: 180px;
            border: none;
            background: #000000;
            color: white;
            height: 40px;
            font-size: 16px;
        }
    }
 
    
}
.demo-video-box{
    flex-basis: 40%;
    padding-top: 50px;
    align-items: center;
    
}
.demo-video-box .demo-video{
    max-width: 100%;
    border: 5px;
    height: 60%;
    margin-top: 30%;
    background: url(${securityimg}) no-repeat center;
    background-size: cover;
    box-shadow: 2px 9px 49px -17px rgba(0,0,0,0.9);
}

}
@media(max-width: 1300px){
    .demo-video-box .demo-video{
        max-width: 100%;
        border: 5px;
        margin-top: 170px;
        height: 350px;
    }
    
}
@media(max-width: 1120px){
    align-items: center;
    .main{
       flex-direction: column;
    }
    .demo-video-box {
        order: 2;
    }
    .content{
      order: 1;
    }
    .main-wrapper .container .carrer{
        margin-top: 50px;
    }
    .main-wrapper .container .main .demo-video-box {
        display: flex;
        justify-content: center;
    }
    .main-wrapper .container .main .demo-video-box .demo-video{
        margin-top: 0;
        width: 600px;
        height: 400px;
      }
      .main-wrapper  .carrer .carrer-text-box h1{
          font-size: 35px;
      } 
      .main-wrapper  .carrer .carrer-text-box h3{
        font-size: 22px;
      }
}

@media(max-width: 800px){
    .main-wrapper .container{
        padding: 0 20px;
    }
    .main-wrapper .main .content{
        padding: 0.5rem 0.5rem;
    }
    .main-wrapper .carrer .carrer-button button{
        width: 200px;
        margin-top: 40%;
    }
    .main-wrapper .carrer .carrer-text-box h1, .main-wrapper .carrer .carrer-text-box h3{
        padding-left: 10px;
    } 
 
}
@media(max-width: 500px){
    .main-wrapper .carrer{
        flex-direction: column;
    }
    .main-wrapper .carrer .carrer-button button{
        margin-top: 10%;
        margin-bottom: 10%;
    }
    .main-wrapper .container .main .content{
        padding: 0;
    }
    .main-wrapper .container .main .demo-video-box .demo-video{
        margin-top: 0;
        width: 400px;
        height: 250px;
      }
    .main-wrapper .main .content .heading h1{
        font-size: 30px;
    }
    .main-wrapper .main .content .heading h2{
        font-size: 22px;
    }
    .main-wrapper .container {
        padding: 0;
    }
    .main-wrapper .main .content .text-box p{
        font-size: 16px;
    }
  
}
`
const Form = styled.div`
width: 100%;
.fields{
    display: flex;
    padding: 10px;
    label{
        align-items: left;
        color: #505255;
        display: block;
        width: 120px;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        padding-top: 10px;
        text-align: right;
        span{
            color: red;
        }
    }
    
    input{
        align-items: left;
        border-radius:5px;
        border: 1px solid #505255;
        height: 30px;
        display: block;
        width: 70%;
        margin-top: 5px;
        margin-left: 15px;
    }
   
}
.privacy-field{
    display: flex;
    padding-left: 10px;
    input{
        display: block;
        align-items: right;
        margin-top: 20px;
        margin-left: 100px;
    }
    p{
        display: block;
        color: #505255;
        font-weight: 400;
        width: 440px;
       font-size: 15px;
       line-height: 20px;
       margin-left: 20px;
    }
}
.btn{
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 60px 0 60px 0;
    button{
        width: 150px;
        height: 30px;
        background: #000000;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
    }
}
`
const Popup = (props) => {
    const {openPopup, setOpenPopup} = props;

     return (
        <Dialog open={openPopup} fullWidth
           maxWidth="sm">
          <DialogTitle style={{textAlign: "center", height: "80px"}}>
          <div style={{display: "flex", justifyContent:"space-between"}}>
          <h1 style={{paddingLeft: "20px"}}>Book a demo</h1>
          <FaTimes style={{fontSize:"32px"}} onClick={() => {setOpenPopup(false);}}></FaTimes>
          </div>
          </DialogTitle>
          <DialogContent dividers>
          <Form>
          <form>
          <div className="fields">
          <label>Fullname<span>*</span></label>
          <input type="text" name="name" required></input>
          </div>
          <div className="fields">
          <label>Email<span>*</span></label>
          <input type="email" name="email" required>
          </input>
          </div>
           <div className="fields">
           <div className="label"></div>
           <label>Contact number<span>*</span></label>
           <PhoneInput
           placeholder="Enter phone number"   defaultCountry="IN" style={{width: "70%", marginLeft: "20px"}}/>
           </div>
            <div className="fields">
            <label>Company details</label>
            <input type="text" name="detail" required ></input>
           </div>
           <div className="privacy-field">
           <input type="checkbox" name="agreetopolicy" required>
           </input><p>Agree to receive mails related to the product</p>
           </div>
           <div className="btn"><button type="submit" form="form" value="Submit">Submit</button></div>
          </form>
          </Form>
          </DialogContent>
        </Dialog>
     )
}

const SectionFour = () => {
     const [openPopup, setOpenPopup] = useState(false)
    return (
        <section>
         <Wrapper>
       <div className="main-wrapper">
       <div className="fade-up"></div>
       <div className="container">
       <div className="main">
       <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
       <div className="demo-video-box">
        <div className="demo-video"></div>
        </div>
       <div className="content">
       <div className="heading"><h1>Building an intelligent data capture system and new value for businesses</h1></div>
       <div className="heading"><h2>Machine Inteligence Invoice DNA</h2></div>
       <div className="text-box">
       <p>From revolutionizing the invoice processing and AIagent relationship to reinventing the way companiesconnect with their customers, Invoice DNA technologyhelps organizations all over the world push the boundariesof what's possible.</p>
       </div>
       <div className="btn">
           <button onClick={() => {setOpenPopup(true);}}>Book a demo</button>
       </div>
       </div>
       </div>
       </div>
       <div className="carrer">
       <div className="carrer-section">
       <div className="carrer-text-box">
       <h1>Careers.</h1>
       <h3>We're Hiring AI Reseachers.</h3>
       <h3>NLP and Computer Vision Practitioners are Welcome</h3>
       </div>
       <div className="carrer-button">
       <button>Apply Here</button>
       </div>
       </div>
       <div className="carrer-bottom"></div>
       </div>
       </div>
    
         </Wrapper>
        </section>
    )
}

export default SectionFour;
