export default function Title() {
    return (
        <section className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-lg text-gray-600 font-medium pb-2 uppercase border-b border-gray-300">
                        <span className="border-b border-b-red-500 pb-2 ">Travel</span>
                    </h1>
                </div>
                <div>
                    <h1 className="text-sm text-gray-600  pb-2 uppercase border-b border-gray-300">
                        <span className="cursor-pointer text-xs">View All</span>
                    </h1>
                </div>
            </div>
        </section>
    )
}
