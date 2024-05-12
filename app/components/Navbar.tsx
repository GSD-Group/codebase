"use client";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { useRouter } from "next/navigation";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/Sheet";
import Link from "next/link";
export default function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const handleNav = (nav: string) => {
    router.push(nav, { scroll: false })
  };
  return (
    <>
      <nav className="hidden sm:flex items-center justify-between w-full max-w-7xl  px-6 py-10">
        <div className="flex">
          <h1 className="text-3xl text-blue-600">GSD </h1>
          <h1 className="text-3xl">Group</h1>
        </div>

        <ul className="flex gap-10 items-center">
          <Link href={"/"}>
            <li>Home</li>
          </Link>

          <Link href="/about">
            <li>About us</li>
          </Link>

          <li>
            <Link href={"/contact"}>
              <button className="bg-blue-600 p-2 px-3 text-sm text-white rounded-full">
                Contact us
              </button>{" "}
            </Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <nav className="flex sm:hidden items-center justify-between w-full max-w-7xl  px-6 py-10">
        <div className="flex">
          <h1 className="text-3xl text-blue-600">GSD </h1>
          <h1 className="text-3xl">Group</h1>
        </div>

        <ul className="flex gap-10 items-center">
          {/* <li className="">Our process</li>
          <li>About us</li>
          <li>
            <button className="bg-blue-600 p-2 px-3 text-sm text-white rounded-full">
              Contact us
            </button>
          </li> */}
          <li>
            {" "}
            <Sheet>
              <SheetTrigger asChild>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-6 w-6 fill-neutral-950 group-hover:fill-neutral-700">
                  <path d="M2 6h20v2H2zM2 16h20v2H2z"></path>
                </svg>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    {" "}
                    <div className="flex w-full justify-center">
                      <h1 className="text-3xl text-blue-600">GSD </h1>
                      <h1 className="text-3xl">Group</h1>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex  text-3xl mt-20 flex-col gap-10 items-center">
                  <SheetClose>
                    <li onClick={ () => handleNav("/")}>Home</li>{" "}
                  </SheetClose>
                  <SheetClose>
                  
                      {" "}
                      <li onClick={() => handleNav("/about")}>About us</li>
                   
                  </SheetClose>
                  <SheetClose>
             
                      <li>
                        <button onClick={() => handleNav("/contact")} className="bg-blue-600 p-2 px-3 text-xl text-white rounded-full">
                          Contact us
                        </button>
                      </li>{" "}
                    
                  </SheetClose>
              
                </ul>

                <SheetFooter></SheetFooter>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>
    </>
  );
}
