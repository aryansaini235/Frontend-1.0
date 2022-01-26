import React from 'react'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'
import SectionFour from './SectionFour'
import Navbar from './Navbar'
import styled from 'styled-components'
import SectionFive from './SectionFive'
import SectionSix from './SectionSix'
import Footer from './Footer'

const Homepage = styled.div`
box-sizing: border-box;
font-family: "Averta web"
, Arial, sans-serif;
position: relative;
text-align: left;
z-index: 0;
background: #ffffff;
` 

const Home = () => {
    return (
         <Homepage>
        <Navbar></Navbar>
        <SectionOne></SectionOne>
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <SectionFive></SectionFive>
        <SectionSix></SectionSix>
        <Footer></Footer>
        </Homepage>
    )
}

export default Home;
