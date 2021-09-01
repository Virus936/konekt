import React, {useState} from "react"
import Hero from '../../components/hero/Hero'
import SearchBar from '../../components/searchbar/SearchBar'
import Description from '../../components/description/Description'
import HowItWork from '../../components/howitwork/HowItWork'
import Candidature from '../../components/candidature/Candidature'

function Landing(){
  return(
    <>
        <Hero />
        <SearchBar />
        <Description />
        <HowItWork />
        <Candidature />
    </>
    )
}

export default Landing
