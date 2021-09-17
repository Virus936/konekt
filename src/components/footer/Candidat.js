import React, {} from "react"
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Candidat(){
  return(
    <Container>
      <h1>Candidats & employeurs</h1>
      <ul>
        <li><Link to='/offres'>Nos offres</Link></li>
        <li><Link to="/contact">Job sur mesure</Link></li>
        <li><Link to="/about-us">Qui sommes-nous ? </Link></li>
        <li><Link to="/recrutement">Vous recrutez</Link></li>
        <li><Link to="/expertise">Notre expertise</Link></li>
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
      a{
        text-decoration:none;
        color:inherit;
        &:hover{
          text-decoration:underline;
        }
      }

    }
  }
`

export default Candidat
