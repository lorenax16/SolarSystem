import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((el) => (<PlanetCard
          planetName={ el.name }
          planetImage={ el.image }
          key={ el.name }
        />))}
      </div>);
  }
}
export default SolarSystem;
