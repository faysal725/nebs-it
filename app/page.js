import Image from "next/image";
import Herosection from "./ui/Herosection";
import herosectionBg from "@/assets/herosection/herosection-bg.jpg";

export default function Home() {
  return (
    <div className=" bg-cover bg-center" 
    style={{ backgroundImage: `url(${herosectionBg.src})` }}>
      <Herosection />
    </div>
  );
}
