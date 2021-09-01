import './App.css';
import Header from './components/header/Header'
import styled from 'styled-components'
import Footer from './components/footer/Footer'
import Landing from './pages/landing/Landing'
import AboutUs from './pages/aboutUs/AboutUs'
import Blog from './pages/blog/Blog'
import Expertise from './pages/expertise/Expertise'
import Offres from './pages/offres/Offres'
import Recrutement from './pages/contact/Contact'
import Contact from './pages/contact/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Main>
          <Switch>
            <Route path='/expertise'>
              <Expertise />
            </Route>
            <Route path='/offres'>
              <Offres />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>

            <Route path='/recrutement'>
              <Recrutement />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>

            <Route path='/about-us'>
              <AboutUs />
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </Router>
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
