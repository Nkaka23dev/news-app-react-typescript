import HeroText from "./HeroText";
import Opacity from "./Opacity";

export default function Hero() {
    return (
        <section className="px-5 md:px-2">
            <div className="max-w-6xl mx-auto lg:grid-cols-1 grid grid-cols-2 h-[65vh] lg:h-full gap-1">
                <div className="relative group cursor-pointer overflow-hidden">
                    <div className="group-hover:scale-105 duration-300  w-full h-full">
                        <Opacity />
                        <img src="https://cheerup.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/08/shutterstock_357792800-768x512.jpg" className="w-full h-full object-cover object-center " alt="" />
                    </div>
                    <HeroText />
                </div>
                <div className="grid grid-cols-2 gap-1 relative  cursor-pointer">
                    <div className="relative cursor-pointer overflow-hidden group">
                        <div className="group-hover:scale-105 duration-300  w-full h-full">
                            <Opacity />
                            <img src="https://cheerup.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_180272480-768x512.jpg" className="w-full h-full object-cover object-center" alt="" />
                        </div>
                        <HeroText invert />
                    </div>
                    <div className="relative cursor-pointer overflow-hidden group">
                        <div className="group-hover:scale-105 duration-300  w-full h-full">
                            <Opacity />
                            <img src="https://cheerup.theme-sphere.com/magazine/wp-content/uploads/sites/7/2016/05/shutterstock_362367734-scaled-768x1010.jpg" className="w-full h-full object-cover object-center objec" alt="" />
                        </div>
                        <HeroText invert />
                    </div>
                </div>
            </div>
        </section>

    )
}
