import Image from "next/image";

import News from "@/components/New";
import Slider from "@/components/Slider";
import Music from "@/components/New/Song";
import Chill from "@/components/Chill";
import Musics from "@/components/New/Songs";

export default function Home() {
  return (
    <main className="h-[calc(100vh-65px)] overflow-y-scroll flex-col gap-12 py-12 px-10">
      <Slider />
      <News />
      <Musics />
      <Chill />
    </main>
  );
}
