import React, { useState } from 'react'
import { FaTimes} from "react-icons/fa";
import styled from 'styled-components'
import history from './history'
import {AuthContext} from "../Auth"
import frontimg from '../assests/images/frontimg.png'
import  { fireb } from '../fire';
import { useContext } from 'react';


const Maxwidth = styled.div`
max-width: 1300px;
padding: 0 80px;
margin: auto;
font-style: normal;
font-family: Averta Web, Helvetica Neue, Helvetica, Arial, sans-serif;
.row{
    display: flex;
    justify-content: space-between;
}
 .popup-div{
        position: fixed;
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        z-index: 999;
        align-items: center;
        top: 5px;
    .popup{
        width: 320px;
        height: 150px;
        border-radius: 10px;
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            input{
                display:block;
                border-radius:5px;
                border: none;
                height: 30px;
                width: 70%;
                margin-top: 5px;
            }
            .btn button{
                display: block;
                text-align: center;
                border-radius:20px;
                height: 30px;
                width: 120px;
                border: none;
                background: #000000;
                color: white;
                margin-top: 20px;
                font-size: 16px;
                }
        }
       
        .popup-inner {
            position: relative;
            padding: 32px;
            width: 100%;
            max-width: 620px;
            background-color: #CCCCCC;
            border-radius: 10px;
            color: black;
          }
          .close-btn {
            position: absolute;
            top: 16px;
            right: 20px;
            font-size: 25px;
            border: none;
          }
      }
}

 
.row .content{
    flex-basis: 50%;
    .container{
        padding: 20px;
        .new-btn{
            position: absolute;
            width: 60px;
            height: 27px;
            margin-top: 160px;
            background: #7849D5;
            border-radius: 5px;
            border: 1px solid #ffffff;
            font-family: Simplon Mono;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #ffffff;
            text-align: center;
        }
        .top-text{
            position: absolute;
            height: 23px;
            margin-left: 77px;
            margin-top: 163px;
            font-family: Simplon Mono;
            font-weight: 600;
            font-size: 18px;
            line-height: 28px;
            display: flex;
            align-items: center;
            color: #7849D5;
            mix-blend-mode: multiply;
        }
        .underline{
            position: absolute;
            width: 600px;
            height: 0px;
            margin-top: 210px;
            border: 1px solid #C4C4C4;
        }
        .heading{
            position: absolute;
            margin-top: 240px;
            width: 600px;
            font-family: Averta Web;
            font-weight: 400;
            font-size: 54px;
            line-height: 68px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            color: #000000;
        }
        .btn{
            display: flex;
            margin-top: 540px;
            margin-bottom: 50px;
            .waitlist-btn{
                position: absolute;
                width: 180px;
                height: 45px;
                font-weight: 600;
                font-size: 16px;
                line-height: 16px;
                background: #000000;
                color: white;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 40px;
                text-align: center;
            }
            .signup-btn{
                position: absolute;
                width: 180px;
                height: 45px;
                margin-left: 160px;
                border: none;
                background: none;
                font-weight: 600;
                font-size: 17px;
                line-height: 16px;
                align-items: center;
                text-align: center;
            }
        }
       
    }
}
.row .img{
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    .front-img{
        height: 450px;
        width: 55%;
        margin-top: 200px;
        object-fit: cover;
        margin-bottom: 100px;
        padding-left: 150px;
        background: url(${frontimg}) no-repeat center;
        background-size: cover;
        background-origin: content-box, padding-box;
    }
}
@media(max-width: 1300px){
    .row{
        .img{
         .front-img{
            margin-top: 320px;
            margin-left: 50px;
             height: 280px;
             width: 45%;
         }
        }
    }
}
@media(max-width: 790px){
    .row{
        flex-direction: column;
        .content{
            width: 100%;
            order: 1;
        }
        .img{
            order: 2;
            width: 60%;
            .front-img{
                margin-top: 50px;
                height: 240px;
            }
        }
    }
}
@media(max-width: 650px){
    max-width: 660px;
    padding-left: 50px;
    .row .content{
        flex-basis: 100%;
        .container{
            padding-left: 0;
            .new-btn{
                width: 40px;
                height: 20px;
                font-size: 14px;
            }
            .top-text{
                font-size: 14px;
                padding: 10px;
                text-align: center;
                margin-left: 50px;
            }
            .underline{
                width: 350px;
                height: 0px;
            }
            .heading{
                width: 350px;
                font-size: 35px;
                text-align: left;
            }
            .text{
                width: 350px;
                font-size: 18px;
            }
            .btn{
                .waitlist-btn{
                    width: 140px;
                    height: 35px;
                    margin-top: 20px;
                    font-size: 14px;
                }
                .signup-btn{
                    width: 140px;
                    height: 35px;
                    margin-top: 20px;
                    font-size: 15px;
                }
            }
           
        }
    }
    .row {
        padding: 0;
        margin: 0;
    .img{
        width: 0%;               
        .front-img{
            margin-bottom: 20px;
            padding: 0;
            height: 0px;
            width: 0%;
        }
    }
}
}
`


const SectionOne = () => {

    const [email, setEmail] = useState("");
    const [popup, SetPopup] = useState(false);
    const {currentUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        fireb.firestore().collection('wish_list').add({
            email:email
        })
        .then(() => {
            alert("We will get back to you soon!");
        })
        .catch(error => {
            alert(error.message);
            });
          setEmail("");
        };

    const Popup = (props) => {
        return ( props.trigger) ? (
            <div className="popup">
                <div className="popup-inner">
                    <FaTimes className="close-btn" onClick={() => props.setTrigger(false)}></FaTimes>
                    {props.children}
                </div>
            </div>
        ):"";
    }

    return (
        <section>
            <Maxwidth>
                
                <div className="popup-div">
                <Popup trigger={popup} setTrigger={SetPopup}>
                 <form>
                 <input type="email" name="email" required placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}></input>
                 <div className="btn"><button type="submit" form="form" value="Submit" onClick={(e) => {
                    handleSubmit(e);
                    SetPopup(false);
                }}>submit</button></div>
                 </form>
                </Popup>
                </div>
                <div className="row">
                    <div className="content">
                        <div className="container">
                            <div className="new-btn">New</div>
                            <div className="top-text">Enable machines to catch insightful information like a human</div>
                            <div className="underline"></div>
                            <div className="heading">Unlock intelligible insights from
                            Invoices - faster, better and 
                            smarter than ever...</div>
                            <div className="btn">
                                <button className="waitlist-btn" onClick={() => {SetPopup(true);}}>Join the waitlist</button>
                               {(!currentUser) &&  <button className="signup-btn" onClick={() => history.push('/signup')}>Signup</button>}
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <div className="front-img"></div>
                    </div>
                </div>
            </Maxwidth>
        </section>

    )
}

export default SectionOne
