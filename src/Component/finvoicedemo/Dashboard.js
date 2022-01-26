import React from 'react'
import styled from 'styled-components'
import DemoNav from './DemoNav'

const Wrapper = styled.div`
margin: auto;
font-style: normal;
font-family: Averta Web, Helvetica Neue, Helvetica, Arial, sans-serif;

}
`
 const Dashboard = () => {
    return (
       <Wrapper>
       <DemoNav></DemoNav>
       </Wrapper>
    )
}

export default Dashboard;
