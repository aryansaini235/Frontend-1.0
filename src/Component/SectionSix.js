import React from 'react'
import styled from 'styled-components'
import newbg from '../assests/images/newbg.png'
import WrappedMap from './Map'



const Wrapper = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
margin: auto;
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
.fade-down{
    height: 5rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.8),
      #000000
    );
}
.container{
    max-width: 100%; 
    padding: 0 80px;
    .main{
        display: flex;
        justify-content: space-between;
        .reachus-box{
            flex-basis: 60%;
            height: 400px;
           text-align: left;
           padding: 10px;
           h1{
               font-size: 54px;
               font-weight: 600px;
           }
           h3{
            font-size: 18px;
            font-weight: 800px;
           }
           p{
            font-size: 16px;
            color:#444444;
           }
        }
        .map-box{
            flex-basis: 40%;
            height: 400px;
            padding: 40px;
        }
    }
}
@media(max-width: 800px){
.main{
    flex-direction: column;
    .reachus-box{
        order: 1;
        text-align: center;
    }
    .map-box{
        order: 2;
    }
}
}
@media(max-width: 500px){
    .container{
        padding: 10px;
    }
`
const SectionSix = () => {

    

    return (
       <section>
       <Wrapper>
       <div className="fade-up"></div>
       <div className="container">
     <div className="main"> 
     <div className="reachus-box">
     <h1>Reach Us,</h1>
     <h3>Address: </h3>
     <p>Freezon Labs,</p>
     <p>Thirumanilaiyur,</p>
     <p>Karur, Tamilnadu</p>
     <h3>Phone: </h3>
     <p>+91 9176811556</p>
     <h3>Email: </h3>
     <p>contact@finvoiced.com</p>
     </div>
     <div className="map-box">
    <WrappedMap
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    />
     </div>
     </div>
       </div>
       <div className="fade-down"></div>
       </Wrapper>
       </section>
    )
}

export default SectionSix
