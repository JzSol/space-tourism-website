export const Moon = () => {
  return (
    <>
      <div className="planets">moon</div>
      <p className="info">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>

      <div className="triangle"></div>
      <div className="infoblock">
        <div className="distance">
          <div className="distinfo">AVG. DISTANCE</div>
          <div className="km"> 384,400 km</div>
        </div>

        <div className="ttravel">
          <div className="distinfo">Est. travel time</div>
          <div className="km"> 3 days</div>
        </div>
      </div>
    </>
  );
};
