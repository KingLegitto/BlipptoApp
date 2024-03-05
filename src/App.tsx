import React from "react";
import "./App.scss";
import EstateDashboard from "./pages/estateDashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import CheckIn from "./pages/checkIn";
import SideBar from "./components/sidebar/sideBar";
import Facility from "./pages/facility";
import Residents from "./pages/residents";
import Notifications from "./pages/notifications";
import Alarms from "./pages/alarms";
import Guards from "./pages/guards";
import SignUp from "./pages/signUp";
import { QueryClientProvider, QueryClient } from "react-query";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";
import Onboarding from "./pages/onboarding/onboarding";
import LandingPage from "./pages/landingPage";
import UserRegisteration from "./pages/userRegistration";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import clientStore from "./redux/store/clientStore";
import { Provider } from "react-redux";
import CodeNotification from "./components/codeNotification";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={clientStore}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/">
              {/* <Route index element={<Navigate to="/landing" replace />} /> */}
              <Route index element={<Navigate to="/dashboard/home" replace />} />
              <Route path="/dashboard" element={<SideBar />}>
                <Route path="/dashboard/home" element={<EstateDashboard />} />
                <Route path="/dashboard/keypad" element={<CheckIn />} />
                <Route path="/dashboard/facility" element={<Facility />} />
                <Route path="/dashboard/residents" element={<Residents />} />
                <Route path="/dashboard/guards" element={<Guards />} />
                <Route
                  path="/dashboard/user/profile"
                  element={<UserProfile />}
                />
              </Route>
            </Route>
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/alarms" element={<Alarms />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/staff/register" element={<Onboarding />} />
            <Route path="/user/register" element={<UserRegisteration />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </QueryClientProvider>
      </Provider>
    </div>
  );
};

export default App;
