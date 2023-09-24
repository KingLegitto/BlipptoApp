import React from 'react';
import './App.scss';
import EstateDashboard from './components/estateDashboard';
import { Route, Routes, Navigate} from 'react-router-dom';
import CheckIn from './components/checkIn';
import SideBar from './components/sideBar';
import Facility from './components/Facilities/facility';
import Residents from './components/Residents/residents';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  >
          <Route index element={<Navigate to="/dashboard/home" replace />} />
          <Route path='/dashboard' element={<SideBar />}>
           <Route path='/dashboard/home' element={<EstateDashboard />} />
           <Route path='/dashboard/keypad' element={<CheckIn />} />
          <Route path='/dashboard/facility' element={<Facility />} />
          <Route path='/dashboard/residents' element={<Residents />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
