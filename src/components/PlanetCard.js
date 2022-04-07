import React from "react";

class PlanetCard extends React.Component {
    render() {
        const { planetName, planetImage } = this.props;
        const planetNameAlt = "Planeta " + planetName;
        return(
            <div data-testid="planet-card">
                <p data-testid="planet-name">{planetName}</p>
                <img src={planetImage} alt={planetNameAlt} />
            </div>
        );
    }
}
export default PlanetCard;