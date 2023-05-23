import Card from "./Card";
import Cultural from "./Cultural";
import FlatCard from "./FlatCard";
import LifeStyle from "./LifeStyle";
import SocialMedia from "./SocialMedia";
import Title from "./Title";

export default function Technology() {
    return (
        <section className="px-4">
            <div className="grid md:grid-cols-1 grid-cols-3 gap-10 max-w-6xl mx-auto pt-12">
                <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-7 items-start content-start">
                        <div>
                            <Title />
                            <Card />
                        </div>
                        <div>
                            <Title />
                            <Card />
                        </div>
                    </div>
                    <div className="grid gap-5 gap-y-7 py-6 grid-cols-2">
                        <FlatCard />
                        <FlatCard />
                        <FlatCard />
                        <FlatCard />
                    </div>
                    <Title />
                    <LifeStyle />
                    <Title />
                    <Cultural />
                </div>
                {/* end of first grid */}
                <div>
                    <SocialMedia />
                    <div>
                        <div className="grid pb-4">
                            <h1 className="text-xl mx-auto uppercase font-medium text-gray-600">Popular</h1>
                            <div className="h-[3px] w-10 bg-red-500 mx-auto"></div>
                        </div>
                        {[1, 2, 3, 4].map((val, key) => {
                            return (
                                <div>
                                    <Card />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
