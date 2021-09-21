import React, { } from "react"
import SubHeader from '../../components/header/SubHeader'
import styled from 'styled-components'
import FormContact from '../../components/form/FormContact'
import { SiGoogletranslate } from 'react-icons/si'
import { RiPencilRuler2Line } from 'react-icons/ri'
import { BiTimer } from 'react-icons/bi'
import { GiMeshNetwork } from 'react-icons/gi'
import { ImStatsDots } from 'react-icons/im'
import { BiGlobe } from 'react-icons/bi'

import color from '../../components/color.js'

function Recrutement(){
  return(
    <>
      <SubHeader title="Notre fonctionnement" />
      <Container>
        <RecrutItem>
          <SiGoogletranslate />
          <h1>Compréhension</h1>
          <ul>
            <li>ADN</li>
            <li>Stack Technique</li>
            <li>Context</li>
            <li>RH</li>
          </ul>
        </RecrutItem>
        <RecrutItem>
          < RiPencilRuler2Line />
          <h1>Identification</h1>
          <ul>
            <li>Big Data</li>
            <li>Base de donnée qualifiée</li>
            <li>Intelligence artificielle</li>
            <li>Références</li>
          </ul>
        </RecrutItem>
        <RecrutItem>
          <BiTimer />
          <h1>Évaluation</h1>
          <ul>
            <li>Prise de référence employeur</li>
            <li>Entretien préalable</li>
            <li>Expertise technique</li>
          </ul>
        </RecrutItem>
        <RecrutItem>
          <GiMeshNetwork />
          <h1>Sélection</h1>
          <p>Proposition de profils que lorsque nous sommes surs qu'ils correspondent à vos attentes</p>
        </RecrutItem>
        <RecrutItem>
          <ImStatsDots />
          <h1>Suivi</h1>
          <ul>
            <li>Coaching / Conseil</li>
            <li>Compte rendu d'activité</li>
            <li>Suivi et feedback entretien</li>
            <li>Participation aux négociations</li>
          </ul>
        </RecrutItem>
        <RecrutItem>
          <BiGlobe />
          <h1>Modalité</h1>
          <ul>
            <li>Au succès : Pas de factiration sans embauche</li>
            <li>Période de garantie avec remboursement au prorata du temps passé</li>
          </ul>
        </RecrutItem>
      </Container>
      <FormContact title="Précision pour vos recrutement" />
    </>
    )
}

const Container = styled.section`
  display:grid;
  width:min(1400px,90%);
  margin:90px auto;
  grid-row-gap:10em;
  grid-column-gap:50px;
  grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));

`

const RecrutItem = styled.article`
  display:grid;
  grid-template-columns:40px 1fr;
  gap:20px;

  svg{
    display:block;
    width:100%;
    height:40px;
    grid-row:1/span 2;
    color:${color.primary};
  }
  h1{
    font-size:22px;
  }
  h1~*{
    font-size:18px;
  }
  ul{
    list-style-type:"- ";
    list-style-position: inside;
  }
`

export default Recrutement
