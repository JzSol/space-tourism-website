import { Header } from './Header';

import '../Technology.scss';
import { Vehicle } from './LaunchInfo.tsx/Vehicle';
import { Spaceport } from './LaunchInfo.tsx/Spaceport';
import { Capsule } from './LaunchInfo.tsx/Capsule';

import technologyInfoFromServer from '../api/vehicle';
import { useState } from 'react';
import classNames from 'classnames';

export const Technology = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(1);

  return (
    <div className="technology">
      <Header />
      <div className="container">
        <div className="h">
          <div className="num">03</div>SPACE LAUNCH 101
        </div>

        <div className="infcont">
          <div className="buttons">
            {technologyInfoFromServer.map((vehicle) => {
              return (
                <button
                  className={classNames(
                    'num-btn',
                    vehicle.id === selectedVehicle && 'active'
                  )}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                  key={vehicle.id}
                >
                  {vehicle.id}
                </button>
              );
            })}
          </div>

          {(selectedVehicle === 1 && <Vehicle />) ||
            (selectedVehicle === 2 && <Spaceport />) ||
            (selectedVehicle === 3 && <Capsule />)}
        </div>
      </div>
    </div>
  );
};
