import LandingSec from "@/components/home/landing";
import Destination from "@/components/home/destination";
import Scholarship from "@/components/home/scholarship";
import Webinar from "@/components/home/webinars";
export default function Home() {
  return (
    <main className="">
      <LandingSec />
      <Destination />
      <Scholarship />
      <Webinar />
    </main>
  );
}
