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

        <p>Dolor sit temporibus eius blanditiis officia Maxime dolorum dolorem animi sequi vero quia. Cupiditate soluta quo repellendus nemo reprehenderit Aliquam ex dolore illo est soluta quos repudiandae Animi consequatur adipisci</p>
        <p>Dolor sit temporibus eius blanditiis officia Maxime dolorum dolorem animi sequi vero quia. Cupiditate soluta quo repellendus nemo reprehenderit Aliquam ex dolore illo est soluta quos repudiandae Animi consequatur adipisci</p>
        <p>Dolor sit temporibus eius blanditiis officia Maxime dolorum dolorem animi sequi vero quia. Cupiditate soluta quo repellendus nemo reprehenderit Aliquam ex dolore illo est soluta quos repudiandae Animi consequatur adipisci</p>
        <p>Dolor sit temporibus eius blanditiis officia Maxime dolorum dolorem animi sequi vero quia. Cupiditate soluta quo repellendus nemo reprehenderit Aliquam ex dolore illo est soluta quos repudiandae Animi consequatur adipisci</p>
        <p>Sit asperiores exercitationem vel tenetur exercitationem Facilis minima quisquam quaerat commodi reiciendis Ipsum facere aspernatur numquam explicabo provident iusto perferendis. Consectetur quas porro modi nemo quae Numquam rem magnam sit</p>
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
  font-size:2em;
  background-color:#ea5244;

`

export default App;
