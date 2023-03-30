import '../Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="star"></div>
        <div className="rectangle "></div>
        <div className="blurred-rectangle">
          <ul className="nav">
            <li>
              <NavLink to="/#" className="text">
                <strong className="number">00</strong> HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className="text">
                <strong className="number">01</strong> DESTINATION
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className="text">
                <strong className="number">02</strong> CREW
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="text">
                <strong className="number">03</strong> TECHNOLOGY
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
