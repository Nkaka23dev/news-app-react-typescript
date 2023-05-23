export default function FlatCard() {
    return (
        <div className="grid grid-cols-3 gap-2">
            <div>
                <img src="https://cheerup.theme-sphere.com/magazine/wp-content/uploads/sites/7/2017/03/shutterstock_521261641-1-450x300.jpg" className="w-full h-full object-cover object-center" alt="" />
            </div>
            <div className="col-span-2 py-1">
                <h1 className="text-sm font-medium">Using Manual Camera Controls:
                    Improving Image Quality</h1>
                <p className="text-xs text-gray-500 mt-3">MAY 14, 2016</p>
            </div>

        </div>
    )
}
