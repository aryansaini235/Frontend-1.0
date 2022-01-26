import React from 'react'
import styled from 'styled-components' 
import howitworksimg from '../assests/images/howitworksimg.png'
import dataflowimg from '../assests/images/dataflowimg.png'

const Wrapper = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
padding: 0 80px;
margin: auto;
text-align: center;
.container{
    max-width: 100%; 
    padding-bottom: 100px;
    .icon{
        display: flex;
        justify-content: center;
        .img{
           position: absolute;
           background: url(${howitworksimg}) no-repeat center;
           width: 120px;
           height: 120px;
           background-size: cover;
        }
    }
    .heading{
        display: flex;
         width: 100%;
         justify-content: center;
         margin-top: 50px;
         h1{
             font-size: 42px;
             font-weight: 600px;
         }

    }
    .subheading{
        width: 100%;
        justify-content: center;
        h3{
            font-size: 30px;
            font-weight: 400;
            text-align: center;
            padding-left: 40px;
            .sub-text{
            font-size: 20px;
            font-weight: 600; 
            color: #7849D5;
            }
         }
    }
    .img-box{
        display: flex;
        justify-content: center;
        margin: 30px;
        margin-top: 100px;
        .data-flow-img{
            width: 95%;
            background: url(${dataflowimg}) no-repeat center;
            background-size: cover;
            height: 450px;
        }
    }
}
@media(max-width: 1024px){
    .container .img-box{
        margin: 0;
        margin-top: 100px;
        .data-flow-img{
            width: 100%;
            height: 320px;
        }
    }
}
@media(max-width: 780px){
    padding: 0 20px;
    .container .img-box{
        margin: 0;
        margin-top: 100px;
        .data-flow-img{
            width: 100%;
            height: 320px;
        }
    }
}
@media(max-width: 500px){
    padding: 0 10px;
   
    .container .subheading h3{
        font-size: 24px;
        padding: 0;
    }
    .container .img-box{
        margin: 0;
        margin-top: 100px;
        .data-flow-img{
            width: 100%;
            height: 180px;
        }
    }
}
`
 const SectionThree = () => {
    return (
        <section>
        <Wrapper>
          <div className="container">
          <div className="icon">
          <div className="img"></div>
          </div>
           <div className="heading">
           <h1>How it works</h1>
           </div>
           <div className="subheading">
           <h3>We design novel AI agents for the hardest targets</h3>  
           <h3><div className="sub-text">An intelligent data capture platform our partners love to use</div></h3>
           </div>
           <div className="img-box">
           <div className="data-flow-img"></div>
           </div>
           </div>
        </Wrapper>
        </section>
    )
}

export default SectionThree;