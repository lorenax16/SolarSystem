import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

const Div = styled.div`
color:#fff;
text-align: center;
`;

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <Div data-testid="solar-system">
          <Title
            headline="Planetas"
          />
        </Div>
        <div
          style={ {
            display: 'flex',
            flexdirection: 'row',
            width: '100%',
            height: '100%',
            alignitems: 'center',
            justifycontent: 'center',
          } }
        >
          {planets.map((item) => (<PlanetCard
            planetImage={ item.image }
            planetName={ item.name }
            key={ item.name }
          />))}
        </div>
      </div>);
  }
}
export default SolarSystem;
