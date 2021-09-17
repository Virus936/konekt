import React, {} from "react"
import styled from 'styled-components'

function JobDescItem({th, td}){
  return(
    <Tr>
      <th> {th}</th>
      <td>{td}</td>
    </Tr>
    )
}

const Tr = styled.tr`
  th{
    text-align:left;
  }
  td{
    padding-left:1em;
  }
`

export default JobDescItem
