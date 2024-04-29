import Register from "../components/gto-games/register-block";
import Cover from "../components/ui/cover";

export default function Page() {
    return (
        <div className={"flex flex-col w-full"}>
            <Cover title={`игры гто`} />
            <Register />
        </div>
    )
}