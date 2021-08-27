import './App.css';
import Header from './components/header/Header'
import styled from 'styled-components'
import Hero from './components/hero/Hero'


function App() {
  return (
    <div className="App">
      <Header />
    
      <Main>
        <Hero />
        <p>Sit asperiores exercitationem vel tenetur exercitationem Facilis minima quisquam quaerat commodi reiciendis Ipsum facere aspernatur numquam explicabo provident iusto perferendis. Consectetur quas porro modi nemo quae Numquam rem magnam sit</p>
      </Main>
    </div>
  );
}
const Main = styled.main`
  margin:auto;
  font-size:2em;
  background-color:#ea5244;

`

export default App;
