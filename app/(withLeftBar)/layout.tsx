import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/Common/Header";
import LeftBar from "./LeftBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zing MP3",
  description: "Generated by create next app"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <>
          {/* <LeftBar/> */}
          {children}
      </>
  );
}
