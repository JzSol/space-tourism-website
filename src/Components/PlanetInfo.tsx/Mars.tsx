export const Mars = () => {
  return (
    <>
      <div className="planets">MARS</div>
      <p className="info">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!
      </p>

      <div className="triangle"></div>
      <div className="infoblock">
        <div className="distance">
          <div className="distinfo">AVG. DISTANCE</div>
          <div className="km"> 225 MIL. km</div>
        </div>

        <div className="ttravel">
          <div className="distinfo">Est. travel time</div>
          <div className="km"> 9 months</div>
        </div>
      </div>
    </>
  );
};
