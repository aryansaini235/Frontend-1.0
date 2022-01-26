import React from 'react'
import { useState } from 'react';
import blackupq from '../assests/images/black-upq.png'
import newbg from '../assests/images/newbg.png'
import whitedwn from '../assests/images/white-dwnq.png'
import styled from 'styled-components'

const Wrapper = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
margin: auto;
.main-wrapper{
background: url(${newbg}) no-repeat center;
background-size: cover;

.container{
    max-width: 100%;
    padding: 0 80px;
}
.main{
 position: relative;
 display: flex;
 flex-direction: column;
 width: 100%;
 margin-top:0;
 .top-heading{
    width: 100%;
    display: flex;
    justify-content: center;
    h1{
        font-size: 42px;
        font-weight: 600;
        margin-top: 0;
    }
}
 .content-box{
    position: relative;
    display: flex;
    width: 100%;
    height: 721px;
    margin-top:0;
    .content{
        flex-basis: 70%;
        padding: 2em 2em;
        margin-left: 70px;
        text-align: center;

        .inner-content-box{
            display: flex;
            .text{
                position: absolute;
                width: 65%;
                padding-top: 20px;
                font-style: normal;
                font-weight: 500;
                font-size: 22px;
                line-height: 36px;
                display: block;
                text-align: left;
                color: #000000;
                 animation: fadeIn 3s;

            @keyframes fadeIn{
                from{
                    padding-top: 40px;
                    opacity: 0.2;
                   
                }
                to{
                    padding-top: 20px;
                    opacity: 1;
                }
            }
            }
        }
       
        .card-box{
            display: flex;
            justify-content: space-between;
            .card-one{
                position: absolute;
                width: 300px;
                height: 350px;
                background: white;
                margin-top: 200px;
                color: black;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
                animation: cardoneup 3s;

                @keyframes cardoneup{
                    from{
                        margin-top: 220px;
                        opacity: 0.2;
                       
                    }
                    to{
                        margin-top: 200px;
                        opacity: 1;
                    }
                }
                
                .card-one-text{
                    .span-one{
                        font-size: 38px;
                        font-weight: 600;
                        color:  #7849D5;
                    }
                    .span-two{
                        font-size: 20px;
                        font-weight: 600;
                        color:  #7849D5;
                    }
                  padding: 30px;
                    font-size: 18px;
                    line-height: 40px;
                    text-align: left;
                }
            }
            .card-two{
                    position: absolute;
                    width: 300px;
                    height: 350px;
                    margin-left: 420px;
                    line-height: 20px;
                    background: black;
                    color: white;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
                    margin-top: 300px;
                    animation: cardtwoup 3s;

                    @keyframes cardtwoup{
                        from{
                            margin-top: 320px;
                            opacity: 0.2;
                           
                        }
                        to{
                            margin-top: 300px;
                            opacity: 1;
                        }
                    }
                    
                    .card-two-text{
                        .span-one{
                            font-size: 38px;
                            font-weight: 600;
                            color:  #7849D5;
                        }
                        .span-two{
                            font-size: 20px;
                            font-weight: 600;
                            color:  #7849D5;
                        }
                        padding: 30px;
                        padding-top: 50px;
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 40px;
                        text-align: left;
                    }
            
            }
        }
    }
    .side-nav{
        flex-basis: 30%;
        .side-nav-box{
            display: flex;
            flex-direction: column;
            padding: 10px;
            width: 30%;
            .side-nav-item-one{
                position: absolute;
                flex: 1;
                display: block;
                cursor: pointer;
                margin-top: 40px;
                color: ${props => (props.selectedo ? '#7849D5' : '#000000')};
                font-weight: 700;
                font-size: 28px;
                line-height: 40px;
                 text-align: left;
               }
               .side-nav-item-two{
                position: absolute;
                flex: 1;
                display: block;
                margin-top: 110px;
                cursor: pointer;
                color: ${props => (props.selectedt ? '#7849D5' : '#000000')};
                font-weight: 700;
                font-size: 28px;
                line-height: 40px;
                text-align: left;
               }
               .side-nav-item-three{
                position: absolute;
                flex: 1;
                display: block;
                margin-top: 180px;
                cursor: pointer;
                font-weight: 700;
                color: ${props => (props.selectedth ? '#7849D5' : '#000000')};
                font-size: 28px;
                line-height: 40px;
                text-align: left;
               }
               .side-nav-item-fourth{
                position: absolute;
                 flex: 1; 
                display: block;
                margin-top: 250px;
                cursor: pointer;
                color: ${props => (props.selectedf ? '#7849D5' : '#000000')};
                font-weight: 700;
                font-size: 28px;
                line-height: 40px;
                text-align: left;
               }
                
        }
 
    }
 }
}
.fade-up{
    height: 8rem;
    background-image: linear-gradient(
      0deg,
      transparent,
      rgba(37, 37, 37, 0),
      #ffffff
    );
}
.fade-down{
    height: 8rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0),
      #ffffff
    );
}
}

