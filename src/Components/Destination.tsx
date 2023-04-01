import { Header } from './Header';

import planetsFromServer from '../api/planets';

import '../Destination.scss';
import { Moon } from './PlanetInfo.tsx/Moon';
import { Mars } from './PlanetInfo.tsx/Mars';
import { useState } from 'react';
import { Titan } from './PlanetInfo.tsx/Titan';
import { Europa } from './PlanetInfo.tsx/Europa';
import classNames from 'classnames';

export const Destination: React.FC = () => {
  const [selectedPlanetId, setSelectedPlanetId] = useState(1);

  return (
    <div className="destination">
      <div className="container">
        <Header />
        <div className="box">
          <div className="h">
            <div className="num">01</div>Pick your destination
          </div>
          <div
            className={classNames('moon', {
              mars: selectedPlanetId === 2,
              europa: selectedPlanetId === 3,
              titan: selectedPlanetId === 4,
            })}
          ></div>
        </div>

        <div className="infocontainer">
          <div className="bar">
            {planetsFromServer.map((planet) => {
              return (
                <button
                  className="btn"
                  key={planet.id}
                  onClick={() => setSelectedPlanetId(planet.id)}
                >
                  {planet.header}
                </button>
              );
            })}
          </div>

          {(selectedPlanetId === 1 && <Moon />) ||
            (selectedPlanetId === 2 && <Mars />) ||
            (selectedPlanetId === 3 && <Europa />) ||
            (selectedPlanetId === 4 && <Titan />)}
        </div>
      </div>
    </div>
  );
};
