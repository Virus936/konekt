import React from 'react';
import color from '../color';
import styled from 'styled-components';

function FormContact({ title }) {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      {title && <h2>{title}</h2>}
      <input type="text" placeholder="Nom" />
      <input type="text" placeholder="Prénom" />
      <input type="text" placeholder="Objet de votre message" />
      <input type="email" placeholder="Email" />
      <input type="tel" placeholder="Téléphone" />
      <textarea id="" name="" cols="30" rows="10"></textarea>

      <button>Contacter</button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  grid-gap: 10px;
  width: min(500px, 90%);
  margin: auto;
  margin-top: 0;
  h2 {
    text-align: center;
    letter-spacing: 1px;
    color: #424242;
  }
  input {
    padding: 0.5em;
    text-align: center;
    border-radius: 3px;
    border: solid 1px #ccc;
    font-weight: bold;
    font-size: 1em;

    &::placeholder {
      color: #ccc;
    }

    &:focus {
      border: solid 1px ${color.primary};
      outline: 1px solid ${color.primary};

      &::placeholder {
        color: transparent;
      }
    }
  }
  textarea {
    padding: 5px;
    border-radius: 3px;
    border: solid 1px #ccc;
    &:focus {
      border: solid 1px ${color.primary};
      outline: 1px solid ${color.primary};
    }
  }
  button {
    background-color: ${color.primary};
    color: snow;
    padding: 0.5em;
    text-align: center;
    border-radius: 3px;
    font-weight: bold;
    font-size: 1em;
    border: none;
  }
`;
export default FormContact;
