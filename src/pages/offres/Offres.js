import React, {} from "react"
import SubHeader from '../../components/header/SubHeader'
import styled from 'styled-components'
import SortingForm from '../../components/form/SortingForm'

function Offres(){
  return(
    <>
      <SubHeader title="Nos Offres" />
      <Container>
        <SortingForm />
        <div>
          <p>Sit suscipit velit ipsum recusandae culpa? Quidem dolor libero animi</p>
          <p>Adipisicing cupiditate molestiae asperiores eaque provident! Odio?</p>
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
    background-color:pink;
    flex:1 ;
  }

`

export default Offres

