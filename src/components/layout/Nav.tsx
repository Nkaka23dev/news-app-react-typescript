import { BiSearch } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'

export default function Nav() {
    return (
        <section className="px-5 py-2 font-press-start">
            <div className="max-w-6xl py-4 mx-auto flex justify-between items-center ">
                <div className="flex gap-7 lg justify-between  items-center">
                    <h1 className='text-4xl font-extrabold md:font-bold'>MAGAZINE</h1>
                    <div className="flex items-center gap-5 lg:hidden">
                        {["Politics", "world", "Media", "Entertainment", "Sports"].map((cat, index) => {
                            return (
                                <div key={index} className='cursor-pointer hover:text-red-500 text-gray-500 flex items-center'>
                                    <p className='text-sm uppercase '>{cat}</p>
                                    <IoIosArrowDown className="font-semibold text-lg" />
                                </div>
                            )
                        })}
                    </div>
                    <div className='flex items-center lg:hidden hover:text-red-500' >
                        <button>More</button>
                        <BsThreeDotsVertical />
                    </div>

                </div>
                <div className='lg:hidden cursor-pointer'>
                    <BiSearch className="text-2xl" />
                </div>
            </div>
        </section>
    )
}
