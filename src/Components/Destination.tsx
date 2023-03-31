import { Header } from './Header';

import '../Destination.scss';

export const Destination = () => {
  return (
    <div className="destination">
      <div className="container">
        <Header />
        {/* <div className="box"> */}
        <div className="h">
          <div className="num">01</div>Pick your destination
        </div>
        <div className="moon"></div>
        {/* </div> */}

        <div className="infocontainer">
          <div className="bar">
            <button className="btn">moon</button>
            <button className="btn">mars</button>
            <button className="btn">europa</button>
            <button className="btn">titan</button>
          </div>
          <div className="planets">moon</div>
          <p className="info">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="triangle"></div>

          <div className="distance">
            <div className="distinfo">AVG. DISTANCE</div>
            <div className="km"> 384,400 km</div>
          </div>
          <div className="ttravel">
            <div className="distinfo">Est. travel time</div>
            <div className="km"> 3 days</div>
          </div>
        </div>
      </div>
    </div>
  );
};
