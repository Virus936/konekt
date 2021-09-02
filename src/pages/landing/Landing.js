import React, {} from "react"
import Hero from '../../components/hero/Hero'
import SearchBar from '../../components/searchbar/SearchBar'
import Description from '../../components/description/Description'
import HowItWork from '../../components/howitwork/HowItWork'
import Candidature from '../../components/candidature/Candidature'
import styled from 'styled-components'

function Landing(){
  return(
    <Container>
        <Hero />
        <SearchBar />
        <Description />
        <HowItWork />
        <Candidature />
    </Container>
    )
}

const Container = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:auto;
  overflow:hidden;
  p{
    margin-bottom:2em;
    white-space:normal;
  }
`
export default Landing
