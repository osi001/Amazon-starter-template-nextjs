import React from "react";
import Image from "next/image";
import { BeakerIcon } from "@heroicons/react/20/solid";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header>
      {/* Top nav */}
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow-0">
        <div className=" mt-2 flex items-center  flex-grow sm:flex-grow-0s ">
          <Image
            src="https://links.papareact.com/f90"
            height={50}
            width={150}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search bar */}

        <div className=" hidden items-center h-10 rounded-md flex-shrink flex-grow cursor-pointer sm:flex bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className=" focus:outline-none rounded-l-md flex-grow h-full px-4 p-2"
          />
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="17"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Right side */}

        <div className=" text-white items-center flex text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className=" link">
            <p>Hello, Osi</p>
            <p className=" font-extrabold md:text-sm">Accounts & lis link </p>
          </div>

          <div className=" link">
            <p>Returns</p>
            <p className=" font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className=" relative flex items-center link">
            <span className=" absolute top-0 right-0 md:right-9 h-4 w-4 bg-yellow-400 text-center rounded-lg font-bold">
              4
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width="30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <p className=" hidden md:inline-flex mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className=" space-x-3 p-1 pl-6 flex bg-amazon_blue-light items-center text-white text-sm">
        <p className=" flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          All
        </p>

        <p className="link"> Prime Video</p>
        <p className="link"> Amazon Business</p>
        <p className="link"> Today's Deals</p>
        <p className="link hidden lg:inline-flex"> Electronics </p>
        <p className="link hidden lg:inline-flex"> Food & Grocery </p>
        <p className="link hidden lg:inline-flex"> Prime </p>
        <p className="link hidden lg:inline-flex"> Buy Again </p>
        <p className="link hidden lg:inline-flex"> Shopper Toolkit </p>
        <p className="link hidden lg:inline-flex"> Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
