import React, {useCallback,useContext} from 'react'
import styled from 'styled-components'
import history from './history'
import logo from '../assests/images/logo.png'
import login from '../assests/images/login.png'
import backone from '../assests/images/backone.png'
import {fireb} from '../fire'
import {AuthContext} from "../Auth.js"
import { withRoute, Redirect} from "react-router"
import { SetUserData } from '../minio/UploadMinio'


const LoginForm = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
position: relative;
z-index: 0;
background: #C4C4C4;
justify-content: center;
display: grid;
align-items: center;
.container{
    max-width: 100%;
}
.container h2{
    font-size: 1.8rem;
    margin-bottom: 5px;
    font-weight: 600;
    color: #7849D5;
    text-align: center;
    margin-top: 10px;
}
.main{
 position: relative;
 display: flex;
 width: 100%;
 height: 721px;
 margin-top:0;
}
.content{
    flex-basis: 45%;
    padding: 1em 1em;
    text-align: center;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgba(0,0,0,0.1);
    
}
.card{
    width: 80%;
    height: 80%;
    margin-left: 60px;
    margin-top: 100px;
}
.content img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-top: 20px;

}
.form-img{
    flex-basis: 60%;
    background: url(${backone}) no-repeat center;
    padding-top: 50px;
    background-size: cover;
    align-items: center;
    h2{
      color: #111;
      display: block;
      text-align: center;
      margin-top: 50px;
      line-height: 42px;
      padding:  0 80px 0 80px;
    }
       
    
}
.form-img .img{
    max-width: 500px;
    border: 5px;
    height: 350px;
    margin: 0 150px 0 150px;
    background: url(${login}) no-repeat center;
    background-size: cover;
}
p{
    color: #000000;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
}
.btn,
button{
    display: block;
    text-align: center;
    border-radius:20px;
    border: 2px solid #ffffff;
    height: 40px;
    width: 90%;
    background: #7849D5;
    color: white;
    margin-top: 20px;
    margin-left: 20px;
    font-size: 16px;
}
label{
    display: block;
    align-items: left;
    color: #505255;
    font-size: 14px;
    margin-top: 20px;
    margin-left: 15px;
    text-align: left;
}
input{
    display:block;
    align-items: left;
    border-radius:5px;
    height: 30px;
    width: 90%;
    margin-top: 5px;
    margin-left: 15px;
}
a{
    text-decoration: none;
    font-size: 14px;
    color: #0854b3;
}
@media(max-width: 1300px){
    .form-img .img{
        max-width: 90%;
        border: 5px;
        height: 350px;
        margin: 0 40px 0 40px;   
    }
    .form-img h2{
      font-size: 1.5rem;
      padding:  0 20px 0 20px;
    }
}
@media(max-width: 931px){
    .main{
       flex-direction: column;
    }
    .card{
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .form-img{
        order: 2;
    }
    .content{
      order: 1;
    }
}
@media(max-width: 430px){
    .form-img .img{
        max-width: 100%;
        border: 5px;
        height: 350px;
        padding: 0 10px 0 10px;
    }
    .content .card{
        width: 100%;
        height: 100%;
        margin-top: 100px;  
        margin-left: 0;
        } 
 
}
`
const Signin = ({history}) => {

    const getUser = async(uid) =>{
        fireb.firestore().collection('users').doc(uid).get()
        .then(snapshot => {
          var data = snapshot.data();
          var name = data.name;
          var location = data.location;
          var bussiness = data.bussiness;
          var organisation = data.organisation;
         
          SetUserData({
              name: name,
              location: location,
              business: bussiness,
              organisation: organisation
          });
        })
        }

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const{email,password} = event.target.elements;
      try {
        await fireb
          .auth()
          .signInWithEmailAndPassword(email.value, password.value).then((user) => {
            getUser(user.user.uid)
          })
        history.push("/");
      }catch (error){
        alert(error);
      }
    },
    [history]
  );

 


    return (
       <LoginForm>
        <div className="container">
        <div className="main">
        <div className="form-img">
         <div className="img"></div>
         <h2>Eliminate painful invoice-itensive processing using Invoice DNA</h2>
         <h2>Instantly classify and extract fields in the invoice at greater accuracy with speed</h2>
         </div>
        <div className="content">
        <div className="card">
            <img src={logo}/>
            <h2>Finvoiced</h2>
            <form action="" method="post" onSubmit ={handleLogin} >
            <label>Email</label>
            <input type="email" name="email" placeholder="example@gmail.com" require autoFocus=""></input>
            <label>Password</label>
            <input type="password" name="password" placeholder="" require autoFocus=""></input>
            <button className="btn" type="submit">Login</button>
            </form>
            <p ><a href="/password/create">Forgotten password?</a></p>
            <p >New to Finvoiced?<a href="/signup"> Signup here</a></p>
        </div>
        </div>
        </div>

        </div>
       </LoginForm>
    )
}

export default Signin;
