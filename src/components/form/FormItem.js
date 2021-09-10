import React, {} from "react"
import styled from 'styled-components'

function FormItem({children}){
  return(
    <Container>
      {children}
    </Container>
    )
}
const Container = styled.div`
    div{
      display:flex;
      padding-left:1em;
      gap:1em;
      cursor:pointer;
      &:hover{
        background-color:rgba(255,255,255,.2);
      }
      &>label{
        width:100%;
        cursor:pointer;
      }
    }
`

export default FormItem
