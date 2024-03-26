"use client"; //create context error

import Image from "next/image";
import { CiSettings } from "react-icons/ci";
import { GoDesktopDownload } from "react-icons/go";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { IoMdSearch } from "react-icons/io";
import { AiOutlinePlayCircle } from "react-icons/ai";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { MdOutlineNavigateNext } from "react-icons/md";

interface IProps {}

function Header(props: IProps) {
  return (
    <header className="flex items-center px-10 py-3 justify-between flex-1">
      <div className="flex gap-8 ">
        <GrLinkPrevious className="cursor-pointer opacity-30" />
        <GrLinkNext className="cursor-pointer opacity-30" />
      </div>
      <div className="bg-white bg-opacity-5 w-96 rounded-full relative px-10 py-2">
        <IoMdSearch className="absolute ml-2 left-0 top-1/2 -translate-y-1/2 text-2xl opacity-80" />
        <input
          className="bg-transparent border-none outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-10">
        <div className="bg-white bg-opacity-5 w-42 px-8 py-2 flex items-center gap-3 rounded-full cursor-pointer">
          <GoDesktopDownload className="text-purple-600 font-bold" />
          <span className="text-purple-600">Download Windows</span>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <div className="bg-white w-10 flex items-center justify-center bg-opacity-5 py-2 gap-3 rounded-full cursor-pointer">
              <CiSettings className="text-xl" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="bg-purple-primary text-white border-none p-2">
            <HoverCard >
              <HoverCardTrigger>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center py-3 px-2 rounded-sm hover:bg-slate-300 hover:bg-opacity-30">
                    <AiOutlinePlayCircle className="text-2xl font-light"/>
                    <div className="flex flex-1 justify-between items-center">
                      Trình phát nhạc
                      <MdOutlineNavigateNext className="text-2xl font-light"/>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center py-3 px-2 rounded-sm hover:bg-slate-300 hover:bg-opacity-30">
                    <AiOutlinePlayCircle className="text-2xl font-light"/>
                    <div className="flex flex-1 justify-between items-center">
                      Giao diện
                      <MdOutlineNavigateNext className="text-2xl font-light"/>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="bg-purple-primary text-white border-none shadow-sm shadow-slate-950" side="left">Hello Nolan</HoverCardContent>
            </HoverCard>
          </PopoverContent>
        </Popover>
        <Image
          alt=""
          width={38}
          height={38}
          className="rounded-full"
          src={
            "https://s120-ava-talk-zmp3.zmdcdn.me/f/a/5/d/7/120/aca0a8965c8dc9f14c5bebfdacfba65b.jpg"
          }
        />
      </div>
    </header>
  );
}

export default Header;
