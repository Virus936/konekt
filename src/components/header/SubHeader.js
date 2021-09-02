import React, {} from "react"
import styled from 'styled-components'
import color from '../color'

function SubHeader({title}){
  return(
    <Container>
      {title}
    </Container>
    )
}

const Container = styled.header`
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
  background-color:${color.primary};
  color:white;
  font-size:2em;
  height:4em;
`

export default SubHeader
