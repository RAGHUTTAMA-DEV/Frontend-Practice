import Card from "../components/ui/Card";

export default function Cards(){
    return(
        <div>
            <div className="flex flex-wrap gap-4 justify-center mt-10">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}