@media(max-width: 1300px){
   .main{
    .content-box .inner-content-box .text{
                width: 100%;
    }
       .content-box{
          flex-direction: column;
          height: 780px;
          padding-bottom: 350px;
           .content{
            order: 2;
            
           
            .card-box{
                margin-top: 100px;
            }
           }
           .side-nav{
            width: 50%;
            display: flex;
            justify-content: center;
            order: 1;
            margin-bottom: 200px;
           }
       }
   }
}
@media(max-width: 800px){
    .main-wrapper .container .main .content-box{
      
        height: 1250px;
        .side-nav{
            margin-bottom: 0px;
        }
    }
    .main{
        .content-box{
            .content{
                .inner-content-box{
                    .text{
                       width: 100%;              
                        }
                .card-box{
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 190px;
                    animation: none;
                    .card-one{
                        order: 1;
                        margin-bottom: 50px;
                        margin-left: 420px;
                        animation: none;
                    }
                    .card-two{
                        order: 2;
                        margin-bottom: 50px;
                        margin-top: 600px;
                        animation: none;
                    }
    
                }
            }
           
        }
    }
}
@media(max-width: 500px){
    .main-wrapper .container {
        padding: 0;
        padding-bottom: 200px;
    }
  
  .container .main .top-heading h1{
      padding: 0;
      margin: 0;
      font-size: 30px;
  }
  .main-wrapper .container .main .content-box{
      padding: 0;
      height: 1500px;
  }
  .main-wrapper .container .main .content-box .side-nav{
      padding-bottom: 0px;
  }
  .main-wrapper .container .main .content-box .side-nav .side-nav-box .side-nav-item-one, 
  .main-wrapper .container .main .content-box .side-nav .side-nav-box .side-nav-item-two,
  .main-wrapper .container .main .content-box .side-nav .side-nav-box .side-nav-item-three,
  .main-wrapper .container .main .content-box .side-nav .side-nav-box .side-nav-item-fourth
  {
     font-size: 22px;
  }
  .main-wrapper .container .main .content-box .content{
      padding: 0;
  }
  .main-wrapper .container .main .content-box .content .inner-content-box .text{
      font-size: 20px;
      padding-top: 0;
      text-align: center;
      width: 70%;
  }
  .container .main .content-box .content .inner-content-box .card-box{
      padding-left: 100px;
  }
  .container .main .content-box .content .inner-content-box .card-box .card-one{
      margin-top: 280px;
  }
  .main .content-box .content .inner-content-box .card-box .card-two{
    margin-top: 700px;
}
}
`

 const SectionT = () => {
    const [activeBtnOne, SetBtnOne] = useState(true);
    const [activeBtnTwo, SetBtnTwo] = useState(false);
    const [activeBtnThree, SetBtnThree] = useState(false);
    const [activeBtnFour, SetBtnFour] = useState(false);
    return (
        <section>
        <Wrapper selectedo={activeBtnOne} selectedt={activeBtnTwo} selectedth={activeBtnThree} selectedf={activeBtnFour}>
       <div className="main-wrapper">
       <div className="fade-up"></div>
       <div className="container">
       <div className="main">
       <div className="top-heading"><h1>For Businesses</h1></div>
      <div className="content-box">
      <div className="side-nav">
      <div className="side-nav-box">
      <div className="side-nav-item-one" onClick={() => {SetBtnOne(true); SetBtnTwo(false); SetBtnThree(false); SetBtnFour(false)}}>Cloud Feasible</div>
      <div className="side-nav-item-two" onClick={() => {SetBtnOne(false); SetBtnTwo(true); SetBtnThree(false); SetBtnFour(false)}}>Enterprise Inclination</div>
      <div className="side-nav-item-three" onClick={() => {SetBtnOne(false); SetBtnTwo(false); SetBtnThree(true); SetBtnFour(false)}}>All set solutions for SMB</div>
      <div className="side-nav-item-fourth" onClick={() => {SetBtnOne(false); SetBtnTwo(false); SetBtnThree(false); SetBtnFour(true)}}>Technology Primacy</div>
      </div>
      </div>
      <div className="content">
      {
          (activeBtnOne) && <div className="inner-content-box">
          <div className="text"> Finvoiced Data Capture Flavours are available in Amazon Web Services and Microsoft Azure, leveraging It's data security and privacy preserving policies, and empowering customers to choose regions based on their interest and business needs.
          </div>
          <div className="card-box">
          <div className="card-one">
          <div className="card-one-text">
          <div ><img src={blackupq} alt="..." style={{height:"60px", width: "60px"}} /></div>
          <span className="span-one">80%</span> Companies rely on manual 
          data entry to process <span className="span-two">97%</span> of 
          their invoices which contain 
          at least <span className="span-two">2%</span> errors</div>
      
          </div>
          <div className="card-two">
          <div className="card-two-text" style={{fontSize: "26px"}}>Invoices are error prone and
          often result in delayed payments
          <div style={{display:"flex", justifyContent:"flex-end"}}><img src={whitedwn} alt="..." style={{height:"60px", width: "60px"}} /></div></div>
          </div>
          </div>
          </div>
      }

      {
        (activeBtnTwo) && <div className="inner-content-box">
        <div className="text"> It starts from smooth integration to SLA support. Finvoiced Data Capture solution can be scaled in a hybrid way when deployed to support voluminous data with rapid processing scenarios. Multi-tenancy, Monitoring and Analytics dashboard helps understand the business in a better way than before.
        </div>
        <div className="card-box">
        <div className="card-one">
        <div className="card-one-text" style={{paddingTop:"0px", lineHeight: "35px"}}>
        <div ><img src={blackupq} alt="..." style={{height:"60px", width: "60px"}} /></div>
        <span className="span-one">90%</span> of business data, 
        transactions and records
        are in an unstructured format 
        and nowhere is this more 
        prominent than within the 
        Accounts Payable 
        department. – Gartner</div>
    
        </div>
        <div className="card-two">
        <div className="card-two-text" style={{fontSize: "26px"}}>Significant time and dollars Is
        spent in processing invoices manually
        <div style={{display:"flex", justifyContent:"flex-end"}}><img src={whitedwn} alt="..." style={{height:"60px", width: "60px"}} /></div></div>
        </div>
        </div>
        </div>
    }

    {
        (activeBtnThree) && <div className="inner-content-box">
        <div className="text">Readymade solution, which can be accessed anywhere in the earth. Automated classification and data extraction empowers people toactually focus on what matters the most. Proven security with REST API services makes developer’s life easy.
        </div>
        <div className="card-box">
        <div className="card-one">
        <div className="card-one-text" style={{fontSize: "22px"}}>
        <div><img src={blackupq} alt="..." style={{height:"60px", width: "60px"}} /></div>
        <span className="span-one">12.5%</span> Invoices need rework</div>
        </div>
        <div className="card-two">
        <div className="card-two-text" style={{fontSize: "22px"}}>With automated invoice data extraction, businesses get 65% improvement in processing time
        <div style={{display:"flex", justifyContent:"flex-end"}}><img src={whitedwn} alt="..." style={{height:"60px", width: "60px"}} /></div></div>
        </div>
        </div>
        </div>
    }

    {
        (activeBtnFour) && <div className="inner-content-box">
        <div className="text"> The power of solving a problem is incredible. Thanks to Natural Language Processing and Computer Vision for helping us to solve agreat problem in the invoice processing, wherein we try to automate AI with the help of AI to accelerate your time to production andto reduce the support and maintainence costs.
        </div>
        <div className="card-box">
        <div className="card-one">
        <div className="card-one-text">
        <div ><img src={blackupq} alt="..." style={{height:"60px", width: "60px"}} /></div>
        Businesses are witnessing <span className="span-two">25% </span>reduction in manual efforts withinvoice processing automation</div>
    
        </div>
        <div className="card-two">
        <div className="card-two-text" style={{fontSize: "26px"}}>5.5 minutes is the average time taken to rework on 1 invoice
        <div style={{display:"flex", justifyContent:"flex-end"}}><img src={whitedwn} alt="..." style={{height:"60px", width: "60px"}} /></div></div>
        </div>
        </div>
        </div>
    }
      </div>
      </div>
       </div>
       </div>
       <div className="fade-down"></div>
       </div>
     
       </Wrapper>
      
       </section>
    )
}

export default SectionT;