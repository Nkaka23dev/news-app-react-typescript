import FlatCard from "./FlatCard"

export default function Cultural() {
    return (
        <div className="space-y-4 py-4">
            {[1, 2, 3, 4, 5, 6].map((val, idx) => {
                return (
                    <FlatCard/>
                )
            })}
        </div>
    )
}
