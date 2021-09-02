import React, {} from "react"
import SubHeader from '../../components/header/SubHeader'
import styled from 'styled-components'

function Expertise(){
  return(
    <>
      <SubHeader title="Notre expertise" />
      <Container>
        <p>
          Nous intervenons sur la recherche de profils dans le domaine de l'IT. Plus précisément voici les domaines sur lesquels nous avons l'habitude d'intervenir : 
        </p>
        <ul>
          <li>Web</li>
          <li>Mobile</li>
          <li>EMbarqué</li>
          <li>QA</li>
          <li>Infrastructure</li>
          <li>Produit / Projet</li>
        </ul>
        <p>
          Au niveau des expertises, nous avons une forte connaissance et compréhension des principaux langages et outils rencontrés dans l'IT.
        </p>

      </Container>
    </>
    )
}
const Container = styled.div`
  max-width:700px;
  margin:5em auto;
  width:90%;
  text-align:center;

`

export default Expertise
