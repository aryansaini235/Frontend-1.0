import React, { useState, useCallback, useEffect } from 'react'
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import styled from 'styled-components';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import './Upload.css'
import { PutFile, SetUrl } from '../../minio/UploadMinio';



const Maxwidth = styled.div`
margin: auto;
font-style: normal;
font-family: Averta Web, Helvetica Neue, Helvetica, Arial, sans-serif;
.drop-box{
  display: flex;
  position: absolute;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  .outer-box{
      width: 40%;
      height: auto;
      margin: 50px;
      display: flex;
    
      border: 1px solid #C4C4C4;
      border-radius: 20px;
      align-items: center;
     justify-content: center;
     .inner-box{
        width: 90%;
        height: auto;
       margin: 20px;
       padding: 20px;
        border-radius: 10px;
        border: 2px dashed #C4C4C4;
       .upload-icon{
           width: 100px;
           height: 100px;
           color: #CCCCCC;
           padding-top: 30px;
          
       }
       .upload-text{
        font-size: 18px;
        a{
            text-decoration: none;
            color: #0000FF;
        }
     
        }
       .bottom-text{
        font-size: 12px;
        }
     }

  }
  .outer-box:hover{
    box-shadow: 0px 4px 4px #888888;
    .inner-box{
        background: #DAF3F7;
        border: none;
        .upload-icon{
            color: #1E90FF;
        }
    }
}
}

`

const Upload = () => {
    const [files, setFiles] = useState([
        {
            id: "",
            name: "",
            size: "",
            type: "",
            rawdata: {}
          }
    ])


    const pathObj = {
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
          
    }
    

    useEffect(() => {
        return () => {
         console.log(files)
        };
    }, [files])

    return (
        <Maxwidth>
            <h1 style={{ paddingTop: "120px", fontStyle: "oblique" }}>Try Invoice Processing Here with <span style={{ color: "blueviolet" }}>Finvoiced</span>...</h1>
            <div className="drop-box">
                <div className="outer-box" >
                    <div className="inner-box" >
                    <BackupOutlinedIcon className="upload-icon"></BackupOutlinedIcon>
                        <UploaderComponent id="fileupload" 
                        failure={() => {alert("Ups Something went wrong!!");}}
                         
                         actionComplete={(e) => {
                            e.fileData.forEach(item => {
                                var binaryData = [];
                                binaryData.push(item.rawFile);
                                var blo = new Blob(binaryData);
                                
                                console.log(binaryData);
                               var url = URL.createObjectURL(new Blob(binaryData, {type: "application/pdf"}))

                            //       window.open(url)

                            // const newFile = {
                            //     filename: item.name,
                            //     size: item.size,
                            //     date: new Date(),
                            //     // file: new File([blo], item.name, {type: "application/pdf"}),
                            // }
                            // axios.post('http://localhost:3001/create', newFile);

                                  var fileBuffer = Buffer.from(JSON.stringify(item.rawFile));
                                 PutFile(`${url}`, item.name)                     
                                  })
                         }}
                       
                         dropArea=".inner-box" 
                         asyncSettings={pathObj}
                          allowedExtensions='.pdf'
                           buttons={ { browse: 'BROWSE...', upload: 'Upload all', clear:'Clear all'}}
                            maxFileSize= {28400000} autoUpload={false} removing={true}>
                        </UploaderComponent>
                    </div>
                </div>
            </div>
            
        </Maxwidth>
    )
}

export  default Upload;