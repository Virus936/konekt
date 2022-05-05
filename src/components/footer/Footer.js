import React from 'react';
import styled from 'styled-components';
import Candidat from './Candidat';
import Newsletter from './Newsletter';
import Contact from './Contact';

function Footer() {
  return (
    <Container>
      <Newsletter />
      <Candidat />
      <Contact />
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  background-color: #25262a;
  color: #757575;
  padding: 5%;
  gap: 30px;

  * {
    font-size: 12px;
  }
  & > div {
    flex: 1;
    h1 {
      color: white;
      margin-bottom: 1em;
      font-size: 1.2em;
      text-transform: uppercase;
    }
    p {
      margin-bottom: 1em;
    }
  }
`;

export default Footer;
