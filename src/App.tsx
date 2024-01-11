import React from "react";
import "./App.scss";
import EstateDashboard from "./components/dashboard/estateDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import CheckIn from "./components/checkIn/checkIn";
import SideBar from "./components/sidebar/sideBar";
import Facility from "./components/facility/facility";
import Residents from "./components/residents/residents";
import Notifications from "./components/notifications/notifications";
import Alarms from "./components/alarms/alarms";
import Guards from "./components/guards/guards";
import SignUp from "./components/signUp/signUp";
import { QueryClientProvider, QueryClient } from "react-query";
import SignIn from "./components/SignIn/SignIn";
import UserProfile from "./components/UserProfile/UserProfile";
import Onboarding from "./components/onboarding/onboarding";
import LandingPage from "./components/landingPage";
import UserRegisteration from "./components/userRegistration";
import VerifyEmail from "./components/verifyEmail";

const queryClient = new QueryClient();

const App:React.FC = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient} >
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/landing" replace />} />
          <Route path="/dashboard" element={<SideBar />}>
            <Route path="/dashboard/home" element={<EstateDashboard />} />
            <Route path="/dashboard/keypad" element={<CheckIn />} />
            <Route path="/dashboard/facility" element={<Facility />} />
            <Route path="/dashboard/residents" element={<Residents />} />
            <Route path="/dashboard/guards" element={<Guards />} />
              <Route path="/dashboard/user/profile" element={<UserProfile />} />
          </Route>
        </Route>
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/alarms' element={<Alarms />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/staff/register' element={<Onboarding/>} />
        <Route path='/user/register' element={<UserRegisteration/>} />
        <Route path='/landing' element={<LandingPage/>} />
        <Route path='/verifyEmail' element={<VerifyEmail/>} />
      </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
