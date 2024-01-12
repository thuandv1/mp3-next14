"use client";

import { leftBar } from "@/constants/leftBar";
import Image from "next/image";
import { useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { MdOutlineLibraryMusic } from "react-icons/md";

function LeftBar() {
  const [collapseMenu, setCollapseMenu] = useState(false);

  return (
    <nav
      onClick={() => setCollapseMenu((prev) => !prev)}
      className={`pt-6 h-screen bg-white bg-opacity-10 flex flex-col overflow-hidden ${
        collapseMenu ? "w-6" : "w-60"
      }`}
    >
      <div className="ml-7 w-32 h-20 relative">
        <Image
          alt=""
          fill
          src={
            "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          }
        />
      </div>

      <ul className="mt-7">
        {leftBar.slice(0, 3).map((item, index) => (
          <li
            className={`pl-7 relative flex gap-4 items-center py-3 text-sm font-normal opacity-80 cursor-pointer  ${
              index !== 0 && "hover:opacity-100 group"
            } ${index === 0 && "font-semibold bg-white bg-opacity-5"}`}
            key={item}
          >
            <MdOutlineLibraryMusic className="text-2xl" />
            {item}
            <FaRegCirclePlay className="hidden group-hover:inline-block text-lg absolute right-4 top-1/2 -translate-y-1/2" />
            {index === 0 && (
              <span className="absolute left-0 w-1 h-full bg-purple-600"></span>
            )}
          </li>
        ))}
        <li className="border-t border-white border-opacity-25 backdrop-blur-sm h-5"></li>
      </ul>
      <ul className="overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll">
        {leftBar.slice(3, 6).map((item, index) => (
          <li
            className={
              "pl-7 relative flex gap-4 items-center py-3 text-sm font-normal opacity-80 cursor-pointer hover:opacity-100 group"
            }
            key={item}
          >
            <MdOutlineLibraryMusic className="text-2xl" />
            {item}
            <FaRegCirclePlay className="hidden group-hover:inline-block text-lg absolute right-4 top-1/2 -translate-y-1/2" />
          </li>
        ))}
        <li className="w-52  ml-4 mt-4 h-32 relative">
          <Image
            fill
            alt=""
            src={
              "https://static-zmp3.zmdcdn.me/images/best-of-2023/promote.png"
            }
          />
        </li>
        <li className="w-52  ml-4 mt-4 h-32 relative">
          <Image
            fill
            alt=""
            src={
              "https://static-zmp3.zmdcdn.me/images/best-of-2023/promote.png"
            }
          />
        </li>
        {leftBar.slice(6, 9).map((item) => (
          <li
            className={
              "pl-7 relative flex gap-4 items-center py-3 text-sm font-normal opacity-80 cursor-pointer hover:opacity-100 group"
            }
            key={item}
          >
            <MdOutlineLibraryMusic className="text-2xl" />
            {item}
            <FaRegCirclePlay className="hidden group-hover:inline-block text-lg absolute right-4 top-1/2 -translate-y-1/2" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LeftBar;
