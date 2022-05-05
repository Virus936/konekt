import React from 'react';
import styled from 'styled-components';
import JobDescItem from './JobDescItem';

function Offre({ title, date, desc, skill, localisation }) {
  return (
    <Container>
      <h1>{title}</h1>

      <table>
        <JobDescItem th="Posté" td={date} />
        <JobDescItem th="Spécialité" td={skill} />
        {localisation && <JobDescItem th="Localisation" td={localisation} />}
      </table>
      <p> {desc} </p>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    font-size: 1.5em;
    color: black;
  }
  & > * {
    margin-bottom: 1em;
  }
`;
Offre.defaultProps = {
  title: 'title of job',
  date: '01/01/21',
  desc: 'Notre client développe une solution logicielle de tarification.',
  type: 'cdi',
  skill: 'python, selenium',
};
export default Offre;
