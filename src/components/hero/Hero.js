import React, {useState} from "react"
import styled from 'styled-components'
import Client from '../scene-client.gif'
import Candidat from '../scene-candidat.jpg'

function Hero(){
  const [width, setWidth] = useState("50%")

  return(
    <Container width={width} onClick={e => setWidth(`${ e.clientX }px`)} bg={Client}>

      <div >
        <Img  src={Candidat} alt="" />
      </div>

    </Container>
    )
}

const Container = styled.section`
  width:100vw;
  background-image:url(${ p => p.bg });
  background-size:100%;

  &>div{
    width:${props => props.width };
    overflow:hidden;
    transition:.5s;
  }
`

const Img = styled.img`
  display:block;
  width:100vw;
`
export default Hero
