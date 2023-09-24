import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import PersonIcon from "@mui/icons-material/Person";
import { ReactComponent as Envelope } from "../assets/envelope.svg";
import { ReactComponent as Alarm } from "../assets/Alarm.svg";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const styles = {
  backdropStyle: {
    position: "fixed",
    top: "0px",
    bottom: "0px",
    left: "0px",
    right: "0px",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,
  contentStyle: {
    boxSizing: "border-box",
    // width: "70vw",
    // height: "50vh",
    // zIndex: 20,
    borderRadius: "23px",
    padding: "30px",
    position: "relative",
    backgroundColor: "white",

    // "@media (max-width: 767px)": {
    //   height: "40vh",
    // },
  } as React.CSSProperties,
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  } as React.CSSProperties,
  closeButtonStyle: {
    postion: "absolute",
    cursor: "pointer",
    zIndex: 20,
    height: "50px",
    width: "50px",
    background: "white",
    lineHeight: "75px",
    borderRadius: "50%",
    textAlign: "center",
  } as React.CSSProperties,
} ;

interface Props {
  children: ReactElement;
}

const modalRoot = document.getElementById("modal-root") || document.body;

const Modal:React.FC<Props> = ({ children }) => {
  return ReactDOM.createPortal(
    <div style={styles.backdropStyle} >
      <div className="w-1/5 lg:w-1/6 hidden md:block"></div>
      <div className="h-screen overflow-y-auto max-h-screen p-5 md:p-6 md:pr-9  w-full max-w-full md:w-4/5 lg:w-5/6 box-border">
        <div className="flex flex-col md:flex-row justify-between md:items-center h-[15vh] md:h-[10vh] mb-[4vh] invisible">
          <div className="order-1 md:order-none">
            <h1 className="text-lg font-bold md:text-xl 2xl:text-3xl">Hello</h1>
            <p className="text-sm md:text-md">
              Kindly Input the authentication code to invite your users in.
              Thank you
            </p>
          </div>
          <div className="flex flex-row justify-between items-center md:block ">
            <div className="flex md:hidden w-10 h-10 rounded-full bg-gray-400 items-center justify-center ">
              <PersonIcon />
            </div>
            <div className="flex">
              <div className="bg-white relative shadow-[0px_3px_5px_rgba(0,0,0,0.24)] rounded-full w-8 h-8 xl:w-10 xl:h-10 mr-2 flex items-center justify-center">
                <Alarm className="scale-[0.6] xl:scale-75" />
                <div className="flex items-center justify-center absolute w-6 h-6 rounded-full text-xs bg-accenture -top-3.5 -right-2">
                  21
                </div>
              </div>
              <div className="bg-white relative shadow-[0px_3px_5px_rgba(0,0,0,0.24)] rounded-full w-8 h-8 xl:w-10 xl:h-10 mr-2 flex items-center justify-center">
                <Envelope className="scale-[0.6] xl:scale-75" />
                <div className="flex items-center justify-center absolute w-6 h-6 rounded-full text-xs bg-accenture -top-3.5  -right-2">
                  21
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <Tabs value="checkIn" >
          <TabsHeader className="rounded-full h-12 xl:h-16 w-full md:w-[55%] lg:w-[45%] mx-auto bg-white p-0 tabHeader invisible">
            <Tab value="checkIn" className="pills">
              CheckIn
            </Tab>
            <Tab value="checkOut" className="pills">
              CheckOut
            </Tab>
          </TabsHeader>
          <TabsBody className="bg-white mt-7 rounded-3xl">
            <TabPanel value="checkIn" className="modal">
              <div className="checkin relative  h-[35vh] md:h-[40vh] lg:h-[50vh] 2xl:h-[60vh] box-border">
                {children}
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal
