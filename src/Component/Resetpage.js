import React, {useState, useEffect} from 'react'
import newbg from '../assests/images/newbg.png'
import styled from 'styled-components'
import {MdEmail, MdArrowBack, MdArrowForward} from "react-icons/md";
import {fireb} from '../fire';

const ResetForm = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
position: relative;
z-index: 0;
background: url(${newbg}) no-repeat center;
background-size: cover;
text-align: center;
.container{
    max-width: 100%;
}

.card{
    width: 100%;
    height: 100vh;
    text-align: center;
    h5{
        display: flex;
        margin-top: 0;
        padding-top: 20px;
        padding-right: 20px;
        justify-content: flex-end;
    }
    a{
        text-decoration: none;
        color: #0854b3;
        margin-left: 5px;
        margin-right: 5px;
    }
    h4{
       color: #111;
       font-size: 20px;
    }
    p{
        font-size: 14px;
    }
    .input-field{
        display: flex;
        justify-content: center;
        .input{
            width: 300px;
            height: 35px;
            margin-top: 40px;
            display: flex;
            border: 1px solid #CCCCCC;
            background: #ffffff;
            border-radius: 10px;
            input{
                width: 80%;
                height: 88%;
                border: 0;
                margin-left: 10px;
            }
        }
    }
   
    .btn{
        width: 200px;
        height: 35px;
        background: #111;
        color: white;
        margin-top: 30px;
        border-radius: 20px;
        border: 1px solid #111;
    }
    .back{
        display: flex;
        justify-content: center;
        margin-top: 20px; 
        align-items: center;
        a{
            font-size: 14px;
            color: #0854b3;
            text-decoration: none;
        }

    }
}

`
const Resetpage = (history) => {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fireb.auth().sendPasswordResetEmail(email)
    .then(() => {
      alert("Check your mail!");
    })
    .catch(error => {
      alert(error.message);
    });

  };

    return (
        <ResetForm>
        <div className="card">
        <h5>Dont't have an Account? <a href="/signup">Sign up</a><MdArrowForward size="18px"/></h5>
        <h4>Reset your password</h4>
         <p>Input your registered email to reset password</p>
         <div className="input-field">
         <div className="input">
         <MdEmail size="23px" style={{marginTop:"5px", marginLeft:"10px"}}/>
         <input type="email" name="email"  required placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}></input>
         </div>
         </div>
         <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
          <div className="back"><MdArrowBack size="20px" /><a href="/signin">Back to login</a></div>


        </div>
        </ResetForm>
    )
}

export default Resetpage
