import React from 'react'
import styled from 'styled-components';
import DemoNav from './DemoNav';
import Upload from './Upload'

const HomePage = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
position: relative;
text-align: center;
background: #ffffff;
`

const DemoHome = () => {
    return (
        <div>
            <HomePage>
            <DemoNav></DemoNav>
             <Upload></Upload>
            </HomePage>
        </div>
    )
}

export default DemoHome;