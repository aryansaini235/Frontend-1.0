import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Carousel from 'react-elastic-carousel'
import iconone from '../assests/images/iconone.png'
import runarrow from '../assests/images/runarrow.gif'
import invoice from '../assests/images/invoice.jpeg'


const Maxwidth = styled.div`
max-width: 100%;
height: 980px;
font-style: normal;
font-family: "Averta web"
, Arial, sans-serif;
.container{
    max-width: 100%; 
    .icon{
        display: flex;
        justify-content: center;
        .img{
           position: absolute;
           background: url(${iconone}) no-repeat center;
           width: 250px;
           height: 250px;
           background-size: cover;
        }
    }
    .top-heading{
        position: absolute;
        width: 100%;
        height: 78px;
        font-weight: 600;
        margin-top: 180px;
        padding: 30px;
        font-size: 42px;
        line-height: 44px;
        display: block;
        text-lign: center;
        text-align: center;
        color: #000000;
    }
    .sub-heading{
            position: absolute;
            width: 100%;
            display: block;
            font-size: 22px;
            font-weight: 600;
            text-align: center; 
            margin-top: 280px;
    }
   
    .container-box{
        position: absolute;
        width: 79%;
        margin-top: 300px;
        padding: 0 80px;
        max-height: 600px;
        
      
        .innercontainer{
            position: absolute;
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 500px;
            top: 80px;
            box-shadow: ${props => (props.clicked ? '0px 4px 4px rgba(0, 0, 0, 0.4)' : 'none')};;
            overflow-y: hidden;
            overflow-x: scroll;
            scroll-behavior: smooth;
        }
        .innercontainer::-webkit-scrollbar {
            display: ${props => (props.clicked ? 'visible' : 'none')};
          }
        .cardone{
            position: absolute;
            width: 550px;
            height: 450px;
            top: 25px;
            left: 50px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
            border-radius: 20px;
        }
        .cardone .content{
            position: absolute;
            width: 400px;
            height: 700px;
            left: 50px;
            margin-top: 30px;
            font-weight: normal;
            font-size: 14px;
            line-height: 25px;
            text-align: left;
            display: block;
            color: #000000;

        }
        .cardone .button{
        position: absolute;
        width: 120px;
        height: 25px;
        margin-left: 40px;
        color: white;
        text-align: center;
        margin-top: 410px;
        cursor: pointer;
        font-size: 14px;
        padding-top: 7px;
        background: #000000;
        border-radius: 14px;
        }
        .cardone .arrow{
            position: absolute;
            width: 30px;
            height: 30px;
            top: 410px;
            left: 160px;
            background: url(${runarrow}) no-repeat center;
            background-size: cover;
        }
        .scanner{
            height: 2px;
            width: 355px;
            margin-left: 770px;
            background: red;
            z-index: 10;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
            margin-top: 500px;
            display: ${props => (props.clicked ? 'visible' : 'none')};
            animation: flow 5s;
             @keyframes flow{
                 from{
                    margin-top: 25px;
                 }
                 to{
                     margin-top: 460px;
                 }
          
             }
        }
        .scanned-items{
            position: absolute;
            margin-left: 770px;
            margin-top: 4.14%;
            margin-bottom: 3.91%;
            height: 410px;
            width: 350px;
            display: ${props => (props.clicked ? 'visible' : 'none')};
            z-index: 8;
            .item-one{
                height: 25px;
                width: 65px;
                margin-left: 182px;
                margin-top: 55px;
                border: 4px solid #FF35DF;
                animation: pop-one 0s 1000ms forwards;
                visibility: hidden;
                @keyframes pop-one{
                    to { visibility: visible; }
                }
            }
            .item-two{
                height: 25px;
                width: 65px;
                margin-top: 55px;
                border: 4px solid #2ef2d5;
                animation: pop-two 0s 1300ms forwards;
                visibility: hidden;
                @keyframes pop-two{
                    to { visibility: visible; }
                }
            }
            .item-three{
                    height: 15px;
                    width: 285px;
                    margin-left: 32px;
                    margin-top: 135px;
                    border: 4px solid #185cdb;
                    animation: pop-three 0s 2080ms forwards;
                    visibility: hidden;
                    @keyframes pop-three{
                        to { visibility: visible; }
                    }
            }
            .item-four{
                height: 15px;
                width: 140px;
                margin-left: 175px;
                margin-top: 12px;
                border: 4px solid #20e612;
                animation: pop-four 0s 2600ms forwards;
                visibility: hidden;
                @keyframes pop-four{
                    to { visibility: visible; }
                }
            }
            .item-five{
                height: 15px;
                width: 140px;
                margin-left: 175px;
                margin-top: 0px;
                border: 4px solid  #fa0c14;
                animation: pop-five 0s 2800ms forwards;
                visibility: hidden;
                @keyframes pop-five{
                    to { visibility: visible; }
                }
            }
            .item-six{
                height: 25px;
                width: 280px;
                margin-left: 35px;
                margin-top: 40px;
                border: 4px solid #ecf22e;
                animation: pop-six 0s 4200ms forwards;
                visibility: hidden;
                @keyframes pop-six{
                    to { visibility: visible; }
                }
            }
        }
        .cardtwo{
            position: absolute;
            width: 550px;
            height: 450px;
            left: 750px;
            right: 400px;
            display: flex;
            top: 25px;
            background: #C4C4C4;
            box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
            border-radius: 20px;
            .invoice-card{
                position: absolute;
                margin-left: 4.04%;
                margin-right: 30.77%;
                margin-top: 4.14%;
                margin-bottom: 3.91%;
                height: 410px;
                width: 350px;
                background: #FFFFFF;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
                background: url(${invoice}) no-repeat center;
                background-size: cover;
            }
            .side-text-invoice{
                width: 150px;
                height: 410px;
                margin-left: 70%;
                margin-top: 2.2%;
                display: ${props => (props.clicked ? 'visible' : 'none')};
                margin-bottom: 3.91%;
               

                h4{
                    font-size: 13px;
                    margin-bottom: 0;
                    padding-left: 15px;
                }
                h6{
                    margin-top: 10px;
                    padding-left: 15px;
                    line-height: 15px;
                    font-size: 10px;
                
                    color: #666666;
                }
                .text-block_one{
                    height: 40px;
                    width: 150px;
                    border-left: 4px solid #FF35DF;
                    animation: flow-one 0s 1000ms forwards;
                    visibility: hidden;
                    @keyframes flow-one{
                        to { visibility: visible; }
                    }
                }
                .text-block_two{
                    height: 40px;
                    width: 150px;
                    margin-top: 20px;
                    border-left: 4px solid #2ef2d5;
                    animation: flow-two 0s 1300ms forwards;
                    visibility: hidden;
                    @keyframes flow-two{
                        to { visibility: visible; }
                    }
                }
                .text-block_three{
                    height: 50px;
                    width: 150px;
                    margin-top: 20px;
                    border-left: 4px solid #185cdb;
                    animation: flow-three 0s 2080ms forwards;
                    visibility: hidden;
                    @keyframes flow-three{
                        to { visibility: visible; }
                    }
                }
                .text-block_four{
                    height: 40px;
                    width: 150px;
                    margin-top: 20px;
                    border-left: 4px solid #20e612;
                    animation: flow-four 0s 2600ms forwards;
                    visibility: hidden;
                    @keyframes flow-four{
                        to { visibility: visible; }
                    }
                }
                .text-block_five{
                    height: 40px;
                    width: 150px;
                    margin-top: 20px;
                    border-left: 4px solid #fa0c14;
                    animation: flow-five 0s 2800ms forwards;
                    visibility: hidden;
                    @keyframes flow-five{
                        to { visibility: visible; }
                    }
                }
                .text-block_six{
                    height: 100px;
                    width: 150px;
                    margin-top: 15px;
                    border-left: 4px solid #ecf22e;
                    animation: flow-six 0s 4200ms forwards;
                    visibility: hidden;
                    @keyframes flow-six{
                        to { visibility: visible; }
                    }
                }

            }

        }
        .cardthree{
            position: absolute;
            width: 550px;
            height: 450px;
            margin-left: 1450px;
            top: 25px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
            border-radius: 20px;
            .json-text{
                position: absolute;
                width: 400px;
                height: 700px;
                left: 50px;
                margin-top: 8px;
                font-weight: normal;
                font-size: 14px;
                line-height: 20px;
                text-align: left;
                display: block;
                color: #000000;
            }
            .json-heading{
                display: flex;
                justify-content: space-between;
                border-bottom: 2px solid #C4C4C4;
                padding-top: 15px;
                .text{
                    display: flex;
                    flex-basis: 80%;
                   text-align: center;
                   padding-left: 25%;
                   font-size: 16px;
                   font-weight: 600;
                }
                .dots{
                    flex-basis: 20%;
                    align-items: center;
                    .dot-wrapper{
                        display:flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-left: 15px;
                        padding-right: 15px;
                        .red-dot{
                            height: 10px;
                            width: 10px;
                            border-radius: 5px;
                            background: red;
                        }
                        .yellow-dot{
                            height: 10px;
                            width: 10px;
                            border-radius: 5px;
                            bottom: 93.56%;
    
                            background: #FAFF13;
                        }
                        .green-dot{
                        height: 10px;
                         width: 10px;
                        border-radius: 5px;
    
                        background: #62FC3C;
                        }
                    }
                   
                }
            }
        }
    }
}
@media(max-width: 500px){

}

`

