import React, { useState, useRef } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ReactCodeInput from "react-code-input";
import { ReactComponent as Bottomsvg } from "../assets/Group3.svg";
import { ReactComponent as Topsvg } from "../assets/Group4.svg";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "./modal";

const inputStyling = {
  width: "10%",
  fontFamily: "monospace",
  borderRadius: "6px",
  border: "1px solid lightgrey",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
  paddingLeft: "0.3rem",
  height: "100%",
  fontSize: "32px",
  boxSizing: "border-box",
  color: "black",
  backgroundColor: "white",
} as React.CSSProperties;


export function Keypad() {
  const [open, setOpen] = useState(false);
  const code = useRef("");

  return (
    <>
      <div>
        {open && (
          <Modal>
            <div>
            <div className="flex justify-between  items-center mb-[6vh]">
              <div></div> 
              <h2 className="text-sm md:text-md xl:text-lg font-bold text-center">
                What's your secret?
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="flex justify-center items-center rounded-xl bg-background h-8 xl:h-12  w-8 xl:w-12"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="mb-[5vh] md:mb-[10vh] h-[7vh]">
              <input
                autoFocus
                type="text"
                id=""
                className="block w-full md:w-[70%] h-full text-[28px] mx-auto rounded-xl border-0 py-2 pl-3 md:text-md lg:text-lg text-gray-900 outline  outline-gray-500 outline-1  focus:outline-1  focus:outline-[#FFD601] sm:text-sm sm:leading-6"
              />
            </div>
            <div className="w-[75%] md:w-[60%] flex justify-between mx-auto">
              <button className="flex justify-center items-center text-base  rounded-full bg-gray h-12 md:h-14 xl:h-16 w-24 md:w-28 lg:w-44 xl:w-52 border-[#FFD601] border-2">
                Clear All
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex justify-center items-center relative z-10  rounded-full text-base bg-accenture h-12 md:h-14 xl:h-16 w-24 md:w-28 lg:w-44 xl:w-52"
              >
                Submit
              </button>
            </div>
            <Topsvg className=" absolute  topSvg -top-12 -left-11 scale-75" style={{borderRadius: '24px 0px 0px 0px'}} />
            <Bottomsvg className=" absolute bottomSvg -bottom-12 -right-11 scale-75" style={{borderRadius: '0px 0px 24px 0px'}} />
            </div>
          </Modal>
        )}
      </div>
      <Tabs value="checkIn" className='overflow-visible'>
        <TabsHeader className="rounded-full h-12 xl:h-14 2xl:h-16 w-full md:w-[55%] lg:w-[45%] mx-auto bg-white p-0 tabHeader duration-1000 ease-in-out transition-all">
          <Tab value="checkIn" className="pills">
            CheckIn
          </Tab>
          <Tab value="checkOut" className="pills">
            CheckOut
          </Tab>
        </TabsHeader>
        <TabsBody className="bg-white mt-7 shadow-[4px_4px_3.2px_0px_rgba(100,132,230,0.20)] rounded-3xl">
          <TabPanel value="checkIn" >
            <div className="checkin relative flex flex-col justify-between items-center bg-white  h-[35vh] md:h-[40vh] lg:h-[50vh] 2xl:h-[60vh] box-border p-4 md:p-5">
              <div className=" rounded-2xl md:h-[40%] lg:h-[60%] relative z-10">
                <h3 className="text-base md:text-3xl font-bold text-center mb-[6vh] 2xl:mb-24 passcode ">
                  Enter passcode
                </h3>
                <ReactCodeInput
                  type='text'
                  fields={6}
                  inputStyle={inputStyling}
                  onChange={(e) => (code.current += e)}
                  name="codeInput" 
                  inputMode='email'
                />
              </div>
              <div className="flex justify-center items-center  rounded-2xl gap-x-8 md:gap-x-16 h-[45%] md:h-[50%] lg:h-[40%] ">
                <button className="flex justify-center items-center text-base  rounded-full bg-gray h-10 md:h-12 2xl:h-16 w-32 md:w-52 border-[#FFD601] border-2">
                  Clear All
                </button>
                <button
                  onClick={() => setOpen(true)}
                  className="flex relative  z-10 justify-center items-center  rounded-full text-base bg-accenture h-10 md:h-12 2xl:h-16 w-32 md:w-52"
                >
                  Check In
                </button>
              </div>
              <Topsvg className=" absolute topSvg -top-12 -left-11 scale-75" style={{borderRadius: '35px 0px 0px 0px'}} />
              <Bottomsvg className="absolute bottomSvg -bottom-12 -right-11 scale-75" style={{borderRadius: '0px 0px 38px 0px'}} />
            </div>
          </TabPanel>
          <TabPanel value="checkOut">
            <div className="checkout relative flex flex-col justify-between items-center bg-white rounded-2xl h-[35vh] md:h-[40vh] lg:h-[50vh] 2xl:h-[60vh] box-border p-4 md:p-5">
              <div className=" rounded-2xl md:h-[40%] lg:h-[60%] relative z-10">
                <h3 className="text-base md:text-3xl font-bold text-center mb-[6vh]  2xl:mb-24 passcode">
                  Enter passcode
                </h3>
                <ReactCodeInput
                  type="text"
                  fields={6}
                  inputStyle={inputStyling}
                  name="codeInput" 
                  inputMode='email'
                />
              </div>
              <div className="flex justify-center items-center  rounded-2xl gap-x-8 md:gap-x-16 h-[45%] md:h-[50%] lg:h-[40%] ">
                <button className="flex justify-center items-center text-base  rounded-full bg-gray h-10 md:h-12 2xl:h-16 w-32 md:w-52 border-[#FFD601] border-2">
                  Clear All
                </button>
                <button className="flex relative z-10 justify-center items-center rounded-full text-base bg-accenture h-10 md:h-12 2xl:h-16 w-32 md:w-52">
                  Check Out
                </button>
              </div>
              <Topsvg className=" absolute  topSvg -top-12 -left-11 scale-75" style={{borderRadius: '35px 0px 0px 0px'}} />
              <Bottomsvg className="absolute bottomSvg -bottom-12 -right-11 scale-75" style={{borderRadius: '0px 0px 38px 0px'}} />
            </div>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </>
  );
}
