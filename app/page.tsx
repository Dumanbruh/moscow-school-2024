import Activities from "./components/home-page/activities-block";
import Description from "./components/home-page/description-block";
import Headliners from "./components/home-page/headliners-block";
import Map from "./components/home-page/map-block";
import Schedule from "./components/home-page/schedule-block";
import Card from "./components/ui/card";
import Cover from "./components/ui/cover";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <Cover />
      <Description />
      <Headliners />
      <Map />
      <div className={"overflow-hidden"}>
        <Activities />
      </div>
      <Schedule />
    </div>
  );
}
