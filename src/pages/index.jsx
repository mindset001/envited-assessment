import React from 'react'
import {Link} from "react-router-dom"
import landingImage from "../assets/landing-img.svg"
const Home = () => {
  

  return (
    <div className="w-full min-h-screen h-full landing-bg flex items-center justify-center flow-hide ">
      <div className="w-full  lg:w-full mx-auto max-width:[1440px] 2xl:container 2xl:mx-auto flex flex-col-reverse lg:flex-row justify-center items-center lg:justify-between py-[60px]  lg:py-0 lg:px-[170px] ">
        <div className="left   2xl:w-5/12 flex items-center flex-col ">
          <img
        //    src='../assets/landing-img.svg'
            src={landingImage}
            alt="landing-page"
            className="w-8/12 sm:w-full 2xl:w-9/12 h-auto "
          />
          <Link to="/create" className='block lg:hidden mt-8'>
            <p className="btn text-[20px] text-white font-bold cursor-pointer mx-auto">
              🎉 Create my event
            </p>
          </Link>
        </div>
        <div className="right  2xl:w-6/12 flex justify-center lg:justify-end">
          <div className="flex flex-col items-center lg:items-end lg:w-full">
            <h1 className="text-purpleDark w-9/12 lg:w-8/12 leading-[41px] sm:leading-[64px] text-center lg:text-right text-[36px] sm:text-[64px] lg:text-[64px] font-[700] ">
              Imagine if <span className="grad-text">Snapchat</span>
              <br />
              had events.
            </h1>
            <p className="text-grey-600 font-thin text-base sm:text-[24px] text-center lg:text-end sm:w-9/12 mb-8  lg:w-10/12  mt-2 sm:mt-4">
              Easily host and share events with your friends across any social
              media.
            </p>
            <Link to="/create" className="hidden lg:block">
              <p className="btn text-[20px] text-white font-bold cursor-pointer">
                🎉 Create my event
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home