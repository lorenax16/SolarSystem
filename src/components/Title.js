import React from 'react';
import propTypes from 'prop-types';
// import styled from 'styled-components';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div
        style={ {
          color: 'white',
        } }
      >
        <h2>{headline}</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: propTypes.string.isRequired,
};

export default Title;
