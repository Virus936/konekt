import React, {} from "react"
import Personnage from '../../components/personnage/Personnage'
import persos from './perso'
import why from './why'
import styled from 'styled-components'
import SubHeader from '../../components/header/SubHeader'


function AboutUs(){
  return(
    <>
      <SubHeader title="Qui sommes-nous ?" />
      <Container>
        {persos.map(perso => {
          return <Personnage 
            key={perso.name}
            name={perso.name} 
            picture={perso.picture} 
            desc={perso.desc} 
          />
        })}
        <h1>Pourquoi KONEKT ?</h1>
        <p> {why} </p>
      </Container>
    </>
    )
}
const Container = styled.div`
  display:flex;
  gap:20px;
  
  flex-wrap:wrap;
  margin:10%;

  &>h1{
    text-align:center;
    width:100%;
    color:#000;
    margin:  2em 0;
  }
  &>p{
    width:100%;
    
  }
`

export default AboutUs
