import Description from "./components/home-page/description-block";
import Headliners from "./components/home-page/headliners-block";
import Map from "./components/home-page/map-block";
import Cover from "./components/ui/cover";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <Cover />
      <Description />
      <Headliners />
      <Map />
    </div>
  );
}
