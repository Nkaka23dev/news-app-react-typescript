import { BiSearch } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

export default function Nav() {
    return (
        <section className="px-5 py-2 font-press-start">
            <div className="max-w-6xl py-4 mx-auto flex justify-between items-center ">
                <div className="flex gap-7 justify-between items-center">
                    <h1 className='text-4xl font-extrabold'>MAGAZINE</h1>
                    <div className="flex items-center gap-5">
                        {["Politics", "world", "Media", "Entertainment", "Sports"].map((cat, index) => {
                            return (
                                <div key={index} className='cursor-pointer text-gray-500'>
                                    <p className='text-lg font-semibold'>{cat}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex items-center' >
                        <button>More</button>
                        <BsThreeDotsVertical />
                    </div>

                </div>
                <div>
                    <BiSearch className="text-2xl" />
                </div>
            </div>
        </section>
    )
}
