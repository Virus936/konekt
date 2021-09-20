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
  padding-left:max(5%, calc(100vw - 1400px)/2);
  text-transform:uppercase;
  font-weight:bold;
  align-items:center;
  background-color:${color.secondary};
  color:white;
  font-size:2em;
  height:122px;
`

export default SubHeader
