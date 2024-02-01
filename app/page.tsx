import Featured from "@/src/components/Featured";
import Offer from "@/src/components/Offer";
import Slider from "@/src/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
