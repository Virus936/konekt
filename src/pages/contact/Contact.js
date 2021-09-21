import React from "react"
import styled from 'styled-components'
import SubHeader from '../../components/header/SubHeader'
import FormContact from '../../components/form/FormContact'

function Contact(){
  return(
    <>
      <SubHeader title="Contact" />
      <Container>
        <FormContact />
      </ Container>
    </>
    )
}

const Container = styled.main`
  padding:80px 0;
`

export default Contact
