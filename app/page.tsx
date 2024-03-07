import Image from "next/image";

import News from "@/components/News";
import Slider from "@/components/Slider";
import Music from "@/components/News/Music";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 py-12 px-10">
      <Slider />
      <News />
      <div className="flex gap-5 flex-wrap">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <Music key={index} />
          ))}
      </div>
    </main>
  );
}
