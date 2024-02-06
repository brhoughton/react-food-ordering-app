import Featured from "@/src/components/Featured";
import Offer from "@/src/components/Offer";
import Slider from "@/src/components/Slider";

export default function Home() {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
}
