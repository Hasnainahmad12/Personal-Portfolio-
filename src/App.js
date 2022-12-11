import './App.css';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Navber from "./components/Navbar/Navber";
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonials/Testimonial';
import Works from './components/Works/Works';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background: darkMode? 'black' : '',
      color: darkMode? 'white': ''
    }}
    >
     <Navber />

     <Intro />

     <Services />

     <Experience />

     <Works />

     <Portfolio />

     <Testimonial />
     
     <Contact />

     <Footer />
     
    </div>
  );
}

export default App;


//smooth scrolling package (npm i react-scroll)


