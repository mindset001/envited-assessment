import React from "react";
import { Link } from "react-router-dom";
import { AdminState } from "../contexts/Contexts";
import {BsFillCloudUploadFill} from "react-icons/bs"
import Input from "../components/Input";
// import { MomentInput } from "react-moment-input";
const CreateEvent = () => {
  const {
    values,
    // setValues,
    handleChange,
    // image,
    // setImage,
    // handleChangeImage,
    handleImage,
  } = AdminState();
  return (
    <div className="w-full min-h-screen h-full bg-grey-100 flex items-center justify-center flow-hide ">
      <div className="w-full  lg:w-full mx-auto max-width:[1440px] 2xl:container 2xl:mx-auto flex flex-col lg:flex-col justify-center items-center lg:justify-between py-[30px]  lg:py-[30px] lg:px-[170px] ">
        <h1 className="text-purpleLight text-center text-[32px] sm:text-[52px]  leading-[41px] sm:leading-[64px] mx-auto ">
          Schedule an Event
        </h1>
        <p className="text-sm text-center text-grey-600 mb-8">
          {" "}
          Note: All fields are required
        </p>
        <div className="w-10/12 sm:w-8/12 lg:w-6/12 2xl:w-5/12 mx-auto flex flex-col space-y-6">
          <Input
            name="event"
            label="Event name"
            type="text"
            placeholder="Event name"
            value={values.event}
            handleChange={handleChange}
          />
          <Input
            name="host"
            label="Host name"
            type="text"
            placeholder="Host name"
            value={values.host}
            handleChange={handleChange}
          />
           <Input
            name="type"
            label="Event type"
            type="text"
            placeholder="Event type"
            value={values.type}
            handleChange={handleChange}
          />
          
          <Input
            name="location"
            label="Address"
            type="text"
            placeholder="Enter Address"
            value={values.location}
            handleChange={handleChange}
          />
          <Input
            name="state"
            label="Event State"
            type="text"
            placeholder="Enter State"
            value={values.state}
            handleChange={handleChange}
          />
          <Input
            name="postcode"
            label="Postcode"
            type="number"
            placeholder="Postcode"
            value={values.postcode}
            handleChange={handleChange}
          />
           <Input
            name="date"
            label="Start Date"
            type="date"
            placeholder="18 August 6:00PM"
            // info="Note the time zone is UTC + 10"
            value={values.date}
            handleChange={handleChange}
          />
           <Input
            name="start"
            label="Start Time"
            type="time"
            placeholder="18 August 6:00PM"
            info="Note the time zone is UTC + 10"
            value={values.start}
            handleChange={handleChange}
          />
         
          <Input
            name="endDate"
            label="End Date"
            type="date"
            value={values.endDate}
            handleChange={handleChange}
          />
          
          <Input
            name="end"
            label="End time"
            type="time"
            placeholder="18 August 6:00PM"
            info="Note the time zone is UTC + 10"
            value={values.end}
            handleChange={handleChange}
          />
          <div className="border-[1px] border-[#ccc] w-full space-y-4 flex flex-col justify-center items-center py-6 rounded-[4px] relative">
            <input
              type="file"
              name="image"
              className="absolute cursor-pointer inset-0 w-full h-full opacity-0 text-transparent"
              handleChange={handleChange}
              value={values.image}
              // onChange={onImageChange}
            />
            <div>
              <BsFillCloudUploadFill />
            </div>
            <h1 className="text-[20px] font-[600] text-dark leading-[25px]">
              Add Photos
            </h1>
            <p className="text-md leading-[22px] text-light">
              or drag and drop
            </p>
          </div>
          <Link to="/event">
          <div className="w-full h-12 border border-grey-600 btn py-2 mx-auto text-white cursor-pointer flex items-end justify-center font-bold">
            

            <p>Next</p>
          
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
