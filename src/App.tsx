import { HomePage } from './Components/HomePage';
import { Destination } from './Components/Destination';

import { Route, Routes } from 'react-router-dom';
import { CrewPage } from './Components/CrewPage';
import { Technology } from './Components/Technology';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />

        <Route path="/destination" element={<Destination />} />

        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </>
  );
};
