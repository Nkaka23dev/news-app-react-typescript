import Card from "./Card"
import Title from "./Title"
export default function Latest() {
    return (
        <section className="px-5 pt-10">
            <div className="max-w-6xl mx-auto">
                <Title />
                <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 pb-8 pt-3 gap-6">
                    {["Card one", "card 2", "card three","Card one", "card 2", "card three"].map((val, idx) => {
                        return (
                            <div>
                                <Card />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
