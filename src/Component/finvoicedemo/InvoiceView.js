import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { Viewer, Worker } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import DemoNav from './DemoNav';
import PDFViewer from 'pdf-viewer-reactjs'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import pdfFile from '../../assests/pdf/invoice-converted.pdf'
import { getInvoice, GetListofFile } from '../../minio/UploadMinio';

const Maxwidth = styled.div`
margin: auto;
font-style: normal;
font-family: Averta Web, Helvetica Neue, Helvetica, Arial, sans-serif;
.wrapper{
    width: 100%;
   height: auto;
   top:0;
   .invoice-div{
    width: 95%;
    height: 600px;
    margin: 100px 40px 20px 40px;
    display: flex;
    justify-content: space-between;
    .invoice-data-view{
        flex-basis: 48%;
        height: 93%;
        margin: 20px;
       
     overflow: auto;
     .table-heading{
         font-weight: 600;
         margin-top: 0;
         height: 45px;
        width: fit-content;
         display: flex;
         justify-content: flex-start;
         padding-left: 0;
        
         font-size: 16px;
     }
    }
    
    .invoice-pdf-view{
        flex-basis: 45%;
        height: 93%;
        margin: 20px;
        max-width: 45%;

    }
   }
   .my-table{
       background: black;
       margin: 20px;
       width: 90%;
       .row{
        height: 40px;
       }
       .head{
           width: 50%;
           font-size: 18px;
           padding-right: 20px;
           background: white;
           text-align: right;
       }
       .data{
            width: 50%;
            padding-left: 20px;
            background: white;
            text-align: left;
        
       }
   }
}
`
 const InvoiceView = () => {
     
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    console.log('pdfFile:- ',{pdfFile});

   const invoicefile = getInvoice();
    useEffect(() => {
       GetListofFile();
    }, [])

   let pdfFile_ = require('../../assests/pdf/'+ invoicefile.file_name);//this.props.

   console.log("file_name",invoicefile.file_name,"  ",pdfFile_);



    return (
       <Maxwidth>
      
         <div className="wrapper">
         <DemoNav></DemoNav>
         <div className="invoice-div">
         <div className="invoice-data-view">
         <Tabs>
            <TabList className="table-heading">
            <Tab >INVOICE DETAILS</Tab>
            <Tab >JSON</Tab>
            </TabList>

            <TabPanel>
            <table className="my-table">
            <tr className="row">
            <th className="head">Filename:</th>
            <td className="data">{invoicefile.file_name}</td>
            </tr>
            <tr className="row">
            <th className="head">Size:</th>
            <td className="data">{invoicefile.file_size}</td>
            </tr>
            <tr className="row">
            <th className="head">Date:</th>
            <td className="data">{invoicefile.Date}</td>
            </tr>
            <tr className="row">
            <th className="head">Processing:</th>
            <td className="data">Done</td>
            </tr>
            <tr className="row">
            <th className="head">Status:</th>
            <td className="data"><div  style={{display:'flex'}}>Complete<FaCheckCircle color="#09e644" size="20px" style={{marginLeft:"10px"}}/></div></td>
            </tr>
            </table>
            </TabPanel>
            <TabPanel>
             <p style={{lineHeight: "38px", margin:"0 0 30px 30px", fontSize:"14px", textAlign: "left"}}>
             <pre>{JSON.stringify(invoicefile, null, 2) }</pre>
              
             </p>
             </TabPanel>
         </Tabs>
         </div>
         <div className="invoice-pdf-view">
         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js" >
         <Viewer fileUrl={pdfFile_.default}
           plugins={[defaultLayoutPluginInstance]} />
          </Worker>
         </div>
         </div>
         </div>
       </Maxwidth>
    )
}

export default InvoiceView;