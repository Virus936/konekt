import React, {} from "react"
import SubHeader from '../../components/header/SubHeader'
import styled from 'styled-components'

function Offres(){
  return(
    <>
      <SubHeader title="Notre expertise" />
      <Container>
        <form onSubmit={e=> e.preventDefault()}>
          <input type="text" />
          <input type="text" />
        </form>
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
  flex-direction:column;
  margin:3em auto;
  width:90%;
  gap:20px;
  height:400px;
  align-items:flex-start;

  &>div{
    background-color:pink;
    flex:1 ;
  }
  

  &>form{
    display:flex;
    flex: 0 1 ;
    flex-direction:column;
    input{
      display:block;
    }

  }
`

export default Offres

