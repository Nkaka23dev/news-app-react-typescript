export default function Card() {
    return (
        <div>
            <div className="relative cursor-pointer">
                <div className="hover:bg-gray-50 duration-700  hover:opacity-5 absolute w-full h-full"></div>
                <img src="https://cheerup.theme-sphere.com/magazine/wp-content/uploads/sites/7/2017/03/shutterstock_521261641-1-450x300.jpg" className="w-full h-full object-cover object-center" alt="" />
            </div>
            <div className="py-4 cursor-pointer">
                <p className="font-semibold text-lg">Amazing Things You May Have
                    Missed Growing up</p>
                <p className="pt-3 text-sm opacity-70">BY<span className="text-red-600 px-1">SHANE DOE</span>
                    <span className="text-gray-700">MAY 14, 2016</span> </p>
            </div>
            <div>
                <p className="text-gray-600 text-sm leading-6">More off this less hello salamander lied porpoise
                    much over tightly circa horse taped so innocuously
                    outside crud mightily rigorous...</p>
            </div>
        </div>
    )
}
