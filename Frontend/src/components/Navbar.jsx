import React from "react";
import { MoveUpRight } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="h-12 bg-transparent w-[86%] flex justify-between mt-4 ml-40 items-center">
      <div>
        <h1 className="text-5xl ">Savero</h1>
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
          <button className="text-2xl ml-6 mr-6 bg-[#FF5722] px-2 py-1 flex items-center">
            <div className="mr-2 ml-2">
            LOG IN / SIGNUP
            </div>
            <MoveUpRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
