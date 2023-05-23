import Card from "./Card";

export default function LifeStyle() {
    return (
        <section>
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <Card />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <Card />
                    <Card />
                    {/* <Card />
                    <Card /> */}
                </div>
            </div>
        </section>
    )
}
