import React from "react";
import "./App.scss";
import EstateDashboard from "./components/estateDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import CheckIn from "./components/checkIn";
import SideBar from "./components/sideBar";
import Facility from "./components/Facilities/facility";
import Residents from "./components/Residents/residents";
import Notifications from "./components/Notifications/notifications";
import Alarms from "./components/Alarms/alarms";
import Guards from "./components/Guards/guards";
import SignUp from "./components/signUp/signUp";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App:React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/dashboard/home" replace />} />
          <Route path="/dashboard" element={<SideBar />}>
            <Route path="/dashboard/home" element={<EstateDashboard />} />
            <Route path="/dashboard/keypad" element={<CheckIn />} />
            <Route path="/dashboard/facility" element={<Facility />} />
            <Route path="/dashboard/residents" element={<Residents />} />
            <Route path="/dashboard/guards" element={<Guards />} />
          </Route>
        </Route>
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/alarms' element={<Alarms />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
