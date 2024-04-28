"use client";
import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="hidden sm:flex items-center justify-between w-full max-w-7xl  px-6 py-10">
        <div className="flex">
          <h1 className="text-3xl text-blue-600">GSD </h1>
          <h1 className="text-3xl">Group</h1>
          
        </div>
        
        <ul className="flex gap-10 items-center">
          <li className="">Our process</li>
          <li>About us</li>
          <li>
            <button className="bg-blue-600 p-2 px-3 text-sm text-white rounded-full">
              Contact us
            </button>
          </li>
          <li>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700">
              <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
            </svg>
          </li>
        </ul>
      </nav>

      <nav className="flex sm:hidden items-center justify-between w-full max-w-7xl text-black px-6 py-10">
        <h1 className="text-3xl">GSD Group</h1>
        <button
          className="cursor-pointer"
          onClick={() => setActive((active) => !active)}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`h-6 w-6 z-[100000]  ${
              active ? "fill-white" : "fill-neutral-950"
            } group-hover:fill-neutral-700`}>
            <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
          </svg>
        </button>
        <ul
          className={` transition-all duration-700 text-3xl flex h-screen p-20 items-center flex-col text-white gap-5 absolute top-0 ${
            active ? "left-0" : "left-[100%]"
          } inset-x-0 z-[100] bg-black `}>
          <li className="text-white">Our process</li>
          <li className="text-white">About us</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </>
  );
}
