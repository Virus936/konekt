import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Landing from './pages/landing/Landing';
import AboutUs from './pages/aboutUs/AboutUs';
import Blog from './pages/blog/Blog';
import Expertise from './pages/expertise/Expertise';
import Offres from './pages/offres/Offres';
import Recrutement from './pages/recrutement/Recrutement';
import Contact from './pages/contact/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/expertise">
            <Expertise />
          </Route>
          <Route path="/offres">
            <Offres />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/recrutement">
            <Recrutement />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
