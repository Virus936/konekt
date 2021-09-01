import './App.css';
import Header from './components/header/Header'
import styled from 'styled-components'
import Footer from './components/footer/Footer'
import Landing from './pages/landing/Landing'


function App() {
  return (
    <div className="App">
      <Header />
    
      <Main>
        <Landing />
      </Main>
      <Footer />
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
