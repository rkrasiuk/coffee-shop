import React from 'react';

import {GMap as GoogleMap} from './GoogleMap';

const AboutPage = () => (
  <div>
    <h3>About</h3>
    <p>Grinder shop organic breve cortado instant brewed ristretto
      coffee dripper, bar cup a foam aroma frappuccino, blue mountain
      grinder extraction a decaffeinated acerbic coffee that. Spoon
      so extraction americano, a single origin brewed cup aged,
      doppio that, aged a acerbic eu strong, coffee percolator, milk
      variety macchiato french press sit beans. Breve café au lait, sit
      caramelization, crema black single origin blue mountain white beans,
      aromatic, id et galão rich siphon. White strong, qui, white, brewed
      pumpkin spice ut, doppio steamed, black, skinny that, a doppio aroma
      froth mazagran. Cup et cultivar coffee aromatic breve shop con panna
      a extraction grounds kopi-luwak in grinder affogato sweet
      decaffeinated roast. Café au lait chicory cinnamon macchiato, cream,
      roast, macchiato sit, java decaffeinated, and ut viennese trifecta
      viennese aromatic chicory caramelization.
    </p>
    <h3>Contact Us</h3>
    <p>Email: coffee@shop.com</p>
    <p>Phone: +123 (321) 45 54</p>
    <div>
      <GoogleMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{height: '100%'}} />}
        containerElement={<div style={{height: '400px'}} />}
        mapElement={<div style={{height: '100%'}} />}
      />
    </div>
  </div>
);

export default AboutPage;
