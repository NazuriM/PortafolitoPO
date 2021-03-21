import React from 'react';


// CSS styles
/* import '../App.css' */

// Import owner
import Banner from './Banner';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';
import Cont from './Cont';
import Portafolio from './Portafolio';
import Footer from './Footer';


function Home() {

  return (
        <div className="home">
            <Nav />
            <Banner/>
            <About />
            <Portafolio />
            <Contact />
            <Cont/>
            <Footer />
        </div>
  );
}

export default Home;