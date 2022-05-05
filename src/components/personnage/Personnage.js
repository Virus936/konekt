import React from 'react';
import styled from 'styled-components';

function Personnage({ picture, desc, name }) {
  return (
    <Container>
      <img src={picture} alt="" />
      <h1>{name}</h1>
      <p>{desc}</p>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 25em;

  img {
    display: block;
    width: 15vw;
    height: 15vw;
    border: red solid;
    border-radius: 50%;
  }
`;

Personnage.defaultProps = {
  name: 'Name',
  desc: 'description à fournir...',
};

export default Personnage;
