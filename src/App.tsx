import { HomePage } from './Components/HomePage';
import { Destination } from './Components/Destination';

import { Route, Routes } from 'react-router-dom';
import { CrewPage } from './Components/CrewPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<HomePage />} />

        <Route path="/destination" element={<Destination />} />

        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<h1>still in progress</h1>} />
        <Route path="/*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </>
  );
};
