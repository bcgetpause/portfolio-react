import './App.scss';
import Accueil from './components/Accueil/Accueil';
import Contact from './components/Contact/Contact';
import Experiences from './components/Experiences/Experiences';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import Parallaxe from './components/Parallaxe/Parallaxe';
import Portfolio from './components/Portfolio/Portfolio';
import Presentation from './components/Presentation/Presentation';
import Range from './components/Range/Range';
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { TweenMax, TimelineMax } from "gsap"; // Also works with TweenLite and TimelineLite

function App() {
  ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <Accueil></Accueil>
        <Presentation></Presentation>
        <Portfolio></Portfolio>
        <Range></Range>
        <Experiences></Experiences>
        <Parallaxe></Parallaxe>
        <Contact></Contact>
      </div>
      <footer>
        Tout Droits réservés &copy;
  </footer>
    </>
  );
}

export default App;
