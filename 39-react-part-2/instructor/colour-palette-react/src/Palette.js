import React, { useState } from 'react';
import Swatch from './Swatch';
import Form from './Form';

const Palette = () => {

  const initialSwatches = [
    { red: 255, green: 0, blue: 0 },
    { red: 0, green: 255, blue: 0 },
    { red: 0, green: 0, blue: 255 },
  ];
  const [swatches, setSwatches] = useState(initialSwatches);

  const swatchElements = swatches.map( (s, i) =>
    <Swatch key={i} {...s} />
  );

  const addSwatch = (s) => {
    console.log(`Adding a swatch!`, s)

    setSwatches( (oldSwatches) =>
      [...oldSwatches, s]
    )
  }

  return (
    <React.Fragment>
      <ul className="palette">
        { swatchElements }
      </ul>
      <Form onSubmit={addSwatch} />
    </React.Fragment>
  );
};

export default Palette;