import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((el) => (<MissionCard
          name={ el.name }
          year={ el.year }
          country={ el.country }
          destination={ el.destination }
          key={ el.name }
        />))}
      </div>
    );
  }
}

export default Missions;
