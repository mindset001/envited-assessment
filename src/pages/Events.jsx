import React from "react";
import { Link } from "react-router-dom";

import {MdArrowForwardIos} from "react-icons/md"
import { GrLocation } from "react-icons/gr";
import { BsCalendar3 } from "react-icons/bs"
import { AdminState } from "../contexts/Contexts";
import cake from "../assets/cake.png";

const Events = () => {
  const { values } = AdminState();
  

  return (
    <div className="w-full min-h-screen h-full bg-grey-100 flex items-center justify-center flow-hide ">
      <div className="w-full  lg:w-full mx-auto max-width:[1440px] 2xl:container 2xl:mx-auto flex flex-col lg:flex-row-reverse justify-center items-start lg:justify-between py-[60px]  lg:py-0 lg:px-[170px] ">
        <div className="  sm:w-7/12 lg:w-6/12 mx-auto  2xl:w-5/12 flex items-center  ">
          <img
            src={values.image ? values.image : cake}
            alt=" "
            className="w-full mx-auto sm:w-full 2xl:w-4/12 h-auto 2xl:max-h-[1000px] "
          />
        </div>
        <div className="  sm:w-7/12 lg:w-5/12 2xl:w-4/12 flex mt-8 lg:mt-0 lg:justify-center w-full px-4 sm:px-0 mx-auto  ">
          <div className="flex flex-col   w-full lg:w-full ">
            <h1 className="text-purpleDark text-[28px] sm:text-5xl font-bold">
            {values.type ? values.type : "Event Type"}
            </h1>
            <p className="text-grey-500 text-lg leading-[18px] mt-3">
            Hosted By {values.host}
            </p>
              <Link to="/create" >
            <div className="flex justify-between items-center mt-10 ">

              <div className="flex space-x-4 items-center p-2 cursor-pointer"  >
                <div className="white-shadow p-2 rounded-md">
                  <BsCalendar3 className="text-purpleNormal text-xl" />
                </div>
                <div className="flex flex-col text-lg">
                  <p className="font-bold text-purpleDark text-base sm:text-lg">
                    {values.date ? values.date : "No start date"}, {values.start}
                  </p>
                  <p className="text-grey-600 text-base sm:text-lg">
                    {values.endDate ? ` to ${values.endDate}` : "No end date"}, {values.end}
                  </p>
                </div>
              </div>
              <MdArrowForwardIos className="text-grey-400" />
            </div>
            </Link>
              <Link to="/create" >
            
            <div className="flex justify-between items-center mt-4 cursor-pointer" >
              <div className="flex space-x-4 items-center p-2">
                <div className="white-shadow p-2 rounded-md">
                  <GrLocation className="text-purpleNormal text-xl" />
                </div>
                <div className="flex flex-col text-lg">
                  <p className="font-bold text-purpleDark text-base sm:text-lg">
                    Street name
                  </p>
                  <p className="text-grey-600 text-base sm:text-lg">
                    {values.location ? values.location : "No Location"},{values.state},{values.postcode}
                  </p>
                </div>
              </div>
              <MdArrowForwardIos className="text-grey-400" />
              </div>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