const SectionFive = () => {
    const [activescroll, Setactivescroll] = useState(false)

    const ScrollRight = () => {
        setTimeout(() => {
            document.getElementById('innercontainer').scrollLeft += 700;
        }, 5000)
       
    }

    return (
       <section>
           <Maxwidth clicked={activescroll}>
           <div className="container">
            <div className="icon">
            <div className="img"></div>
            </div>
            <div className="top-heading">Eliminate painful invoice-intensive processes
            </div>
            <div className="sub-heading">"Intellisense solution to reduce painful data entry problems and ensure AI engagement 
            to support higher degree of accuracy"</div>
         <div className="container-box">
        
         <div  id='innercontainer' className="innercontainer">
         <div className="cardone">
            <div className="content">
            <div>{`client.createDataExtractionTask(  { `}</div>
             <div style={{ marginLeft: '.5rem' }}>{` callback_url: 'http://www.example.com/callback' ,`}</div> 
             <div style={{ marginLeft: '.5rem' }}>{`instruction: 'Instantly classify and extract fields in the invoice.',`}</div>
             <div style={{ marginLeft: '.5rem' }}>{`params: {`}</div>
               <div style={{ marginLeft: '1rem' }}>{`attachments: [`}</div> 
                 <div style={{ marginLeft: '1.5rem' }}>{` {`}</div> 
                     <div style={{ marginLeft: '1.5rem' }}>{`type: 'jpg'`}</div>
                     <div style={{ marginLeft: '1.5rem' }}>{`content: 'invoice.jpg'`}</div>
                     <div style={{ marginLeft: '1.5rem' }}>{`}`}</div>
                 <div style={{ marginLeft: '1rem' }}>],</div>
                 <div style={{ marginLeft: '1rem' }}>{`labels: ['LineItem', ...],`}</div>  
                 <div style={{ marginLeft: '1rem' }}>boundingboxes: true,</div>
                 <div style={{ marginLeft: '0.5rem' }}>{`}`}</div>
            <div>{` });`}</div>
            </div> 

            <div className="button"  onClick={() => { 
                Setactivescroll(!activescroll);
             if(!activescroll){
                ScrollRight();
               
             }
            
            }}>
            {(!activescroll) && `Run Extraction`}
            {(activescroll) && `Close Extraction`}
            </div>

            <div className="arrow"></div>
         </div>
         <div className="scanner"></div>
         <div className="scanned-items">
         <div style={{display:"flex"}}><span className="item-one"></span><span className="item-two"></span></div>
         <div className="item-three"></div>
         <div className="item-four"></div>
         <div className="item-five"></div>
         <div className="item-six"></div>
         </div>
         <div className="cardtwo">
         <div className="invoice-card"></div>
         <div className="side-text-invoice">
         <div className="text-block_one">
         <h4>INVOICE NUMBER</h4>
         <h6>INV-337</h6>
         </div>
         <div className="text-block_two">
         <h4>DATE</h4>
         <h6>05-07-2021</h6>
         </div>
         <div className="text-block_three">
         <h4>LINE ITEMS_3</h4>
         <h6>3. Website Landing Page $ 550.00</h6>
         </div>
         <div className="text-block_four">
         <h4>TAX</h4>
         <h6>$ 33.6</h6>
         </div>
         <div className="text-block_five">
         <h4>TOTAL</h4>
         <h6>$ 1200.00</h6>
         </div>
         <div className="text-block_six">
         <h4>PAYMENT_ITEMS</h4>
         <h6>Payment is due within 30 days from the date of invoice. Late payement is subjected to fees of 5% per month.</h6>
         </div>
         </div>
              
         </div>
         <div className="cardthree">
         <div className="json-heading">
         <div className="dots">
       <div className="dot-wrapper">
       <div className="red-dot"></div>
       <div className="yellow-dot"></div>
       <div className="green-dot"></div>
       </div>
         </div>
         <div className="text">JSON RESPONSE</div>
         </div>
         <div className="json-text">
        <div>{`{`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{` _id: ObjectId("60b88ae7d175a9b655f1e98c9")`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{` file_name: "invoice001.jpg"`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{` process_date: "03-07-2021"`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{` label:{`}</div>
        <div style={{ marginLeft: '4.5rem' }}>{`invoice_number: INV-3337`}</div>
        <div style={{ marginLeft: '4.5rem' }}>{` date: "05-07-2021"`}</div>
        <div style={{ marginLeft: '4.5rem' }}>{` company_details: { ... }`}</div>
        <div style={{ marginLeft: '4.5rem' }}>{` customer_details:{ ... }`}</div>
        <div style={{ marginLeft: '3.5rem' }}>{`........`}</div>
        <div style={{ marginLeft: '3.5rem' }}>{`}`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{`line_items:[ line_items_1  .......`}</div>
        <div style={{ marginLeft: '2.5rem' }}>{`]`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{`tax: "$ 33.6"`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{`total_amount: "$ 1200"`}</div>
        <div style={{ marginLeft: '1.5rem' }}>{`  .........`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{` payments_terms: "......"`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{`status: "success"`}</div>
        <div style={{ marginLeft: '0.5rem' }}>{` accuracy: 0.99 `}</div>
        <div>{`}`}</div>
         </div>
         </div>
         </div>
         </div>
         </div>
           </Maxwidth>
       </section>
    )
}

export default SectionFive;
