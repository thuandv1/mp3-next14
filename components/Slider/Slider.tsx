"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

import "./slide.scss";

const activeItems = ["first", "second", "third"];

const initImages = [
  "https://photo-zmp3.zmdcdn.me/banner/6/b/e/e/6beefecd441eab6deee098f2d3ab8667.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/2/6/f/4/26f47a1d0bfd75d67b1d4096d9e05002.jpg",
  "https://photo-zmp3.zmdcdn.me/banner/5/1/3/c/513cd3dfe7684bd81afac18cb07c0ba6.jpg"
];

function Slider() {
  const [itemIndex, setItemIndex] = useState(activeItems);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setItemIndex((prevIndex) => {
        const [a, b, c] = prevIndex;
        return [c, a, b];
      });
    }, 2000);

    if (timer && isFocus) {
      clearInterval(timer);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [isFocus]);

  return (
    <div
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
      className="flex gap-5 relative group w-full h-40"
    >
      {initImages.map((item, index) => (
        <div
          key={item}
          className={classNames(
            "w-72 h-40 rounded-lg overflow-hidden absolute z-10 cursor-pointer",
            itemIndex[index],
            index === 2 && "z-0"
          )}
        >
          <Image alt="" src={item} fill />
        </div>
      ))}

      <div 
        onClick={() => {
          setItemIndex((prevIndex) => {
            const [a, b, c] = prevIndex;

            return [b, c, a];
          });
        }}
      className="z-10 hidden absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 w-14 h-14 rounded-full group-hover:flex cursor-pointer items-center justify-center">
        <GrNext className="text-xl" />
      </div>
      <div
        onClick={() => {
          setItemIndex((prevIndex) => {
            const [a, b, c] = prevIndex;

            return [b, c, a];
          });
        }}
        className="z-10 hidden absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 w-14 h-14 rounded-full group-hover:flex cursor-pointer items-center justify-center"
      >
        <GrPrevious className="text-xl" />
      </div>
    </div>
  );
}

export default Slider;
