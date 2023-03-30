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

        {/* <div className="infocontainer">
          <div className="bar">
            <button className="btn">moon</button>
            <button className="btn">mars</button>
            <button className="btn">europa</button>
            <button className="btn">titan</button>
          </div>
          <div>moon</div>
        </div> */}
      </div>
    </div>
  );
};
