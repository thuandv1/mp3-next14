import React from "react";
import Song from "./Song";
import { songsNew } from "@/data/songsNew";

export default function Songs() {
  return (
    <div className="w-full gap-5 inline-grid grid-cols-3">
      {songsNew.map((song) => (
        <Song song={song} />
      ))}
    </div>
  );
}
