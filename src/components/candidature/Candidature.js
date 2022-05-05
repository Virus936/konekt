import React from 'react';
import styled from 'styled-components';
import candidature from './candidature-spontanee.png';
import color from '../color';

function Candidature() {
  return (
    <Container>
      <img src={candidature} alt="" />
      <div>
        <h2>Tu recherches un job sur mesure</h2>
        <form onSubmit={(e) => e.preventDefault()} action="">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <input type="text" className="email" placeholder="Email" />
          <input type="text" placeholder="Téléphome" />
          <input type="file" />
          <textarea
            id=""
            className="message"
            placeholder="message"
            name=""
            rows="4"
          ></textarea>
          <button>Postuler</button>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  width: 100%;
  grid-gap: 30px;

  img {
    display: block;
    width: 100%;
    justify-self: end;
    @media (min-width: 1230px) {
      width: 70%;
    }
  }
  @media (min-width: 1230px) {
    margin-top: 90px;
  }
  & > div {
    text-align: center;
  }
  form {
    display: grid;
    width: 230px;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    & > * {
      display: block;
      border: lightgrey solid 1px;
      border-radius: 3px;
      padding: 5px;
      width: auto;
    }
    .email,
    .message {
      grid-column: 1/3;
    }
    & > button {
      display: inline;
      color: white;
      border: none;

      background-color: ${color.primary};
    }
    @media (max-width: 1230px) {
      display: flex;
      flex-direction: column;
      width: 90vw;
      margin: auto;
    }
  }
  @media (max-width: 1230px) {
    display: flex;
    flex-direction: column;
  }
`;
export default Candidature;
