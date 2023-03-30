import { Body } from './Body';
import { Header } from './Header';

import '../App.scss';

export const HomePage = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div>
          <Body />
        </div>
      </div>
    </div>
  );
};
