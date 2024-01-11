import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationIcons from "../notifications/notificationsIcons";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ActivateAlarms from "./components/activateAlarm";
import SecurityIndex from "./components/securityIndex";
import AlarmAnalysis from "./components/alarmAnalysis";
import ActiveAlarms from "./components/activeAlarms";

const Alarms = () => {
  const navigate = useNavigate();
  const [showAlarmSection, setShowAlarmSection] = useState<Boolean>(true);
  const [isMobile] = useState<Boolean>(
    window.matchMedia("(max-width: 767px)").matches
  );

  return (
    <div className="h-full md:h-screen md:overflow-scroll p-5 md:px-9 md:pt-6 bg-background w-full max-w-full box-border">
      <div className="flex justify-between items-center h-10 mb-4">
        <div>
          <h1 className="hidden md:flex items-center text-lg font-bold md:text-xl 2xl:text-3xl">
            <div
              className="flex w-10 h-10  items-center justify-start cursor-pointer"
              onClick={() => navigate("/dashboard/home")}
            >
              <ArrowBackIcon />
            </div>
            {"Alarms"}
          </h1>
          <div
            className="flex md:hidden w-10 h-10  items-center justify-start"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon />
          </div>
        </div>
        <NotificationIcons />
      </div>
      <div
        className={`flex ${
          isMobile && !showAlarmSection ? "flex-col-reverse" : "flex-col"
        } md:flex-row`}
      >
        <div className="flex flex-col w-full md:w-2/5 h-auto">
          {isMobile ? (
            showAlarmSection && (
              <ActivateAlarms
                setShowAlarmSection={setShowAlarmSection}
                showAlarmSection={showAlarmSection}
              />
            )
          ) : (
            <ActivateAlarms
              setShowAlarmSection={setShowAlarmSection}
              showAlarmSection={showAlarmSection}
            />
          )}
          {isMobile ? (
            !showAlarmSection && <SecurityIndex />
          ) : (
            <SecurityIndex />
          )}
        </div>
        <div className="flex flex-col w-full md:w-3/5 h-auto">
          {isMobile ? (
            !showAlarmSection && (
              <AlarmAnalysis
                setShowAlarmSection={setShowAlarmSection}
                showAlarmSection={showAlarmSection}
              />
            )
          ) : (
            <AlarmAnalysis
              setShowAlarmSection={setShowAlarmSection}
              showAlarmSection={showAlarmSection}
            />
          )}
          {isMobile ? showAlarmSection && <ActiveAlarms /> : <ActiveAlarms />}
        </div>
      </div>
    </div>
  );
};

export default Alarms;
