import React from 'react';
import propTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div
        data-testid="planet-card"
        style={ {
          color: 'white',
          display: 'flex',
          width: '30%',
          height: '20%',
        } }
      >
        <img
          style={ {
            width: '70%',
            height: '70%',
          } }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p
          style={ {
            width: '50%',
            height: '10%',
          } }
          data-testid="planet-name"
        >
          { planetName }
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: propTypes.string.isRequired,
  planetImage: propTypes.string.isRequired,
};
export default PlanetCard;
