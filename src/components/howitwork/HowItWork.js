import React, {useState} from "react"
import styled from 'styled-components'
import HowItem from './HowItem'
import comprehension from './comprehension.png'
import identification from './identification.png'
import evaluation from './evaluation.png'
import selection from './selection.png'
import suivi from './suivi.png'

function HowItWork(){
  return(
    <Container>

      <h1>Comment ça marche ?</h1>
      <div>
        <HowItem 
          image={comprehension} 
          title= "Compréhension"
          content="Nous comprenons vos besoins parce que nous prenons le temps de vous écouter et parce que nous parlons le même language !"
        />
        <HowItem 
          image={identification} 
          title="Identification" 
          content="Nous identifions les candidats où les sociétés qui vous correspondent vraiment grâce à nos outils puissants de big data et notre réseau."
        />
        <HowItem  
          image={evaluation} 
          title="Évaluation" 
          content="Nous assurons des évaluations complètes précises au travers de test technique assuré par des experts de notre réseau et des prises de références systématiques."
        />
        <HowItem
          image={selection}
          title="Sélection"
          content="Nous vous proposons une sélection de candidats que lorsque nous sommes surs qu’ils correspondent à vos attentes. Consultation et gestion des CV directement dans votre espace privée "
        />

        <HowItem
          image={suivi}
          title="Suivi"
          content="Nous assurons un suivi et un coaching sur toute la durée du recrutement avec mise à disposition de compte rendu d’activité et d’entretien."
        />
      </div>
    </Container>
  )
}

const Container = styled.section`
  width:100%;
  padding:10%;
  color:white;
  background-color:midnightblue;
  &>h1{
    text-align:center;

    margin-bottom:2em;
  }
  &>div{
    display:grid;
    grid-gap:30px;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
  }
`
export default HowItWork
