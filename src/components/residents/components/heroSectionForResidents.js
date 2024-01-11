import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import FirstResidentChart from "./residentSatisfactoryChart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const HeroSection = () => {
  return (
    <>
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        modules={[Pagination, EffectFade]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="my-3  mb-12 md:my-5 md:mb-14  h-[32vh] md:h-[30vh] lg:h-[42vh] 2xl:h-[40vh] box-border rounded-2xl shadow-[4px_4px_3.2px_2px_rgba(100,132,230,0.20)] hero"
      >

        <SwiperSlide className='h-full w-full bg-white p-2 py-4 md:p-5 rounded-2xl'>
          <div className="flex justify-between items-center mb-3">
            <h5 className="text-sm md:text-md xl:text-2xl font-bold">
              Resident Satisfactory Score Chart
            </h5>
            <button className="flex justify-center gap-x-2 items-center rounded-xl text-base  h-7 md:h-10 w-24 md:w-28">
              <p className="text-xs md:text-sm text-[#6484E6]">This week</p>
              <div className=" w-5 h-5  p-0.5 2xl:w-6 2xl:h-6 flex justify-center items-center">
                <KeyboardArrowDownIcon color={'blue'} className="scale-[0.7] lg:scale-75" />
              </div>
            </button>
          </div>
          <FirstResidentChart />
        </SwiperSlide>
        <SwiperSlide className='h-full w-full rounded-2xl'>

        </SwiperSlide>
        <SwiperSlide className='h-full w-full rounded-2xl'>

        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
