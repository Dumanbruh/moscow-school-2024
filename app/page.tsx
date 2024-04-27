import Description from "./components/home-page/description-block";
import Headliners from "./components/home-page/headliners-block";

export default function Home() {
  return (
    <div className={"flex flex-col w-full"}>
      <Description />
      <Headliners />
    </div>
  );
}
