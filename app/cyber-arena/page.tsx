import Information from "../components/cyber-arena/information-block";
import Cover from "../components/ui/cover";

export default function Page() {
    return (
        <div className={"flex flex-col w-full"}>
            <Cover title={`киберарена`} />
            <Information />
        </div>
    )
}