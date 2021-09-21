import React, {} from "react"
import styled from 'styled-components'
import comprehension from './comprehension.png'

function HowItem({ image, title, content }){
  
  return(
    <Container>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

    </Container>
    )
}
const Container = styled.div`
  display:flex;
  gap:1em;
  

`
HowItem.defaultProps = {
  image: comprehension,
  title: "title missing",
  content: "content missing"
}

export default HowItem
