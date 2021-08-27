import React, {useState} from "react"
import styled from 'styled-components'
import Client from '../scene-client.gif'
import Candidat from '../scene-candidat.jpg'
import device from '../size'

function Hero(){
  const [width, setWidth] = useState("50%")

  return(
    <Container width={width} onClick={e => setWidth(`${ e.clientX - e.target.offsetLeft }px`)} bg={Client}>

      <div >
        <Img  src={Candidat} alt="" />
      </div>

    </Container>
    )
}

const Container = styled.section`
  width:145vw;
  background-image:url(${ p => p.bg });
  background-size:100%;
  @media ${device.bigScreen}{
    width:100vw;
  }

  &>div{
    width:${props => props.width };
    overflow:hidden;
    transition:.5s;
  }
`

const Img = styled.img`
  display:block;
  width:145vw;
  @media ${device.bigScreen}{
    width:100vw;
  }
`
export default Hero
