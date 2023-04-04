import { Header } from './Header';
import '../Destination.scss';

import '../CrewPage.scss';
import { Douglas } from './CrewInfo.tsx/Douglas';
import { Mark } from './CrewInfo.tsx/Mark';
import { Victor } from './CrewInfo.tsx/Victor';
import { Anousheh } from './CrewInfo.tsx/Anousheh';
import { useState } from 'react';

import crewInfoFromServer from '../api/crewInfo';
import classNames from 'classnames';

export const CrewPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(1);
  return (
    <div className="CrewPage">
      <Header />
      <div className="container">
        <div className="h">
          <div className="num">02</div>Meet your crew
        </div>
        <div className="crew">
          {(selectedMember === 1 && <Douglas />) ||
            (selectedMember === 2 && <Mark />) ||
            (selectedMember === 3 && <Victor />) ||
            (selectedMember === 4 && <Anousheh />)}
          <div className="sidebar">
            {crewInfoFromServer.map((member) => {
              return (
                <button
                  className={classNames(
                    'circle-btn',
                    member.id === selectedMember && 'active'
                  )}
                  key={member.id}
                  onClick={() => setSelectedMember(member.id)}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
