import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DemoNav from './DemoNav'
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import history from '../history';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { DeleteFile, getAllPdf, GetFile, GetListofFile, SetInvoice } from '../../minio/UploadMinio';


const Maxwidth = styled.div`
margin: auto;
font-style: normal;
font-family: Averta Web, Helvetica Neue, Helvetica, Arial, sans-serif;
.top-heading{
    top: 90px;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 70px;
    background: white;
   
}
.table-box{
    margin-top: 180px;
    margin: 180px 50px 50px 50px;
    background: #ECEEEB;
   .table{
       width: 100%;
       padding: 20px;

       .row{
           height: 40px;
           .head{
               font-size: 20px;
           }
           .data{
           background: white;
           
           .status-div{
               display: flex;
               justify-content: center;
               align-items: center;
           }
           .error-div{
            display: flex;
            justify-content: space-around;
            .error-btn{
                border: 1px solid #FA8072;
                color: #FA8072;
                flex-basis: 38%;
                font-size: 14px;
                font-weight: 500;
                padding-top: 2px;
                border-radius: 5px;
                height: 20px;
                cursor: pointer;
            }
            .error-btn:hover{
                background:#FA8072;
                color: white;
            }
            .suggestion-btn{
                border: 1px solid #808080;
                color: #808080;
                flex-basis: 50%;
                font-size: 14px;
                font-weight: 500;
                padding-top: 2px;
                border-radius: 5px;
                height: 20px;
                cursor: pointer;
            }
            .suggestion-btn:hover{
                background: #808080;
                color: white;
            }
           }
           
           .btn{
               display: flex;
               justify-content: space-around;
               .view-btn{
                   flex-basis: 40%;
                   background: #808080;
                   color: white;
                   border: none;
                   height: 25px;
                   font-weight: 500;
                   border-radius: 5px;
               }
               .delete-btn{
                   flex-basis: 40%;
                   background: #F75D59;
                   color: white;
                   border: none;
                   height: 25px;
                   font-weight: 500;
                   border-radius: 5px;
               }
           }
           }
       }
   }
}
`

  
  
const DataQueue = () => {

    const [files, setFiles] = useState([{}])
    const [load, setLoad] = useState(false)
    const [error, setError] = useState(false)
   
    
    useEffect(() => {  
        fetch("/files").then(res => {
            if(res.ok) {
                return res.json()
            }
        })
        .then(jsonRes => {
            setFiles(jsonRes);
            setLoad(!load);   
        })
        .catch(e => {
           setError(true);
        })
    }, [load]);

 

    
    return (
        <Maxwidth>
        <DemoNav></DemoNav>
         <div className="top-heading"> <h1>Your Invoices</h1></div>

        <div className="table-box">

        {(error) && <div>Loading...</div>}
        
        {(!error) &&  <table className="table">
        <tr className="row">
          <th className="head">Filename</th>
          <th className="head">Status</th>
          <th className="head">Size</th>
          <th className="head">Date</th>
          <th className="head">Options</th>
        </tr>
      
       
        {(files !== undefined) && files.map(item => 
           
      
                <tr className="row">

                 <td className="data">{item.file_name}</td>

                 <td className="data" style={{padding:"10px", width:"180px"}}>

                 { (item.status === "completed") &&  <div className="status-div">
                 <div style={{background:"#52D017", height: "20px", flexBasis:"50%", paddingTop:"3px", borderRadius:"5px", fontSize:"14px", color:"white"}}>Complete</div><FaCheckCircle color="#52D017"  size="20px" style={{marginLeft:"10px"}}/></div>}

                 { (item.status === "WIP") &&  <div className="status-div">
                 <div style={{background:"#FFDB58", height: "20px", flexBasis:"50%", paddingTop:"3px", borderRadius:"5px", fontSize:"14px", color:"white"}}>Pending</div><FaExclamationTriangle color="#FFDB58"  size="20px" style={{marginLeft:"10px"}}/></div>}

                 { (item.status === "Error") &&  <div className="status-div">
                 <div style={{background:"#FA8072", height: "20px", flexBasis:"50%", paddingTop:"3px", borderRadius:"5px", fontSize:"14px", color:"white"}}>Rejected</div><FaTimesCircle color="#FA8072"  size="20px" style={{marginLeft:"10px"}}/></div>}

                </td> 

                 <td className="data" style={{width:"170px"}}>{item.file_size}</td>
                 {(item.Date !== undefined) && <td className="data" style={{width:"250px"}}>{item.Date.slice(0, 16)}</td>}
                
                 <td className="data" style={{padding:"10px", width:"200px"}}>

                  {(item.status === "completed") &&  <div className="btn">
                  <button className="view-btn" onClick={() => {history.push('/product/invoiceview');
                  SetInvoice(item);
                  GetListofFile();
                  }}>View</button>
                  <button className="delete-btn" onClick={() => {}} >Delete</button>
                  </div>}

                  {(item.status === "WIP") &&  
                  <Tippy content={<div><span>Please wait until processing is done!</span></div>}>
                  <div style={{fontSize:"14px", fontWeight:"bolder", cursor:"pointer"}}>
                  Progressing...
                  </div>
                 </Tippy>}

                  {(item.status === "Error") && <div className="error-div">

                  <Tippy content={<div>File is currupted!</div>}>
                  <div className="error-btn">
                   Error
                  </div>
                  </Tippy> 

                <Tippy content={<div>Please provide clear image</div>}>
                  <div className="suggestion-btn">
                   Suggestion
                </div>
                </Tippy> 

                </div>}

                 </td>
                 </tr>
              
          
           
          
            )}
      </table>}
      {(files === undefined) && <div style={{width: "100%", textAlign:"center"}}>Empty Table!</div>}
        </div>
       
        </Maxwidth>
    )
}
export default DataQueue;