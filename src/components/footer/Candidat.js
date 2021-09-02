import React, {} from "react"
import styled from 'styled-components'

function Candidat(){
  return(
    <Container>
      <h1>Candidats & employeurs</h1>
      <ul>
        <li>Nos offres</li>
        <li> Job sur mesure</li>
        <li>Qui sommes-nous ?</li>
        <li>Vous recrutez</li>
        <li>Notre expertise</li>
        <li>Mentions légales</li>
      </ul>
    </Container>
    )
}

const Container = styled.div`
  ul{
    columns:2;
    li{
      line-height:2em;
      list-style-type:none;
      cursor:pointer;
    }
  }

`
export default Candidat
