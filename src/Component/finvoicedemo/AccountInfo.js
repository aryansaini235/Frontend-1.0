import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import firebase from 'firebase';
import history from '../history';
import { FaCamera, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../Auth';
import DemoNav from './DemoNav'
import fireb from '../../fire';
import { GetUserData } from '../../minio/UploadMinio';

const Wrapper = styled.div`
margin: auto;
font-style: normal;
font-family: Averta Web, Helvetica Neue, Helvetica, Arial, sans-serif;
.outer-container{
position: absoulte;
box-shadow: 0px 4px 4px #888888;
width: 80%;
margin: 130px 10% 50px 10%;
height: 75vh;
display: flex;
justify-content: space-between;
.col-1{
 flex-basis: 30%;
 display: flex;
 background: #ECEEEB;
 flex-direction: column;
 justify-content: space-between;
 .profile-img-box{
    flex-basis: 40%;
    background: none;
    .back-div{
        height: 120px;
        width: 100%;
       background: black;
    }
    .img-div{
        align-items: ccenter;
        padding: 40px 32% 0 32%;
       .img{
        height: 140px;
        width: 140px;
        border-radius: 70px;
       }
    }
    .profile-name-div{
        font-size: 18px;
        background: none;
        font-weight: 600;
        width: 100%;
        height: 30px;
        left: 0;
        text-align: center;

    }
 }
 .logout-div{
     flex-basis: 10%;
     background: none;
     
     display: flex;
     justify-content: center;
 }
}
.col-2{
    flex-basis: 70%;
    .detail-div{
        display: flex;
        text-align: center;
        width: 80%;
        height: 60px;
    }
    .my-table{
       margin: 40px 90px 40px 150px;
        width: 80%;
        .row{
         height: 60px;
        }
        .head{
            width: 50%;
            font-size: 20px;
            padding-right: 20px;
            background: white;
            font-weight: 600;
            text-align: left;
        }
        .data{
             width: 60%;
             font-size: 18px;
             padding-left: 80px;
             background: white;
             text-align: left;
         
        }
    }
}
}
`
 const AccountInfo = () => {
     const [imgPreview, setImgPreview] = useState(null);
     const [error, setError] = useState(false);
     const {currentUser} = useContext(AuthContext)
     const userdata = GetUserData();

    

     const logout = () => {
        try {
            firebase.auth().signOut().then(() => {
            alert('Now login or register here!')
          })
        } catch {
          alert('logout is not possible')
        }
      }

    const handleImageChange = (e) => {


        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
        if(selected && ALLOWED_TYPES.includes(selected.type)){
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPreview(reader.result);
                console.log(imgPreview);
            }
            reader.readAsDataURL(selected);
        }else{
            setError(true);
        }

    }
    return (
        <Wrapper >
        <DemoNav></DemoNav>
        {(currentUser) &&  <div className="outer-container">
        <div className="col-1">
        <div className="profile-img-box">
        <div className="back-div">
        <div className="img-div">
        <div className="img"  style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover`: `url("https://avatars.dicebear.com/v2/female/8cc28f6ab38be67aa110a92d93d3bbc7.svg")`}}>
        <label htmlFor="fileUpload"> <FaCamera size="25px" style={{paddingTop:"125px", color:"#c4c4c4"}} /></label>
        <input type="file" id="fileUpload" onChange={handleImageChange} style={{display:"none"}}>
        </input>
        </div>
        
        </div>
        {error && <p>File not supported</p>}
        <div className="profile-name-div">
        <p>{currentUser.name}</p>
        </div>
       
        </div>
       
        </div>
        <div className="logout-div">
        <div style={{paddingTop:"5px", fontSize:"18px", fontWeight:"bolder", cursor:"pointer"}} onClick={() => {
          logout();
          history.push('/signin');
      }}>Logout</div>
        <FaSignOutAlt style={{marginLeft: "10px", fontSize:"30px", cursor:"pointer"}} onClick={() => {
          logout();
          history.push('/signin');
      }}/>
        </div>
        </div>
        <div className="col-2">
        <h2>My Account</h2>
        <table className="my-table">
        <tr className="row">
        <th className="head">Name:</th>
        <td className="data">{userdata.name}</td>
        </tr>
        <tr className="row">
        <th className="head">Email:</th>
        <td className="data">{currentUser.email}</td>
        </tr>
        <tr className="row">
        <th className="head">Organization:</th>
        <td className="data">{userdata.organisation}</td>
        </tr>
        <tr className="row">
        <th className="head">No. of Invoices Processed:</th>
        <td className="data">--</td>
        </tr>
        <tr className="row">
        <th className="head">Country:</th>
        <td className="data">{userdata.location}</td>
        </tr>
        </table>
        </div>
      </div>}
        </Wrapper>
    )
}

export default AccountInfo;