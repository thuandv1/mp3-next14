"use client";

import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import SongDetail from "./SongsDetail";
import { TSong } from "@/types/song";

interface ISongProps {
  song: TSong;
}

function Song(props: ISongProps) {
  const {
    song,
    song: { name, image, artists, release }
  } = props;

  return (
    <div className="flex w-full gap-2 hover:bg-white hover:bg-opacity-10 p-2 rounded-sm group relative">
      <div className="relative">
        <FaPlay className="absolute text-white left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block" />
        <Image
          className="rounded-md group-hover:brightness-50"
          width={60}
          height={60}
          alt=""
          src={image}
        />
      </div>
      <div>
        <h6 className="text-sm cursor-pointer hover:text-purple-400 font-medium">
          {name}
        </h6>
        <span className="text-xs font-light opacity-60">
          {artists.map((artist, index) => (
            <Link
              className="hover:text-purple-400 hover:underline mr-1"
              href={artist}
            >
              {`${artist}${
                index >= 0 && artists.length - 1 !== index ? "," : ""
              }`}
            </Link>
          ))}
        </span>
        <p className="text-xs font-light opacity-60">{release}</p>
      </div>
      <Popover>
        <PopoverTrigger>
          <span className="hidden group-hover:flex items-center justify-center cursor-pointer w-9 h-9 hover:bg-white hover:bg-opacity-10 rounded-full absolute right-6 top-1/2 -translate-y-1/2">
            <BsThreeDots className="" />
          </span>
        </PopoverTrigger>
        <PopoverContent>
          <SongDetail song={song} />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Song;
