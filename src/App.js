import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import fundo from './images/background.png';

const GlobalStyle = styled.div`
background-image: url(${fundo});
width:100%;
height: 100%;
`;

class App extends React.Component {
  render() {
    return (
      <GlobalStyle>
        <Header />
        <SolarSystem />
        <Missions />
      </GlobalStyle>);
  }
}

export default App;
