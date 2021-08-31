import './App.css';
import Header from './components/header/Header'
import styled from 'styled-components'
import Hero from './components/hero/Hero'
import SearchBar from './components/searchbar/SearchBar'
import Description from './components/description/Description'
import HowItWork from './components/howitwork/HowItWork'
import Candidature from './components/candidature/Candidature'

function App() {
  return (
    <div className="App">
      <Header />
    
      <Main>
        <Hero />
        <SearchBar />
        <Description />
        <HowItWork />
        <Candidature />



      </Main>
    </div>
  );
}
const Main = styled.main`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:auto;
  overflow:hidden;
  p{
    margin-bottom:2em;
    white-space:normal;

  }
`

export default App;
