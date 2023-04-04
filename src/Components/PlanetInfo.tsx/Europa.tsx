import '../../Planet.scss';
export const Europa = () => {
  return (
    <>
      <div className="planets">europa</div>
      <p className="info">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>

      <div className="triangle"></div>

      <div className="infoblock">
        <div className="distance">
          <div className="distinfo">AVG. DISTANCE</div>
          <div className="km"> 628 MIL. km</div>
        </div>

        <div className="ttravel">
          <div className="distinfo">Est. travel time</div>
          <div className="km"> 3 years</div>
        </div>
      </div>
    </>
  );
};
