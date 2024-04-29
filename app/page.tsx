import Activities from "./components/home-page/activities-block";
import Description from "./components/home-page/description-block";
import Headliners from "./components/home-page/headliners-block";
import Map from "./components/home-page/map-block";
import Schedule from "./components/home-page/schedule-block";
import Cover from "./components/ui/cover";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <div className="relative">
        <Cover />
        <Description />
        <Headliners />
        <Map />
        <div className={"overflow-hidden"}>
          <Activities />
        </div>
        <Schedule />
        <div className={
          "bg-[url('/images/desktop/home/activities/activities-bg.png')] bg-contain bg-no-repeat bg-left w-[100%] h-[700px] absolute top-[68%] left-0 -z-10"
        } />
      </div>
    </div>
  );
}
