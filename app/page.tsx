import Image from "next/image";

import News from "@/components/News";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 py-12 px-10">
      <Slider />
      <News />
    </main>
  );
}
