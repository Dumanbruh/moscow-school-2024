import Image from "next/image";
import Cover from "./components/ui/cover";
import Header from "./components/ui/header";

export default function Home() {
  return (
    <div className={"w-full flex flex-col"}>
      <Cover />
      <div className={"mx-auto"}>
        <Header />

      </div>
    </div>
  );
}
