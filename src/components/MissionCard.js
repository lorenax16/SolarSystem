import React from 'react';
import propTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const {
      name,
      year,
      country,
      destination } = this.props;
    return (
      <div
        style={ {
          color: 'white',
          position: 'relative',
          width: '300px',
          padding: '3rem 0 2rem',
          margin: '20px',
          border: '1px solid white',
          alignItems: 'center',
        } }
        data-testid="mission-card"
      >
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  country: propTypes.string.isRequired,
  destination: propTypes.string.isRequired,
};
export default MissionCard;
