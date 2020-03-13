import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueinfo';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{height:"1500px"}}>
      <Element name="Event Starts in">
          <Header/>
      </Element>

      <Element name="Event Starts in">
          <Featured/>
      </Element>

      <Element name="Venue Info">
          <VenueInfo/>
      </Element>

      <Element name="Highlights">
          <Highlights/>
      </Element>

      <Element name="Pricing">
          <Pricing/>
      </Element>

      <Element name="Location">
          <Location/>
      </Element>

      <Footer/>

    </div>
  );
}

export default App;
