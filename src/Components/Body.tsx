import '../Body.scss';
import { NavLink } from 'react-router-dom';

export const Body = () => {
  return (
    <div className="body">
      <div className="textblock ">
        <div className="par-1">So you want to travel to</div>
        <h1 className="h-1">space</h1>
        <p className="p-1">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <NavLink to="/destination" className="explorebtn">
          <div className="white-circle">
            <div className="btntext">explore</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
