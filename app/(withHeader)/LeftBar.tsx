import { leftBar } from "@/constants/leftBar";
import Image from "next/image";
import { MdOutlineLibraryMusic } from "react-icons/md";

function LeftBar() {
  return (
    <nav className="pt-6 w-60  h-screen bg-white bg-opacity-10">
      <div className="ml-7 mb-6 w-32 h-10 relative">
        <Image
          alt=""
          fill
          src={
            "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          }
        />
      </div>

      <ul>
        {leftBar.slice(0, 3).map((item, index) => (
          <li
            className={`pl-7 flex gap-4 items-center py-3 text-sm font-normal ${
              index === 0 && "font-semibold bg-white bg-opacity-5"
            }`}
            key={item}
          >
            <MdOutlineLibraryMusic />
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LeftBar;
