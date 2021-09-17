import React, {} from "react"
import SubHeader from '../../components/header/SubHeader'
import styled from 'styled-components'
import SortingForm from '../../components/form/SortingForm'
import Offre from '../../components/offre/Offre'

function Offres(){
  return(
    <>
      <SubHeader title="Nos Offres" />
      <Container>
        <SortingForm />
        <div>
          <Offre 
            title="QA Engineer – Price Management Platform"
            date="21/12/21"
            skill="javascript"
          />
          <Offre 
            title="Data Analyst"
            date="09/04/86"
            skill="python"
            localisation="paris"
          />
        </div>

      </Container>
    </>
    )
}
const Container = styled.div`
  display:flex;
  flex-direction:row;
  margin:3em auto;
  width:90%;
  gap:20px;
  align-items:flex-start;

  &>div{
    flex:1 ;
  }

`

export default Offres

