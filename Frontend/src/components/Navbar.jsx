import React from "react";

const Navbar = () => {
  return (
    <div className="h-12 bg-transparent w-[90%] flex justify-between mt-4 ml-20">
      <div>
        <img className="" src="" alt="" />
        <h1 className="text-3xl font-bold ">Savero</h1>
      </div>
      <div className="flex">
        <div className = "h-10 flex items-center">
          <a className="text-2xl ml-4 mr-4" href="">
            FEATURES
          </a>
          <a className="text-2xl ml-4 mr-4" href="">
            USE CASES
          </a>
          <a className="text-2xl ml-4 mr-4" href="">
            SUPPORT
          </a>
          <a className="text-2xl ml-4 mr-4" href="">
            ABOUT
          </a>
        </div>
        <div>
          <button className="text-2xl ml-4 mr-4 bg-[#FF5722] px-2 py-1 ">Login/Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
