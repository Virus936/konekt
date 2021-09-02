import React, {} from "react"
import styled from 'styled-components'
import color from '../color'

function Newsletter(){
  return(
    <Container>

      <h1>Newsletter</h1>
      <p>Abonnez-vous à notre newsletter pour recevoir les dernières offres d’emploi, les candidats et les autres actualités</p>
      <form onSubmit={e=>e.preventDefault()}>
        <div><input type="text" placeholder="Entrer votre email" /> <button>Envoyer</button></div>
      </form>
    </Container>
    )
}

const Container = styled.div`
  form{
    div{
      display:flex;
      background-color:white;
      height:2em;

      input{
        display:flex;
        flex:1 1;
        border:none;
        padding-left:1em;
        font-weight:bold;
      }
      button{

        display:block;
        background-color:${color.primary};
        border:none;
        color:white;
        font-weight:bold;
        flex:1;
          max-width:70px;
        
      }
    }
  }


`
export default Newsletter
