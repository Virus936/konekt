import React from 'react';
import styled from 'styled-components';
import NouvelleApproche from './nouvelle-approche.png';

function Description() {
  return (
    <Container>
      <div>
        <h1> Tu recherches un job Tech ? </h1>
        <p>
          Konekt est une solution de recrutement technique spécialisée dans les
          métiers de la tech. L’objectif est de mettre en relation les
          entreprises les plus innovantes du marchés avec les candidats les plus
          pertinents possibles. Pour cela, Konekt s’appuie sur l’utilisaton
          d’outils performants de matching, d’identification et d’évaluation sur
          une population de candidats actifs et passifs.
        </p>{' '}
        <p>
          Notre principale stratégie est de développer Konekt comme une solution
          de recrutement alternative pour répondre à une exigence toujours plus
          forte des entreprises comme des candidats.
        </p>
      </div>
      <div>
        <img src={NouvelleApproche} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(max(90%, 900px));

  & > * {
    flex: 1 2 400px;
    img {
      width: 100%;
    }
  }
`;

export default Description;
